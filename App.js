import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducers';
import LibraryList from './components/common/LibraryList';


import Splash from './components/splash.js';
// import QRCamera from './components/screens/camera.js';
// import Home from './components/homescreen/home';
import Tabs from './components/index';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
      <View style={{flex: 1}}>
        <Header headerText="Contacts" />
        <LibraryList/>
      </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
