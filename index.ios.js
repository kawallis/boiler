import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux'
import App from './src/App'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers/reducers';

const store = createStore(reducers, {
  isLoggedIn: false,
  token: '',
  user: {},
},
compose(
   applyMiddleware(thunk),
   global.reduxNativeDevTools ?
      global.reduxNativeDevTools(/*options*/) :
      noop => noop
));

export default class hops extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2CDA9D',
  }
});

AppRegistry.registerComponent('hops', () => hops);
