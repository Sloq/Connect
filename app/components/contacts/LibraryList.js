import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem.js';
import {Header, Spinner} from '../common';


class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  rendering(){
    return <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />;
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Header headerText="Contacts" />
      <ListView
        removeClippedSubviews={false}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
