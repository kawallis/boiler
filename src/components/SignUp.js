import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,
TouchableHighlight, Button } from 'react-native';
import request from 'superagent';
let t = require('tcomb-form-native');
let Form = t.form.Form;
let options = {
  fields: {
    name: {
        placeholder: 'name'
    },
    email: {
      placeholder: 'email@gmail.com'
    },
    password: {
      placeholder: 'password'
    },
  },
};
let Person = t.struct({
    name: t.String,
  email: t.String,
  password: t.String

});

export default class SignUp extends Component {
  onPressLearnMore() {
    
  }

  signup () {
    var value = this.refs.form.getValue();
    if (value) { 
      request 
        .post('http://localhost:4000/api/auth/signup')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(value))
        .then( res => {
            this.props.login(res.text);
        })
        .catch(error => console.log(error))
        .done()
    }
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.contact}>
          <Text style={styles.welcome}>
            Sign Up
          </Text>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={(e) => {
            e.preventDefault();
            this.signup(this.props);
          }} 
          underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableHighlight>
          <Text style={styles.buttonButton}>Back to </Text>
          <Button
            onPress={this.onPressLearnMore}
            title="Login"
            color="#841584"
            accessibilityLabel="Back to Login"
          />
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

AppRegistry.registerComponent('SignUp', () => SignUp);