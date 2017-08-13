import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  Text,
  View, StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Tile} from 'react-native-elements';
import * as actions from '../../actions';
import Communications from 'react-native-communications';
import {CardSection} from '../common';


class ContactDetail extends Component {


  componentWillUpdate() {
   LayoutAnimation.spring();
 }

  render() {
    //take all of the available information for a given user
    const availableFields = [];

    const { profileImg, name, email, phone,
      birthday, address, linkedin,
      github, facebook } = this.props.navigation.state.params;

    return (
      <ScrollView>

        <StatusBar
       backgroundColor="blue"
       barStyle="dark-content"
     />

        <Tile
          imageSrc={require('../images/simple1.jpg')}
          imageContainerStyle={{opacity: .7}}
          title={name}
          titleStyle={{
            color: 'white',
            textAlign: 'center',
            textShadowColor: 'black',
            textShadowOffset: { width: 1, height: 1 },
            marginBottom: '10%',
            textShadowRadius: 2,
            fontSize: 28,

          }}
        >
        </Tile>

        <Image
      style={styles.profileStyle}
      source={{uri: profileImg}}
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
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
  profileStyle:{
      position: 'absolute',
        width: 180,
        height: 180,
        left: '29%',
        top: '8%',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
  },
  tileStyle:{
    width: 200
  },
  backgroundImage:{
    position: 'absolute',
    opacity: 1,
    flex: 1,
    width: 300,
    height: 300,
    marginLeft: '15%',
    marginTop: '-2%'

  }
});

export default ContactDetail;
