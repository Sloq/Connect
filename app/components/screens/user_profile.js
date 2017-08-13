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
import { connect } from 'react-redux';
import { fetchUser } from '../../util/apiUtil';
import { updateUser } from '../../actions/userActions';

// ListItem Title:
    //  onChangeText={(text) => this.setState({text})}
    //  value={this.state.text}

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }

  onPressSave() {
    //save the shared profile to the database
    this.props.dispatch(updateUser(this.state.user));
  }

  render() {
    return (
      <ScrollView >
        <Tile
          imageSrc={{uri: this.props.user.pic}}
          featured
          title= {this.props.user.name}
          caption={this.props.user.email}
        />
      <Button
        justifyContent='center'
        onPress={this.onPressSave}
        title="Save Share Settings"
        style={styles.button}
        accessibilityLabel="Save Share Settings"
      />
        <List>

          <ListItem
            leftIcon={{name:'account-circle',
                       color: '#37c6a5'
                     }}
            title={this.props.user.name}
            subtitle="name"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'email',
                      color: '#ffe330'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                  onChangeText={(email) => {
                    const stateUser = this.state.user;
                    stateUser.email = email;
                    this.setState({stateUser});
                  }
                }
                  value={this.state.user.email}
                />
            }
            subtitle='email'
            textInputKeyboardType='email-address'
            textInputOnChangeText={()=>{}}
            switchButton={false}
            onSwitch={(e)=> e}
            switchOnTintColor="pink"
            hideChevron
          />

          <ListItem
            leftIcon={{name:'phone',
                      color: '#33dd00'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                  onChangeText={(phone) => {
                    const stateUser = this.state.user;
                    stateUser.phone = phone;
                    this.setState({stateUser});
                  }}
                  value={this.props.user.phone}
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
                      color: '#ff7830'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                  onChangeText={(address) => {
                    const stateUser = this.state.user;
                    stateUser.address = address;
                    this.setState({stateUser});
                  }}
                  value={this.props.user.address}
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
                      color: 'red'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                  onChangeText={(birthday) => {
                    const stateUser = this.state.user;
                    stateUser.birthday = birthday;
                    this.setState({stateUser});
                  }}
                  value={this.props.user.birthday}
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
                      color: '#0077b5'
                    }}
            title={
                <TextInput
                  style={{height: 35, width: 210}}
                  onChangeText={(linkedin) => {
                    const stateUser = this.state.user;
                    stateUser.linkedin = linkedin;
                    this.setState({stateUser});
                  }}
                  value={this.props.user.linkedin}
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
            leftIcon={{name:'sc-facebook',
                      type:'evilicon',
                      color: '#3d589b'
                    }}
            title={
              <TextInput
                style={{height: 35, width: 210}}
                onChangeText={(facebook) => {
                  const stateUser = this.state.user;
                  stateUser.facebook = facebook;
                  this.setState({stateUser});
                }}
                value={this.props.user.facebook}
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
                      color: '#7b38ab'
                    }}
            title={
              <TextInput
                style={{height: 35, width: 210}}
                onChangeText={(instagram) => {
                  const stateUser = this.state.user;
                  stateUser.instagram = instagram;
                  this.setState({stateUser});
                }}
                value={this.props.user.instagram}
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
                      color: '#70c1f5'
                    }}
            title={
              <TextInput
                style={{height: 35, width: 210}}
                onChangeText={(twitter) => {
                  const stateUser = this.state.user;
                  stateUser.twitter = twitter;
                  this.setState({stateUser});
                }}
                value={this.props.user.twitter}
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
                      color: 'black'
                    }}
            title={
              <TextInput
                style={{height: 35, width: 210}}
                onChangeText={(github) => {
                  const stateUser = this.state.user;
                  stateUser.github = github;
                  this.setState({stateUser});
                }}
                value={this.props.user.github}
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
  },
  button: {
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: "#841584",
  }
});


const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user))
});

const mapStateToProps = (state) => {
  return {user: state.user};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
