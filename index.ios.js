import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Splash from './app/components/splash.js';
// import QRCamera from './components/screens/camera.js';
// import Home from './components/homescreen/home';
import Tabs from './app/components/index';

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

//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Index from './app/components/index';
//
// export default class connect extends Component {
//   render() {
//     return <Index/>;
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('connect', () => connect);
