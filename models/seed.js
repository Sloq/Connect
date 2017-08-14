const User = require('./user');
import URI from '../mlab_key/mlab';
var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // Create seed data
  var stephen = new User({
    name: 'Stephen',
    password: 'mypassword',
    pic: 'https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243--dachshund-puppies-weenie-dogs.jpg',
    email: 'stephen@stephen.stephen',
    phone: '666-1010',
    address: 'North Pole, Sea Ice',
    twitter: 'sigourneyweavervsalien'
  });
  var tianyu = new User({
    name: 'Tianyu',
    password: 'mypassword',
    pic: 'http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg',
    email: 'tianyu@tian.yu',
    phone: '666-1010',
    address: 'South Pole, Antartica',
    twitter: 'skyfish'
  });
  var leo = new User({
    name: 'Leo',
    password: 'mypassword',
    pic: 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg',
    email: 'leo@leo.gov',
    phone: '666-1010',
    address: 'Prime Meridian, Middle Point',
    twitter: 'storyboardking'
  });

  var list = [stephen, tianyu, leo];
  console.log(list);
  User.insertMany(list);
});
