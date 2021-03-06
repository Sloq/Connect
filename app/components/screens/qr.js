import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { fetchUser } from '../../util/apiUtil';
import { List, ListItem, Header, Button } from 'react-native-elements';
import {userSignOut} from '../../actions';
import { connect } from 'react-redux';

class Qr extends React.Component {
  constructor(props){
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.dispatch(userSignOut);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.backgroundContainer}>
          <Image source = {require('../images/play-stone.jpeg')} resizeMode = 'cover' style = {styles.backdrop} />
        </View>
        <View style = {styles.overlay}>
          <QRCode
            value={this.props.userId}
            size={300}
            fgColor="#ffffff"
            style={styles.logo}
          />
        </View>

        <Header
    statusBarProps={{ barStyle: 'light-content' }}
    centerComponent={{ text: 'My Code', style: { paddingLeft: 5,color: '#fff', fontSize: 18, opacity: 1, textAlign: 'center'} }}
    rightComponent= {<Button title="Sign Out"
    style={{color: 'white'}}
    buttonStyle={{backgroundColor: 'transparent', borderRadius: 10}}
    textStyle={{position: 'absolute', right: -15}}
    onPress={this.onLogout}
     />}
    outerContainerStyles={{ backgroundColor: '#3498db' , opacity: 1,}}
  />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    opacity: 0.8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center',
  },
  backdrop: {
    flex:1,
    flexDirection: 'column',
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
});


const mapStateToProps = (state) => {
  return {userId: state.user._id};
};

module.exports = connect(mapStateToProps)(Qr);
