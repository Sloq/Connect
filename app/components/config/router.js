import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ContactList from '../screens/contact_list';
import UserProfile from '../screens/user_profile';
import MapPage from '../map';
import QRScanner from '../screens/camera';
import ContactDetail from '../screens/contact_detail';
import Qr from '../screens/qr';

//will need to utilize StackNavigator with contact list so viewing a certain contacts info and going back brings you back to the contact list
export const ContactStack = StackNavigator({
  Contacts: {
    screen: ContactList,
    navigationOptions: {
      title: 'Connections'
    }
  },
  ContactDetail: {
    screen: ContactDetail
  }
});

export const Tabs = TabNavigator({
    Connect: {
      screen: QRScanner,
      navigationOptions: {
          tabBarlabel: 'MakeConnection',
          tabBarIcon: ({ tintColor }) => <Icon name='camera-alt' size={30} activeTintColor={'#ffe330'} color={tintColor}/>
      }
    },
    Qr: {
      screen: Qr,
      navigationOptions: {
          tabBarlabel: 'MakeConnection',
          tabBarIcon: ({ tintColor }) => <Icon name='share' size={30} activeTintColor={'#ff3131'} color={tintColor}/>
      }
    },
    Profile: {
      screen: UserProfile,
      navigationOptions: {
          tabBarlabel: 'UserProfile',
          tabBarIcon: ({ tintColor }) => <Icon name='account-box' size={30} activeTintColor={'#30ffa2'} color={tintColor}/>
      }
    },
    Contacts: {
      screen: ContactList,
      navigationOptions: {
          tabBarlabel: 'ContactList',
          tabBarIcon: ({ tintColor }) => <Icon name='people' size={30} color={tintColor} activeTintColor={'#3ef707'}/>
      }
    },
    Map: {
      screen: MapPage,
      navigationOptions: {
          tabBarlabel: 'MapPage',
          tabBarIcon: ({ tintColor }) => <Icon name='map' size={30} color={tintColor} activeTintColor={'#8a2ff0'}/>
      }
    }
  }, {tabBarPosition: "bottom", tabBarOptions: {
      tintColor: '#e0e0e0',
      activeTintColor: '#68ff93',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#3d3d3d',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      }
    }
  }
);
