import React, { Component } from 'react';
import { Tabs } from './config/router';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {userSignOut} from '../actions';

var Main = React.createClass({
  onLogout: function() {
    this.props.dispatch(userSignOut);
  },
  render(){
    return (
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={this.onLogout}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      ); //end return
    } // end render
  }); // end class Main

  const styles = StyleSheet.create({
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

  module.exports = connect()(Main);

// class Main extends Component {
//   render(){
//
//   const onLogout = () => {
//     console.log(this.props);
//     this.props.dispatch(userSignOut);
//   };
//
//     return (
//       <View>
//
//         <TouchableOpacity style={styles.buttonContainer}>
//         <Text style={styles.buttonText} onPress={this.onLogout}>LOGOUT</Text>
//         </TouchableOpacity>
//
//       </View>
//     ); //end return
//   } // end render
// } // end class Main
//
// const styles = StyleSheet.create({
//   buttonContainer: {
//     justifyContent: 'center',
//     backgroundColor: '#2980b9',
//     paddingVertical: 15,
//     alignItems: 'center',
//     top: '100%'
//
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: "#FFF",
//   }
// });
//
// module.exports = connect()(Main);
