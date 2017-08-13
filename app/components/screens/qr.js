import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { fetchUser } from '../../util/apiUtil';
import { connect } from 'react-redux';


class Qr extends Component {
  // getInitialState() {
  //   return ({user: "Stephen"});
  // }



  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.backgroundContainer}>
          <Image source = {require('../images/circular.jpg')} resizeMode = 'cover' style = {styles.backdrop} />
        </View>
        <View style = {styles.overlay}>
          <QRCode
            value={this.props.userId}
            size={300}
            fgColor="#ffffff"
            style={styles.logo}
          />
        </View>

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
    backgroundColor: '#000000',
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center',
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
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
