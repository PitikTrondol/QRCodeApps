/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SignInScreen from './src/pages/SignInScreen.js'
import Router from './src/Router.js'

export default class App extends Component<> {
  render() {
    return (
       <Router/>
    );
  }
}
