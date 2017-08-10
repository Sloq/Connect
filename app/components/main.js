import React, { Component } from 'react';
import { Tabs } from './config/router';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {userSignOut} from '../actions/auth_actions';

class Main extends Component {
  render(){
  const onLogout = () => {
    this.props.dispatch(userSignOut);
  };

    return (
      <View>
        <TouchableOpacity onPress={this.onLogout}>
          <Text>
            Logout
          </Text>
        </TouchableOpacity>

        <Tabs/>
      </View>
    ); //end return
  } // end render
} // end class Main

const styles = StyleSheet.create({

});

export default Main;
