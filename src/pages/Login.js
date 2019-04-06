import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../asset/tag.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#F2F2F2',
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        position: 'absolute',
        width: 300,
        height: 300
    }
});

export default Login;