import React, {Component} from 'react';
import {AsyncStorage, Button, StyleSheet, View} from "react-native";

class SignUpScreen extends Component {

    _signOutAsync= async ()=>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="No, it's not ready yet" onPress={this._signOutAsync} />
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