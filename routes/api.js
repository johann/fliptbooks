var express = require('express');
var passport = require('passport')
require('../config/passport')(passport)
var jwt = require('jsonwebtoken')
var router = express.Router();



router.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
}));

router.get('/currentuser', passport.authenticate('jwt', { session: false}), function(req, res) {
  res.json({user_id: req.user._id, email: req.user.local.email})
})


router.post('/login', passport.authenticate('local-login'), function(req, res, next) {
  console.log(req.user)
  var token = jwt.sign({ user_id: req.user._id }, 'learnlovecode')
  res.json({succes:true, user: req.user._id, jwt: token})
});


module.exports = router;
