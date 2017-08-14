import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {AppRegistry, Text, View, StyleSheet, KeyboardAvoidingView,
  TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { userLogIn, userSignUp, addAlert } from '../../actions';

class LogInForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false
    };

  this.onLogIn = this.onLogIn.bind(this);
  this.onSignUp = this.onSignUp.bind(this);
  }

  componentDidMount(){
    this.setState({loading: false});
  }//end componentDidMount

  onLogIn() {
    const { dispatch, fields: {email, password} } = this.props;
    this.setState({
      loading: true
    });
    this.props.dispatch(userLogIn(email.value, password.value))
      .then(()=> {
        this.setState({
          loading: false
        });
      });
  } // end onLogIn

  onSignUp() {
    const { dispatch, fields: {email, password} } = this.props;
    this.setState({
      loading: true
    });
    this.props.dispatch(userSignUp(email.value, password.value))
      .then(()=> {
        this.setState({
          loading: false
        });
      });
  } // end onSignUp

  render(){
    const {fields: {email, password}} = this.props;

    const renderError = (field) => {
      if (field.touched && field.error) {
        return (
          <Text style={styles.formError}>{field.error}</Text>
          ); // end return
      } // end if
    };// end renderError

    const styles = StyleSheet.create({
      container: {
        padding: 20,
      },
      container2: {
        top: '120%',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center'
      },
      input: {
        width: 350,
        height: 40,
        top: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: 'white',
        paddingHorizontal: 10,
        marginTop: "4%"
      },
      textinputWrapper: {
      marginTop: "90%"
      },
      buttonContainer: {
        justifyContent: 'center',
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        alignItems: 'center',
        width: 150,
        height: 40,
        borderRadius: 5
      },
      buttonContainer2: {
        justifyContent: 'center',
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        alignItems: 'center',
        marginLeft: 10,
        width: 150,
        height: 40,
        borderRadius: 5
      },
      buttonText: {
        textAlign: 'center',
        color: "#FFF",
      }
    });

    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Loading...
          </Text>
        </View>
      );
    } else {
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
        blurOnSubmit={true}
        style={styles.input} />
        <View>
        {renderError(email)}
        </View>

        <TextInput
          {...password}
        placeholder = "password"
        placeholderTextColor='rgba(255, 255, 255, 0.7)'
        secureTextEntry
        blurOnSubmit={true}
        returnKeyType='done'
        style={styles.input} />

        <View>
        {renderError(password)}
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.onLogIn}>
          <Text style={styles.buttonText} >LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer2} onPress={this.onSignUp}>
          <Text style={styles.buttonText} >SIGNUP</Text>
          </TouchableOpacity>
        </View>
        </View>
      ); // end return
    } // end if
  }// end render
} // end LogInForm

// const validate = (formProps) => {
//   var errors = {};
//   if (!formProps.email) {
//     errors.email = "Please enter an email.";
//   }
//   if (!formProps.password) {
//     errors.password = "Please enter a password.";
//   }
//   return errors;
// };

// AppRegistry.registerComponent('Loginform', () => reduxForm({
//   form: 'login',
//   fields: ['email', 'password'],
//   validate: validate
// }, null, null)(LogInForm));
module.exports = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
}, null, null)(LogInForm);
