import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from "react-navigation";

import AuthChecking from './pages/AuthChecking.js';
import HomeScreen from './pages/HomeScreen.js';
import SignInScreen from './pages/SignInScreen.js';
import SignUpScreen from './pages/SignUpScreen.js';
import QRCodeScreen from './pages/QRCodeScreen.js';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Main: QRCodeScreen
});

const GateStack = createStackNavigator({
    SignIn: SignInScreen
});

const EnrollStack = createStackNavigator({
    SignUp: SignUpScreen
});

const CheckAuthStack = createStackNavigator({
    LoadCheck: AuthChecking
});

const AuthStack = createSwitchNavigator(
    {
        Login: GateStack,
        Checking: CheckAuthStack,
        App: AppStack,
        Daftar: EnrollStack
    },
    {
        initialRouteName: 'Checking'
    }
);

const AppContainer = createAppContainer(AuthStack);

export default AppContainer;