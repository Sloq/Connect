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

  render() {
    if (connections) {
    return (
      <ScrollView>
        <List>
          {connections.map((connection) => (
            <ListItem
              key={connection.login.username}
              roundAvatar
              avatar={{ uri: connection.picture }}
              title={connection.name}
              subtitle={connection.email}
              onPress={() => this.onTap(connection)}
            />
          ))}
        </List>
      </ScrollView>
    );} else {
      return (<Text>No Friends Yet</Text>);
    }
  }
}

export default ContactList;
