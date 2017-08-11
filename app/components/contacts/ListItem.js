import React, { Component } from 'react';
import { ListView, Text, TouchableWithoutFeedback, TouchableOpacity,
  View, LayoutAnimation} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from '../common';
import * as actions from '../../actions';

import Communications from 'react-native-communications';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection >
        <View style={{flex: 1,
           flexDirection: 'column',
           justifyContent: 'center',
         }}>
         <TouchableOpacity onPress={() =>
           Communications.email([library.email],null,null,'My Subject','Greetings')}>
             <View>
                <Text style={{height: 50, paddingLeft: 10}}>
                  Email:  {library.email}
                </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Communications.text(library.phone)}>
                  <View style={styles.holder}>
                    <Text style={{height: 50, paddingLeft: 10}}>
                      Phone: {library.phone}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Communications.web('https://github.com/facebook/react-native')}>
                    <View style={styles.holder}>
                    <Text style={{height: 50, paddingLeft: 10}}>
                      Linkedin profile
                    </Text>
                    </View>
                </TouchableOpacity>
              </View>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, name } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {name}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    height: 50,
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
