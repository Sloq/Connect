// backend authentication

const passport = require('passport');
const AuthenticationController = require('../controllers/authentication_controller');
const passportService = require('./passport');
//
var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});
var router =  require('express').Router();
const userController = require('../controllers/userController');
const connectionController = require('../controllers/connectionController');

// Auth Routes
// ------------------------------------------------------------------
router.route('/signup')
  .post(AuthenticationController.signup);

router.route('/signin')
  .post([requireLogin, AuthenticationController.signin]);

// Regular Routes
// ------------------------------------------------------------------
router.route('/user')
  .post(userController.create)
  .get(userController.index);

router.route('/user/:userId')
  .get(userController.show)
  .patch(userController.update)
  .delete(userController.destroy);

router.route('/connection')
  .post(connectionController.create)
  .get(connectionController.index);

router.route('/connection/:connectionId')
  .get(connectionController.show)
  .patch(connectionController.update)
  .delete(connectionController.destroy);




function protec(req, res, next){
  res.send("Here's the secret!");
}

router.route('/protected')
   .get( protec);

module.exports = router;
