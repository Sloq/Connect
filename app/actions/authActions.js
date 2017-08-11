import {SIGNIN_URL, SIGNUP_URL} from '../util/auth_util';
import axios from 'axios';
// import * as Keychain from 'react-native-keychain';
import {addAlert} from './alertActions';
// import SInfo from 'react-native-sensitive-info';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

//thunk action
export const userLogIn = (email, password) => (dispatch) => {
  return (
    axios.post(SIGNIN_URL, {email, password})
         .then((response) => {
           const {user_id, token} = response.data;
          //  Keychain.setGenericPassword(user_id, token, console.log("inside keychain"))
          //          .then(function() {
                    dispatch(userSignIn(user_id));
          //           });
         }).catch((error) => {
           dispatch(addAlert("user does not exist"));
         })
  );
};

// export const userLogIn = (email, password) => (dispatch) => {
//   return (
//     axios.post(SIGNIN_URL, {email, password})
//          .then((response) => {
//            const {user_id, token} = response.data;
//            SInfo.setItem('user_id', 'token', {
//            sharedPreferencesName: 'mySharedPrefs',
//            keychainService: 'myKeychain'
//            }).then((value) =>{
//                    console.log(value + " was succeed");
//                    dispatch(userSignIn(user_id));
//                  });
//          }).catch((error) => {
//            dispatch(addAlert("user does not exists"));
//          })
//   );
// };

export const userSignUp = (email, password) => (dispatch) => {
  return (
    axios.post(SIGNUP_URL, {email, password})
         .then((response) => {
           const {user_id, token} = response.data;
           dispatch(userSignIn(user_id));
         }).catch((error) => {
           dispatch(addAlert("User already exisits"));
         })
  );
};

// action creator
export const userSignIn = (user_id) => {
  return {
    type: SIGN_IN,
    user_id
  };
};

export const userSignOut = {
    type: SIGN_OUT,
};
