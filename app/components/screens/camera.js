import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { List, ListItem, Header, Button } from 'react-native-elements';
import {userSignOut} from '../../actions';
import { connect } from 'react-redux';

export default class QRScanner extends React.Component {
  constructor(props){
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout() {
    this.props.dispatch(userSignOut);
  }

  state= {
    hasCameraPermission: null
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

          <View style={{position: 'absolute',
          flex: 1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',}}>
          <Image
          source={require('../images/123.png')}
          style={{width: 300, height: 300, opacity: 0.5,
          justifyContent: 'center',
          flexDirection:'row',
          alignItems:'center',
        Color: 'white'
      }}/>
          </View>
          <Header
      statusBarProps={{ barStyle: 'light-content' }}
      centerComponent={{ text: 'Scan Code', style: { paddingLeft: 5, color: '#fff', fontSize: 18, opacity: 1, textAlign: 'center'} }}
      rightComponent= {<Button title="Sign Out"
      style={{color: 'white'}}
      buttonStyle={{backgroundColor: 'transparent', borderRadius: 10}}
      textStyle={{position: 'absolute', right: -15}}
      onPress={this.onLogout}
       />}
      outerContainerStyles={{ backgroundColor: '#3498db' , opacity: 1,}}
    />
              <View style={styles.preview}></View>
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    alert(JSON.stringify(data.data));
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
  //  preview: {
  //     width: 350,
  //     height: 350,
  //     borderRadius: 200,
  //     borderWidth: 1,
  //     borderColor: '#FFF',
  //     backgroundColor: '#2980b9',
  //     alignItems: 'center',
  //     marginTop: '10%',
  //     marginBottom: '10%',
  //     marginLeft: '7%',
  //     justifyContent: 'center',
  //     backgroundColor: 'rgba(0,0,0, .1)'
  //   },
});

  module.exports = connect()(QRScanner);
