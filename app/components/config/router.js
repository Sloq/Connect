import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ContactList from '../screens/contact_list';
import UserProfile from '../screens/user_profile';
import MapPage from '../screens/map';
import QRScanner from '../screens/camera';
import ContactDetail from '../screens/contact_detail';
import LibraryList from '../contacts/LibraryList.js';

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
          tabBarIcon: ({ tintColor }) => <Icon name='camera-alt' size={30} color={tintColor}/>
      }
    },
    Profile: {
      screen: UserProfile,
      navigationOptions: {
          tabBarlabel: 'UserProfile',
          tabBarIcon: ({ tintColor }) => <Icon name='account-box' size={30} color={tintColor}/>
      }
    },
    Contacts: {
      screen: LibraryList,
      navigationOptions: {
          tabBarlabel: 'LibraryList',
          tabBarIcon: ({ tintColor }) => <Icon name='people' size={30} color={tintColor}/>
      }
    },
    Map: {
      screen: MapPage,
      navigationOptions: {
          tabBarlabel: 'MapPage',
          tabBarIcon: ({ tintColor }) => <Icon name='map' size={30} color={tintColor}/>
      }
    }
  }, {tabBarPosition: "bottom", tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: 'blue',
      }
    }
  }
);
