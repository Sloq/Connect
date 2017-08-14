import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';



const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Map extends Component {
  constructor(props){
    super(props)


    this.state ={
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    };
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = parseFloat(position.coords.latitude);
      let long = parseFloat(position.coords.longitude);

      let initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };

      this.setState({initialPosition: initialRegion});
      this.setState({markerPosition: initialRegion});
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
    this.watchID = navigator.geolocation.watchPosition((position) => {
    let lat = parseFloat(position.coords.latitude);
    let long = parseFloat(position.coords.longitude);

    let lastRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    this.setState({initialPosition: lastRegion});
    this.setState({markerPosition: lastRegion});
  });
  }


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
          region={this.state.initialPosition}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
        <MapView.Marker
          animateToRegion={true}
            coordinate={this.state.markerPosition}
            title='Marker: Tianyu Duan'
        >
        </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radius: {
    backgroundColor: 'green',
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});

const mapStateToProps = (state) => {
  return {contacts: state.user.contacts};
};

module.exports = connect(mapStateToProps)(Map);
