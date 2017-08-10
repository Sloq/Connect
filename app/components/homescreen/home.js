
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation';


import Qrscreen from './qrscreen.js';
import QRCamera from '../camera/camera.js';
import { TabNavigator } from 'react-navigation';
import {Tabs} from './tabs.js';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {

    return (
      <View style={styles.wrapper}>

        <Qrscreen style={styles.qr}>
        </Qrscreen>

        <Text style={styles.title}>
           Connect
        </Text>



        <Text style={styles.subtitle}>
        Powered by React native
        </Text>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: Home },
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
  },
  title: {
    bottom: '10%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    bottom: '20%'
  },
  qr: {

  }

});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
