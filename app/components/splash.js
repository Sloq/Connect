

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Frame from './login/frame.js';

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

    let show = () => (
      this.state.showComponentSplash ? splash() : <Frame/>
    );

    let splash = () => (
      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Welcome to ConneQt!
        </Text>

        <View style={styles.loginWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleClick}>
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
    backgroundColor: '#3498db',
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
