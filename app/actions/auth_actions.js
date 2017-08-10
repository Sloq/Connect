import {SIGNIN_URL, SIGNUP_URL} from '../util/auth_util';
import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

//thunk action
export const userLogIn = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {email, password})
                .then((response) => {
                  var {user_id, token} = response.data;
                  dispatch(userSignIn(user_id));
                }).catch((error) => {
                  console.log("error");
                });
  };
};

export const userSignUp = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, password})
                .then((response) => {
                  var {user_id, token} = response.data;
                  console.log(response.data);
                  dispatch(userSignIn(user_id));
                }).catch((error) => {
                  console.log("error");
                });
  };
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
