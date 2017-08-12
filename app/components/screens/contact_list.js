import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  LayoutAnimation
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connections } from '../config/data';
import { connect } from 'react-redux';


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
    if (this.props.contacts) {
    return (
      <ScrollView>
        <List>
          {this.props.contacts.map((contact) => (
            <ListItem
              key={contact.name}
              roundAvatar
              avatar={{ uri: contact.picture }}
              title={contact.name}
              subtitle={contact.email}
              onPress={() => this.onTap(contact)}
            />
          ))}
        </List>
      </ScrollView>
    );} else {
      return (<Text>No Friends Yet</Text>);
    }
  }
}

const mapStateToProps = (state) => {
  return {contacts: state.user.contacts};
};

module.exports = connect(mapStateToProps)(ContactList);
