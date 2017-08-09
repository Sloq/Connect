import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Switch,
  Button,
  View
} from 'react-native';
import { List, ListItem, Tile, switchButton } from 'react-native-elements';

// Tile:
//     imageSrc="picture"

// ListItem Title:
    //  onChangeText={(text) => this.setState({text})}
    //  value={this.state.text}

class UserProfile extends Component {
  onPressSave() {
    //save the shared profile to the database
  }

  render() {
    return (
      <ScrollView >
        <Tile
          featured
          title= "Stephen Loquet"
          caption="email"
        />
      <Button
        onPress={this.onPressSave}
        title="Save Share Settings"
        color="#841584"
        accessibilityLabel="Save Share Settings"
      />
        <List>

          <ListItem
            leftIcon={{name:'account-circle',
                       color: 'grey'
                     }}
            title="stephen"
            subtitle="name"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'email',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='email'
            textInputKeyboardType='email-address'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'phone',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='phone'
            textInputKeyboardType='number-pad'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-telegram',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='address'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'calendar',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='birthday'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-linkedin',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='LinkedIn'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-snapchat',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='snapchat'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-facebook',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='facebook'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-instagram',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='instagram'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-twitter',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='Twitter'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-github',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='Github'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'sc-kakao',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='kakao'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'line',
                      type:'evilicon',
                      color: 'grey'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                />
            }
            subtitle='line'
            textInputKeyboardType='default'
            textInputOnChangeText={()=>{}}
            switchButton={true}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />
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

export default UserProfile;
