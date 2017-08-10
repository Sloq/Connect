const passport = require('passport');
const ExtraJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('../config');

// local options and Strategy are for sign-in
var localOptions = {
  usernameField: 'email'
}; // end localOptions

var localStrategy = new LocalStrategy(localOptions,
  function(email, password, done){
    //Verify this username and password
    User.findOne({email: email.toLowerCase()}, function(err, user) {
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, false);
      }
      user.comparePassword(password, function(err, isMatch){
        if(err){
          return done(err);
        }
        if(!isMatch){
          return done(null, false);
        }
        return done(null, user);
      });// end user.comparePassword
    }); // end User.findOne
}); // end localStrategy

// local options and Strategy are for sign-up
var jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtraJwt.fromHeader('authorization') // header of http request
}; //end jwtOptions

// middleware that protects our routes
// payload - undescripted token
var jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done){
  User.findById(payload.sub, function(err, user) {
    if(err){
      return done(err, false);
    }
    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  }); // end User.findById
}); // end var jwtStrategy

passport.use(localStrategy);
passport.use(jwtStrategy);
