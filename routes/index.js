var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/home', function(req, res, next) {
  res.render('index.html');
});

router.get('/services', function(req, res, next) {
  res.render('services.html');
});

router.get('/about', function(req, res, next) {
  res.render('about.html');
});

router.get('/contact', function(req, res, next) {
  res.render('contact.html');
});

module.exports = router;
