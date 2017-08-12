import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/store';

import { Tabs } from './config/router';
import SplashScreen from './splash';
import Map from './map.js';


let store = configureStore();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Tabs/>
      </Provider>
    );
  }
}

export default App;
