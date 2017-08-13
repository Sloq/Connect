import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Splash from './app/components/splash.js';
// import QRCamera from './components/screens/camera.js';
// import Home from './components/homescreen/home';
import Index from './app/components/index';
import {Tabs} from './app/components/config/router.js';


export default class App extends React.Component {
  render() {
    return (
      <Index/>
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
