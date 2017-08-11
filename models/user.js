// backend authentication

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// validateEmail needs to be validate before passing it to schema
var validateEmail = (email) => {
  return (/\S+@\S+\.\S+/).test(email);
};

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Email address is required!',
    validate: [validateEmail, 'Please enter a valid email!']
  },
  password: {
    type: String
  },
  name: String,
  connectionsToMe: [String],
  connectionsToOthers: [String],
  photo:     String,
  phone:     String,
  address:   String,
  birthday:  String,
  linkedin:  String,
  snapchat:  String,
  facebook:  String,
  instagram: String,
  twitter:   String,
  github:    String
}); // end userSchema

// this function will be executed before user is saved
userSchema.pre('save', function(next){
  var user = this;

  // test to see if this user (email) is registered in the database
  if (user.isNew || user.isModified('password')) {
    // higher number is more secured
    bcrypt.genSalt(10, function(err, salt){
      if(err){
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(error, hash) {
        if(error){
          return next(error);
        }
        user.password = hash;
        next();
      }); //bcrypt.has
    });//end bcrypt.genSalt
  } else {
    next();
  }
});//end userSchema.pre

userSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){
      return callback(err);
    }
    callback(null, isMatch);
  }); // end bcrypt.compare
}; // end userSchema.methods

module.exports = mongoose.model('user', userSchema);
