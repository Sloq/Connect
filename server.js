// backend authentication
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
import MLAB from './mlab_key/mlab';
const router = require('./services/router');

const app = express();

mongoose.connect(MLAB);

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '127.0.0.1';
console.log('Mongo Go!!!!');
console.log('Listening on', HOST, PORT);
app.listen(PORT, HOST);
