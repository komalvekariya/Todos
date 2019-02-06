import React, { Component } from 'react';
import { Platform, Button, StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation'
import store from './src/store'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
