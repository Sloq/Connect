
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { Icon } from 'react-native-elements';

import Qrscreen from './qrscreen.js';
import QRCamera from '../camera/camera.js';
import { TabNavigator } from 'react-navigation';

export const Tabs = TabNavigator({
  Camera: {
    screen: QRCamera,
    navigationOptions: {
        tabBarLabel: 'Scan Code',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name={'list'}
                size={50}
                style={{color: tintColor}}
            />
        )
    }
  },
  Qr: {
    screen: Qrscreen,
    navigationOptions: {
        tabBarLabel: 'My Code',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name={'account-circle'}
                size={50}
                style={{color: tintColor}}
            />
        )
    }
}});


AppRegistry.registerComponent('Tabs', () => Tabs);
