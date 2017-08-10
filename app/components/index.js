import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/store';

import { Tabs } from './config/router';
import SplashScreen from './splash';

class App extends Component {
  render() {
    return(
      <Provider store={configureStore()}>
        <SplashScreen/>
      </Provider>
    );
  }
}

export default App;
