import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store/store';

import { TabNavi } from './config/router';
import  TabTest  from './screens/tabtest';
import SplashScreen from './splash';
import Map from './map.js';
import { List, ListItem, Header } from 'react-native-elements';


let store = configureStore();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
      <TabNavi/>
      </Provider>
    );
  }
}

export default App;
