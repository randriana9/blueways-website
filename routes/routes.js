var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
})

router.get('/error', function(req, res, next) {
  res.render('error', { data: res});
})

router.get('/about', function(req, res, next) {
  res.render('about');
})

router.get('/projects', function(req, res, next) {
  res.render('projects');
})

router.get('/contact', function(req, res, next) {
  res.render('contact');
})

router.get('/support', function(req, res, next) {
  res.render('support');
})

router.get('/member', function(req, res, next) {
  res.render('member');
})

router.get('/news', function(req, res, next) {
  res.render('news');
})

router.get('/contactresponse', function(req, res, next) {
  res.render('contactresponse');
})

router.get('/member-response', function(req, res, next) {
  res.render('member-response');
})

module.exports = router;