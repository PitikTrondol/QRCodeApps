import React, {Component} from 'react';
import {AsyncStorage, Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

class SignUpScreen extends Component {

    _signOutAsync= async ()=>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._signOutAsync}>
                    <Text style={{color:'#003399', marginTop: 10, fontSize: 26}}>
                        Not Ready
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SignUpScreen;