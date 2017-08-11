var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// import mongoose, { Schema } from 'mongoose';

var ConnectionSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type:    Date,
    default: Date.now
  },
  location:[{
            lat: String,
            lng: String
          }],
  email:      String,
  phone:      String,
  address:    String,
  birthday:   String,
  linkedin:   String,
  snapchat:   String,
  facebook:   String,
  instagram:  String,
  twitter:    String,
  github:     String
});

module.exports = mongoose.model('Connection', ConnectionSchema);
// export default mongoose.model('Connection', ConnectionSchema);
