import React, { Component } from 'react';
import axios from 'axios';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';



class UserList extends Component {

  state = { albums: [] };

  componentWillMount() {
    axios.get('http://rallyingcode.herokuapp/api/music_albums').then(response => this.setState({albums: response.data}))
  }

  renderAlbums() {
    return this.state.albums.map(album => <UserDetail key={album.title} album={album}) />
  }

  render() {
    return(
      <ScrollView>
      {this.renderAlbums}
      </ScrollView>
    )
  }

}


const Styles = {
  ContainerStyle: {

    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    positiion: 'relative',


  }
};

export default UserList;
