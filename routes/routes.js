var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/about', function(req, res, next) {
  res.render('about.html');
});

router.get('/projects', function(req, res, next) {
  res.render('projects.html');
});

router.get('/contact', function(req, res, next) {
  res.render('contact.html');
});*/

router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router;