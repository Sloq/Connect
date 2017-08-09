import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class QRScanner extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>

          <StatusBar
     barStyle='light-content'
     />
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
              <View style={styles.preview}></View>
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    alert(JSON.stringify(data));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  video: {
    marginTop: 90,
    flex: 0,
    width: '100%',
    height: '70%',
  },
  overlay:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0, 0)'
    } ,
   preview: {
      width: 350,
      height: 350,
      borderRadius: 200,
      borderWidth: 1,
      borderColor: '#FFF',
      backgroundColor: '#2980b9',
      alignItems: 'center',
      marginTop: '10%',
      marginBottom: '10%',
      marginLeft: '7%',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0, .1)'
    },
});
