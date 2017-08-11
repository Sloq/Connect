import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Alert from './Alert';

class AlertContainer extends Component {
  render(){
    const renderAlerts = () => {
      return this.props.alerts.map((alert) => {
        return (
          <Alert alert={alert} key={alert.id} />
        );
      });
    };
    return(
      <View style={styles.container}>
        {renderAlerts()}
      </View>
    );// end return
  }//end render
} // end class AlertContainer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
}); //end styles

const mapStateToProps = (state) => ({
  alerts: state.alerts
}); // end mapStateToProps

export default connect(mapStateToProps)(AlertContainer);
