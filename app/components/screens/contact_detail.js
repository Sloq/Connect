import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  Text,
  View, StatusBar, TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Tile, SocialIcon, Icon, Button} from 'react-native-elements';
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

        <Tile
          imageSrc={require('../images/white7.jpg')}
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

          <List>
            <StatusBar
           backgroundColor="blue"
           barStyle="dark-content"
         />

            <ListItem
              leftIcon={<Icon
             raised
             name='email'
             color='#f50'
              />
              }
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.email([email],null,null,'My Subject','Greetings')}
              />
              }
              title={
                  <Text style={{height: 35, width: 210, marginLeft: 24, marginTop: 10, fontSize: 16}}>
                    {email}
                  </Text>
              }
              subtitle='Email'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<Icon
             raised
             name='message'
             color='#f50'
              />
              }
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.text(phone)}
              />
              }
              title={
                  <Text style={{height: 35, width: 210, marginLeft: 24, marginTop: 10, fontSize: 16}}>
                    {phone}
                  </Text>
              }
              subtitle='Message'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<Icon
             raised
             name='phone'
             color='#f50'
              />
              }
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.phonecall(phone, true)}
              />
              }
              title={
                  <Text style={{height: 35, width: 210, marginLeft: 24, marginTop: 10, fontSize: 16}}>
                    {phone}
                  </Text>
              }
              subtitle='Call'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<Icon
             raised
             name='date-range'
             color='#f50'
              />
              }

              title={
                  <Text style={{height: 35, width: 210, marginLeft: 24, marginTop: 10, fontSize: 16}}>
                    {birthday}
                  </Text>
              }
              subtitle='Birthday'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<Icon
             raised
             name='near-me'
             color='#f50'
              />
              }
              title={
                  <Text style={{height: 35, width: 210, marginLeft: 24, marginTop: 10, fontSize: 16}}>
                    {address}
                  </Text>
              }
              subtitle='Address'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<SocialIcon
              raised={true}
               type='facebook'
             />}
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.web(facebook)}
              />
              }
              subtitle='Facebook'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<SocialIcon
              raised={true}
               type='github'
             />}
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.web(github)}
              />
              }
              subtitle='Github'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<SocialIcon
              raised={true}
               type='linkedin'
             />}
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.web(linkedin)}
              />
              }
              subtitle='Linkedin'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<SocialIcon
              raised={true}
               type='twitter'
             />}
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.web(linkedin)}
              />
              }
              subtitle='Twitter'
              subtitleStyle={{marginLeft: 24}}
            />

            <ListItem
              leftIcon={<SocialIcon
              raised={true}
               type='instagram'
             />}
              rightIcon={<Button
                buttonStyle={{backgroundColor: '#3498db', borderRadius: 10, marginTop: '9%'}}
                textStyle={{textAlign: 'center'}}
                title={`ConneQt!`}
                onPress={() => Communications.web(linkedin)}
              />
              }
              subtitle='Instagram'
              subtitleStyle={{marginLeft: 24}}
            />

                 </List>
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
        width: 200,
        height: 200,
        left: '26%',
        top: '3%',
        borderRadius: 100,
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
