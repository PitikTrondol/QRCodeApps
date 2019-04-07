import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';


class AuthChecking extends Component {
    constructor(){
        super();
        this._checkAuth();
    }

    _checkAuth = async ()=> {
        const token = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(token ? 'App' : 'Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AuthChecking;