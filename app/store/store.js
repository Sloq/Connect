import {createStore} from 'redux';
import rootReducer from '../reducer/root';

var defaultState = {
  email: "",
  password: ""
};

export var configureStore = (state={}) => {
  return createStore(rootReducer, state);
};
