import React, {Component} from 'react';
import {View, Text} from "native-base";
import {AsyncStorage, StyleSheet, TouchableOpacity, Button} from 'react-native';

class HomeScreen extends Component {
    // static navigationOptions = {
    //     title: 'Welcome to the app!',
    // };

    _showMoreApp = ()=>{
        this.props.navigation.navigate('Main');
    }

    _signOutAsync= async ()=>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {{marginTop:10, marginBottom: 10}}>
                    <Button title="Scan" onPress={this._showMoreApp} />
                </View>
                <View style = {{marginTop:10, marginBottom: 10}}>
                    <Button title="Sign Out" onPress={this._signOutAsync} />
                </View>
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

export default HomeScreen;