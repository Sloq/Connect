import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import {removeAlert} from '../../actions';

class Alert extends Component {
  constructor(){
      super();

    this.deleteAlert = this.deleteAlert.bind(this);
  }

  deleteAlert(){
    const {dispatch, alert} = this.props;
    dispatch(removeAlert(alert.id));
  } // end deleteAlert

  render (){
      return (
        <TouchableWithoutFeedback onPress={this.deleteAlert}>
          <View style={styles.container}>
           <Text style={styles.text}>
             {this.props.alert.text}
           </Text>
          </View>
        </TouchableWithoutFeedback>
      ); // end return
  } // end render
} // end class Alert

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
    borderTopWidth: 2
  },
  text: {
    color: "#a94442"
  }
}); // end styles

export default connect()(Alert);
