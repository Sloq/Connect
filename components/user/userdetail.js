import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';


import Card from './Card.js';
import CardSection from './cardsection.js';


//uri: props.album.thumbnailimage
const UserDetail = ({user}) => {
  // const {title, artist, thumbnailimage}  = album;
  return (

  <Card>
    <CardSection>
      <View style={Styles.thumbnailContainerStyle}>
        <Image
         source={{uri: 'http://www.freeiconspng.com/uploads/user-icon-png-person-user-profile-icon-20.png'}}
         style={Styles.thumbnailStyle}
         />
      </View>
      <View style={Styles.headerContentStyle}>
        <Text style={Styles.headerTextStyle}>TEXT1</Text>
        <Text>TEXT2</Text>
      </View>
    </CardSection>


    <CardSection>
    <Text>Additional info</Text>
    </CardSection>

  </Card>

  );
};

const Styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 0,
  },
  headerTextStyle: {
    fontSize: 18,
  }
};

export default Card;
