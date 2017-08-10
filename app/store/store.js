import rootReducer from '../reducer';
import thunk from 'redux-thunk'; // for async action
import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';

const defaultState = {};

export const configureStore = (state=defaultState) => {
  const store = createStore(rootReducer, state, compose(
    applyMiddleware(thunk),
    autoRehydrate()
  ));
  persistStore(store, {storage: AsyncStorage});
  return store;
};
