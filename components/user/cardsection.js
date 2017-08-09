import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



const CardSection = (props) => {
  return (
    <View style={Styles.ContainerStyle}>
      {props.children}
    </View>
  );
};

const Styles = {
  ContainerStyle: {

    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    positiion: 'relative',


  }
};

export default CardSection;
