import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Splash from './components/splash.js';
// import QRCamera from './components/screens/camera.js';
// import Home from './components/homescreen/home';
import Tabs from './components/index';

export default class App extends React.Component {
  render() {
    return (
      <Tabs/>
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
