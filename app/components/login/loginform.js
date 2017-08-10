import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {AppRegistry, Text, View, StyleSheet, KeyboardAvoidingView,
  TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { userSignIn } from '../../actions/auth_actions';

class LogInForm extends Component {
  constructor(props){
    super(props);
  this.onLogIn = this.onLogIn.bind(this);
  this.renderError = this.renderError.bind(this);
  }

  onLogIn() {
    const {email, password} = this.props.fields;
    this.props.dispatch(userSignIn('fake id'));
    // console.log("email: " + email.value, "password: " + password.value);
  } // end signIn

  renderError(field){
    if (field.touched && field.error) {
      return ( <Text>{field.error}</Text> ); // end return
    } // end if
  }// end renderError

  render(){
    var {fields: {email, password}} = this.props;
    console.log(this.props);


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



    return (
      <View style={styles.container} >
      <StatusBar barStyle='light-content' />

      <TextInput
        {...email}
      placeholder="username or email"
      placeholderTextColor='rgba(255, 255, 255, 0.7)'
      returnKeyType='next'
      keyboardType='email-address'
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.input} />
      <View>
      {this.renderError(email)}
      </View>

      <TextInput
        {...password}
      placeholder = "password"
      placeholderTextColor='rgba(255, 255, 255, 0.7)'
      secureTextEntry
      returnKeyType='next'
      style={styles.input} />

      <View>
      {this.renderError(password)}
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText} onPress={this.onLogIn}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>

      </View>
    ); // end return
  } // end render
} // end LogInForm

const validate = (formProps) => {
  var errors = {};
  if (!formProps.email) {
    errors.email = "Please enter an email.";
  }
  if (!formProps.password) {
    errors.password = "Please enter a password.";
  }
  return errors;
};

// AppRegistry.registerComponent('Loginform', () => reduxForm({
//   form: 'login',
//   fields: ['email', 'password'],
//   validate: validate
// }, null, null)(LogInForm));
module.exports = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(LogInForm);
