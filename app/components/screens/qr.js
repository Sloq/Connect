import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  StyleSheet,
  Text,
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
        <QRCode
          value={this.props.userId}
          size={300}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});


const mapStateToProps = (state) => {
  return {userId: state.user._id};
};

module.exports = connect(mapStateToProps)(Qr);
