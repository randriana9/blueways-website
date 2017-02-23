var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('lang-fr/index-fr');
})

router.get('/about', function(req, res, next) {
  res.render('lang-fr/about-fr');
})

router.get('/projects', function(req, res, next) {
  res.render('lang-fr/projects-fr');
})

router.get('/contact', function(req, res, next) {
  res.render('lang-fr/contact-fr');
})

router.get('/support', function(req, res, next) {
  res.render('lang-fr/support-fr');
})

router.get('/member', function(req, res, next) {
  res.render('lang-fr/member-fr');
})

router.get('/news', function(req, res, next) {
  res.render('lang-fr/news-fr');
})

router.get('/contactresponse', function(req, res, next) {
  res.render('lang-fr/contactresponse-fr');
})

router.get('/member-response', function(req, res, next) {
  res.render('lang-fr/member-response-fr');
})

module.exports = router;