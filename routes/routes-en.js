var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('lang-en/index-en');
})

router.get('/about', function(req, res, next) {
  res.render('lang-en/about-en');
})

router.get('/projects', function(req, res, next) {
  res.render('lang-en/projects-en');
})

router.get('/contact', function(req, res, next) {
  res.render('lang-en/contact-en');
})

router.get('/support', function(req, res, next) {
  res.render('lang-en/support-en');
})

router.get('/member', function(req, res, next) {
  res.render('lang-en/member-en');
})

router.get('/news', function(req, res, next) {
  res.render('lang-en/news-en');
})

router.get('/contactresponse', function(req, res, next) {
  res.render('lang-en/contactresponse-en');
})

router.get('/member-response', function(req, res, next) {
  res.render('lang-en/member-response-en');
})

module.exports = router;