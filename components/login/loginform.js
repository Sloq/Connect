import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, KeyboardAvoidingView,
  TextInput, TouchableOpacity, StatusBar} from 'react-native';


export default class Loginform extends Component{

  render(){
    return (
      <View
      style={styles.container}
      >
      <StatusBar
      barStyle='light-content'
      />

      <TextInput
      placeholder="username or email"
      placeholderTextColor='rgba(255, 255, 255, 0.7)'
      returnKeyType='next'
      keyboardType='email-address'
      autoCapitalize='none'
      autoCorrect={false}
      onSubmitEditing={()=> this.passwordInput.focus()}
      style={styles.input}
      />

      <TextInput
      placeholder = "password"
      placeholderTextColor='rgba(255, 255, 255, 0.7)'
      secureTextEntry
      returnKeyType='next'
      style={styles.input}

      />


      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    width: 350,
    height: 40,
    top: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    paddingHorizontal: 10,
    marginTop: "2.5%"
  },
  textinputWrapper: {
  marginTop: "90%"
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    alignItems: 'center',
    top: '100%'

  },
  buttonText: {
    textAlign: 'center',
    color: "#FFF",
  }
});


AppRegistry.registerComponent('Loginform', () => Loginform);
