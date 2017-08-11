import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connections } from '../config/data';

class ContactList extends Component {
  onTap(connection) {
    this.props.navigation.navigate('ContactDetail', connection);
  }

  // <SearchBar
  //     tintColor={"grey"}
  //     placeholderTextColor={'grey'}
  //     lightTheme={true}
  //     color={"black"}
  //     backgroundColor={"white"}
  //     round
  //     placeholder='Search Contacts...'
  //     onChangeText={()=>{}}
  // />

  //Render
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText="Contacts" />
        <LibraryList/>
      </View>
    );
  }
}

export default ContactList;
