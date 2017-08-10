import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Main extends Component {
  render(){
    return (
      <View>
        <Text>
        Welcome to Main!
        </Text>
      </View>
    ); //end return
  } // end render
} // end class Main

const styles = StyleSheet.create({

});

export default Main;

// import React, { Component } from 'react';
// import { Tabs } from './config/router';
//
// class App extends Component {
//   render() {
//     return <Tabs/>;
//   }
// }
//
// export default App;
