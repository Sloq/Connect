import {createStore} from 'redux';
import reducer from '../reducer/root.js';

var defaultState = {
  email: "",
  password: ""
};

export var configureStore = (state=defaultState) => {
  return createStore(reducer, state);
};
