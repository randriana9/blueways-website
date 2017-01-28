var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/about', function(req, res, next) {
  res.render('about.html');
});

router.get('/projects', function(req, res, next) {
  res.render('projects.html');
});

module.exports = router;