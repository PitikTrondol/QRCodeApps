import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";

class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>

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
export default SignUp;