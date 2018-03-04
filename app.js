// Set timezone: Asia
process.env.TZ = 'Asia/Ho_Chi_Minh'

var express = require('express'),
  config_mog = require('./config/config').CONFIG_MONGO,
  config = require('./config/config').CONFIG_API,
  port = process.env.PORT || config.__port_server,
  app = express()
  path = require('path'),
  html = require('express-handlebars'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser')

// Config mongoose
mongoose.Promise = global.Promise
mongoose.connect(config_mog._MONGO_LINK, {
  useMongoClient: true,
})

// Config template views
app.engine('html', html({
  extname: 'html',
  defaultLayout: 'template-layout',
  layoutsDir: __dirname + '/views/'
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

// Config body parser json
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Config Public folder
app.use(express.static(path.join(__dirname, 'public')))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not 5 Found');
  err.status = 404;
  next(err);
});

// Model config
var categoryModel = require("./models/categoryModel"),
  filmModel = require('./models/filmModel'),
  userModel = require('./models/userModel')

// Route config
var adminRoute = require('./routes/adminRoute')(app),
  categoryRoute = require('./routes/categoryRoute')(app),
  filmRoute = require('./routes/filmRoute')(app),
  userRoute = require('./routes/userRoute')(app)
  // index = require('./routes/index')

app.listen(port)
