const User = require('../models/user');

exports.create = function(req, res) {
  const newUser = new User(req.body);
  newUser.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json(newUser);
    }
  });
};

exports.show = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

exports.index = function(req, res) {
  User.find(function(err, user) {
    if (err) {
      console.log("argh");
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

//want to impliment a function within this to update all connectionsToMe
exports.update = function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$set: req.body}, {new: true},
    function(err, user) {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    }
  );
};

//delete account
exports.destroy = function(req, res) {
  User.findByIdAndRemove(
    req.params.userId,
    function(err, user) {
      if (err) {
        res.send(err);
      } else {
      res.json({ message: 'User successfully deleted' });
      }
    }
  );
};
