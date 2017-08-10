

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import LogIn from './login/login.js';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponentSplash: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
          showComponentSplash: false,
        });
  }

  render() {
    let login = () => (
      <LogIn />
    );

    let show = () => (
      this.state.showComponentSplash ? splash() : <LogIn/>
    );

    let splash = () => (
      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Welcome to Connect!
        </Text>

        <View style={styles.loginWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleClick}>
              {
                this.state.showComponentSplash ? null : <LogIn/>
              }
          <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
        Powered by React native
        </Text>
      </View>
    );

    return (
      show()
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
  },
  title: {
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
    bottom: '10%'
  },
  loginWrapper: {
    position: 'absolute',
    top: "70%",
    width: 150,
    height: 50,
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

AppRegistry.registerComponent('SplashScreen', () => SplashScreen);
