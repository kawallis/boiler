import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyButton from './button';

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Kickstand!
        </Text>
        <MyButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2CDA9D'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  }
});

AppRegistry.registerComponent('home', () => home);