import update from 'react-addons-update';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AuthReducer from './authReducer';
import AlertReducer from './alertReducer';
import UserReducer from './userReducer';

const CombineReducers = combineReducers({
  form: formReducer,
  auth: AuthReducer,
  alerts: AlertReducer,
  user: UserReducer
});

export default CombineReducers;
