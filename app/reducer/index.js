import update from 'react-addons-update';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AuthReducer from './authReducer';
import AlertReducer from './alertReducer';
import LibraryReducer from './LibraryReducer.js';
import SelectionReducer from './SelectionReducer.js';

const CombineReducers = combineReducers({
  form: formReducer,
  auth: AuthReducer,
  alerts: AlertReducer,
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

export default CombineReducers;
