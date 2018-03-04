var express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  html = require('express-handlebars'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  config = require('./config/config').CONFIG_MONGO,
  app = express()

// Config mongoose
mongoose.Promise = global.Promise
mongoose.connect(config._MONGO_LINK, {
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
  var err = new Error('Not Found');
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
  userRoute = require('./routes/userRoute')(app),
  index = require('./routes/index')(app)

module.exports = app;
