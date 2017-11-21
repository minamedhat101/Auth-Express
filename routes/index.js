var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function (req, res, next) {
  var messages = req.flash('error');
  res.render('index', {
    title: 'Express',
    csrfToken: req.csrfToken(),
    messages: messages,
    hasError: messages.length > 0
  });
});

router.post('/user/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/',
  failureFlash: true
}));



module.exports = router;