/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Router from './src/Router.js'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);
export default class App extends Component<> {
  render() {
    return (
       <Router/>
    );
  }
}
