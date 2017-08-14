import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import Login from './login';
import Loginform from './loginform';
import Main from '../main';
import AlertContainer from '../alerts/AlertContainer';
import { TabNavi } from '../config/router';

var Frame = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    
      if (this.props.user_id) {
        return (
          <TabNavi />
        );
      } else {
        return (
          <Login />
        );
      }
  }
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  logoContainer:{
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 240,
    height: 200,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    width: 160,
    opacity: .9,
  }
});

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.user_id
  };
};

export default connect(mapStateToProps)(Frame);


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

//
// // AppRegistry.registerComponent('Login', () => Login);
