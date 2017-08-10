// backend authentication

const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

//create session token for user
function tokenForUser(user){
  var timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, config.secret);
}//end tokenForUser

exports.signin = function(req, res, next){
  var user = req.user;
  res.send({token: tokenForUser(user), user_id: user._id});
}; // end sigin

exports.signup = function(req, res, next){
  var email = req.body.email;
  var password = req.body.password;
  if(!email || !password){
    return res.status(422)
    .json({error: "Email or password is invalid!"});
  }

// check to see if user exists, send errors if they do
  User.findOne({email:email}, function(err, exisitingUser) {
    if(err) {
      return next(err);
    }
    if(exisitingUser){
      return res.status(422).json({
        error: "Email has already been registered! Use another email"
      });
    }
    var user = new User({
      email: email,
      password: password
    });//end var user

    // save the user and return a user_id and token
    user.save(function(err){
      if(err){
        return next(err);
      }
      res.json({user_id: user._id, token: tokenForUser(user)});
    }); //end user.save
  });//end User.findOne


}; //end signup
