import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, KeyboardAvoidingView,
  TextInput, TouchableOpacity, StatusBar} from 'react-native';


export default class QRscreen extends Component{

  render(){
    return (
      <View
      style={styles.container}
      >

      <TextInput
      placeholder="QR CODE HERE"
      placeholderTextColor='rgba(255, 255, 255, 0.7)'
      returnKeyType='next'
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.input}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    bottom: '30%',
    width: 350,
    height: 350,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  textinputWrapper: {
  marginTop: "90%"
  },

  buttonText: {
    textAlign: 'center',
    color: "#FFF",
  }
});


AppRegistry.registerComponent('QRscreen', () => QRscreen);
