import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import { List, ListItem, Tile } from 'react-native-elements';


class ContactDetail extends Component {

  handlePress() {

  }

  render() {
    //take all of the available information for a given user
    const availableFields = [];

    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc="pic"
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <List>
          {
            availableFields.map((field, i) => (
              <ListItem
                leftIcon={field.leftIcon}
                title={field.title}
                subtitle={field.subtitle}
                onPress={this.handlePress}
                hideChevron
              />
            ))
          }
        </List>
      </ScrollView>
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

export default ContactDetail;
