// import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Connection = require('../models/connection');
var User = require('../models/user');

//the user creates a new connection, a reference to that connection is
//stored in the users connectionsToMe
//json of that new connection is returned so that it can be put into
//the qr code, the scanning by someone else will initiate an update request for
//the other users account. It will be an update of a single parameter, updating their connectionsToOthers

//implimented the show method below to try to build off the response of this
exports.create = function(req, res) {
  const newConnection = new Connection(req.body);
  console.log(req.body);
  newConnection.save((err, connection) => {
      if (err) {
        res.send(err);
      } else {
        User.findOneAndUpdate({"email": req.body.email}, {$push: {"connectionsToMe": connection._id}}, function(error, user) {
          if (error) {
            res.send(error);
          } else {
            res.json(connection._id);
          }
        });
      }
    }
  );
};

//to get this method to work will need to pass user email in body
exports.show = function(req, res) {
  Connection.findById(
    req.params.connectionId,
    function(err, connection) {
      if (err) {
        res.send(err);
      } else {
        User.findOneAndUpdate({"email": req.body.email}, {$push: {"connectionsToOthers": req.params.connectionId}}, function(error, user) {
          if (error) {
            res.send(error);
          } else {
            res.json(connection);
          }
        });
      }
    }
  );
};

//pass in as params connectionstoOthers, this method returns all the user contacts
exports.index = function(req, res) {
  Connection.find(
    {'_id':{ $in: [req.params.connectionsToOthers]}
  }, function(err, connections) {
    if (err) {
      res.send(err);

    } else {
      res.json(connections);
    }
  });
};

//not sure what this function will be used for
exports.update = function(req, res) {
  console.log(req.body);
  Connection.findByIdAndUpdate(req.params.connectionId, {$set: req.body}, {new: true},
    function(err, connection) {
      if (err) {
        res.send(err);
      } else {
        res.json(connection);
      }
    }
  );
};

//if we impliment the ability to destroy contacts, needs to be rewritten
//to account for connection to others array
exports.destroy = function(req, res) {
  Connection.remove(
    {_id: req.params.connectionId},
    function(err, connection) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Connection successfully deleted' });
      }
    }
  );
};
