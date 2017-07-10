import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Link } from 'react-router-native';

export default class MyButton extends Component {
  render() {
    return (
      <View style={styles.button}>
        <Link
            to="/login"   
        >
          <Text style={{color: '#2CDA9D'}}>Let's Go</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: 'white',
    width: 150,
    height: 50,
    borderRadius: 30,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('MyButton', () => MyButton);