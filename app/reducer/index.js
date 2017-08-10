import update from 'react-addons-update';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AuthReducer from './authReducer';
import AlertReducer from './alertReducer';

const CombineReducers = combineReducers({
  form: formReducer,
  auth: AuthReducer,
  alerts: AlertReducer
});

export default CombineReducers;
