import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

// import {} from '../actions';


import Loginform from './loginform';
import Main from '../main';
// import AlertContainer from './alerts/AlertContainer';

var App = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    var renderMainView = () => {
      if (this.props.user_id) {
        return (
          <Main />
        );
      } else {
        return (
          <Loginform />
        );
      }
    };
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        {renderMainView()}

      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc'
  },
});

var mapStateToProps = (state) => {
  return {
    user_id: state.auth.user_id
  };
};

module.exports = connect(mapStateToProps)(App);

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {AppRegistry, Text, View, StyleSheet, Image,
//   KeyboardAvoidingView} from 'react-native';
// import Loginform from './loginform';
// import Main from '../main';
//
// class Login extends Component{
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       auth: ""
//     };
//     // this.state = {
//     //   showComponentLogin: false,
//     // };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   componentWillMount(){
//     this.setState({auth: this.state.auth });
//   }
//
//   handleClick() {
//     this.setState({
//           showComponentLogin: true,
//         });
//   }
//
//   render(){
//
//     const toggle = () => {
//       if (this.props.user_id){
//         return  <Main /> ;
//       } else {
//          return <Loginform/>;
//       }
//     };
//
//     return (
//       <KeyboardAvoidingView
//       behavior='padding'
//       style={styles.container}>
//
//       <View style={styles.logoContainer}>
//       <Image
//       style={styles.logo}
//       source={require('../images/logo.png')}
//       />
//
//       <Text style={styles.title}> An app made to connect one another</Text>
//       </View>
//
//       <View style={styles.formContainer}>
//         <Text>Hello Toggle</Text>
//         <Loginform/>
//       </View>
//
//       </KeyboardAvoidingView>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3498db',
//   },
//   logoContainer:{
//     position: 'absolute',
//     top: '10%',
//     alignItems: 'center',
//     flexGrow: 1,
//     justifyContent: 'center'
//   },
//   logo: {
//     width: 240,
//     height: 200,
//   },
//   title: {
//     marginTop: 10,
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 16,
//     width: 160,
//     opacity: .9,
//   }
// });
//
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     user_id: state.auth.user_id
//   };
// };
//
// export default connect(mapStateToProps)(Login);
//
// // AppRegistry.registerComponent('Login', () => Login);
