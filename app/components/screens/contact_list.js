import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  LayoutAnimation, StyleSheet, Image
} from 'react-native';
import { List, ListItem, Header, Avatar } from 'react-native-elements';
import { connections } from '../config/data';
import { connect } from 'react-redux';


class ContactList extends Component {
  constructor(props) {
    super(props);
    this.avatars = [
      '../images/panda-01.png',
      '../images/panda-02.png',
      '../images/panda-03.png',
      '../images/panda-04.png',
      '../images/panda-05.png',
      '../images/panda-06.png',
      '../images/panda-07.png',
      '../images/panda-08.png',
      '../images/panda-09.png',
    ];
    this.avatarIndex = 0;
  }
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

   images(i) {
     let avatarIndex = (this.avatarIndex + 1) % this.avatars.length;
     return this.avatars[avatarIndex];
  }
  render() {
    if (this.props.contacts) {
    return (
      <ScrollView>
        <List>
          {this.props.contacts.map((contact, i) => (
            <ListItem
              key={contact.name}
              roundAvatar
              avatar= {<Avatar
              small
              rounded
              source={{uri: contact.profileImg}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />}
              title={contact.name}
              subtitle={
            <View style={styles.subtitleView}>
              <Text>{contact.email}</Text>
              <Text style={styles.ratingText}> Added 5 months ago</Text>
            </View>
          }
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


  const styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  });

const mapStateToProps = (state) => {
  return {contacts: state.user.contacts};
};

module.exports = connect(mapStateToProps)(ContactList);
