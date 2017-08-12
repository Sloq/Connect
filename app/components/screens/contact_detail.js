import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  LayoutAnimation,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Tile } from 'react-native-elements';
import * as actions from '../../actions';
import Communications from 'react-native-communications';
import {CardSection} from '../common';


class ContactDetail extends Component {


  handlePress() {

  }

  componentWillUpdate() {
   LayoutAnimation.spring();
 }

  render() {
    //take all of the available information for a given user
    const availableFields = [];

    const { picture, name, email, phone,
      birthday, address, linkedin,
      github, facebook } = this.props.navigation.state.params;


    return (
      <ScrollView>
        <Tile
          imageSrc="pic"
          featured
          title={name.toUpperCase()}
          caption={email}
        />

        <View style={{flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>

          <CardSection>
          <TouchableOpacity onPress={() =>
            Communications.email([email],null,null,'My Subject','Greetings')}>
              <View>
                 <Text style={{height: 50, paddingLeft: 10}}>
                   Email:  {email}
                 </Text>
                 </View>
                 </TouchableOpacity>
                 </CardSection>

                 <CardSection>
                 <TouchableOpacity onPress={() => Communications.text(phone)}>
                   <View style={styles.holder}>
                     <Text style={{height: 50, paddingLeft: 10}}>
                       Phone: {phone}
                     </Text>
                   </View>
                 </TouchableOpacity>
                 </CardSection>

                 <CardSection>
                 <TouchableOpacity onPress={() => Communications.web(linkedin)}>
                     <View style={styles.holder}>
                     <Text style={{height: 50, paddingLeft: 10}}>
                       Linkedin
                     </Text>
                     </View>
                 </TouchableOpacity>
                 </CardSection>

                 <CardSection>
                 <TouchableOpacity onPress={() => Communications.web(facebook)}>
                     <View style={styles.holder}>
                     <Text style={{height: 50, paddingLeft: 10}}>
                       Facebook
                     </Text>
                     </View>
                 </TouchableOpacity>
                 </CardSection>

                 <CardSection>
                 <TouchableOpacity onPress={() => Communications.web(github)}>
                     <View style={styles.holder}>
                     <Text style={{height: 50, paddingLeft: 10}}>
                       Github 
                     </Text>
                     </View>
                 </TouchableOpacity>
                  </CardSection>

                  <CardSection>
                 <View style={styles.holder}>
                 <Text style={{height: 50, paddingLeft: 10}}>
                   Address: {address}
                 </Text>
                 </View>
                 </CardSection>

                 <CardSection>
                 <View style={styles.holder}>
                 <Text style={{height: 50, paddingLeft: 10}}>
                   Birthday: {birthday}
                 </Text>
                 </View>
                   </CardSection>

               </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});

export default ContactDetail;
