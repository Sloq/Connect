import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



const Button = () => {
  return (
    <TouchableOpacity onPress={()=> console.log('hello')} style={Styles.ButtonStyle}>
    <Text style={Styles.TextStyle}>Click Me!</Text>
    </TouchableOpacity>
  );
};

const Styles = {
  ButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
  },
  TextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',

  }
};

export default Button;
