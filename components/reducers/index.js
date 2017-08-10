import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer.js';
import SelectionReducer from './SelectionReducer.js';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
