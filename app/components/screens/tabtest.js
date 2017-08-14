import { Tabs, Tab, Icon } from 'react-native-elements';
import QRScanner from './camera';
import React from 'react';
import ContactList from '../screens/contact_list';
import UserProfile from '../screens/user_profile';
import MapPage from '../map';
import ContactDetail from '../screens/contact_detail';
import Qr from '../screens/qr';



export default class tabTest extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    selectedTab: QRScanner,
  };
}

changeTab (selectedTab) {
  this.setState({selectedTab});
}


  render() {
    const { selectedTab } = this.state;

    return(
<Tabs>
  <Tab
    titleStyle={{fontWeight: 'bold', fontSize: 10}}
    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    selected={selectedTab === QRScanner}
    title={selectedTab === QRScanner ? QRScanner : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
    onPress={() => this.changeTab(QRScanner)}>
    <QRScanner />
  </Tab>
  <Tab
    titleStyle={{fontWeight: 'bold', fontSize: 10}}
    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    selected={selectedTab === QRScanner}
    title={selectedTab === QRScanner ? QRScanner : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
    onPress={() => this.changeTab(MapPage)}>
    <MapPage />
  </Tab>
</Tabs>
    );
  }
}
