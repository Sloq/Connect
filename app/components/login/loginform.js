import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {AppRegistry, Text, View, StyleSheet, KeyboardAvoidingView,
  TextInput, TouchableOpacity, StatusBar} from 'react-native';


export default class Loginform extends Component{
  signIn() {
    let {email, password} = this.props.fields;
    console.log(email.value, password.value);
  } // end signIn

  render(){

    let {fields: {email, password}} = this.props;

    return (
      <View
      style={styles.container}
      >
      <StatusBar
      barStyle='light-content'
      />

      <TextInput
        {...email}
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
        {...password}
      placeholder = "password"
      placeholderTextColor='rgba(255, 255, 255, 0.7)'
      secureTextEntry
      returnKeyType='next'
      style={styles.input}

      />


      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText} onPress={this.signIn}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>SIGNUP</Text>
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

const validate = (formProps) => {
  let errors = {};
  return errors;
};

AppRegistry.registerComponent('Loginform', () => reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Loginform));
// module.exports = reduxForm()(Loginform);
