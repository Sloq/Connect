import update from 'react-addons-update';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';

module.exports = combineReducers({
  form: formReducer,
  auth: authReducer,
});
