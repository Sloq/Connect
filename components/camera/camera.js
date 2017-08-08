import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions} from 'react-native';
import { BarCodeScanner, Permissions, Orientation } from 'expo';

export default class QRScanner extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  static navigationOptions = {
    tabBarLabel: 'QRCamera',
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {

     const { navigate } = this.props.navigation;

    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Button
        title="Go to Setup Tab"
        onPress={() => navigate('Setup')}
      />
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
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0, .1)'
    },
});
