var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Expresss' });
});

router.get('/user', function (req, res, next) {
  var a = req.query.abc

  res.json(
    { User: a }
  )
});

router.post('/user', function (req, res, next) {
  var a = req.body.hihi

  res.send(
    { User: a }
  )
});

module.exports = router;
