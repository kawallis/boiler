import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,
TouchableHighlight } from 'react-native';
let t = require('tcomb-form-native');
let Form = t.form.Form;
let options = {
  fields: {
    email: {
      placeholder: 'email@gmail.com'
    },
    password: {
      placeholder: 'password'
    }
  },
};
let Person = t.struct({
  email: t.String,
  password: t.String,
  rememberMe: t.Boolean
});

export default class Login extends Component {
  onPress() {
    var value = this.refs.form.getValue();
    if (value) { 
      console.log(value);
    }
  }

  signup () {
    this.props.history.push('/signup');
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.contact}>
          <Text style={styles.welcome}>
            Kickstand
          </Text>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={(e) => {
            this.signup(this.props);
          }} 
          underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2CDA9D',
  },
  contact: {
    margin: 30,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 30,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('Login', () => Login);