import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        TextInput,
        View,
        Image,
        TouchableOpacity,
        Text,
        AsyncStorage,
} from 'react-native';

class SignInScreen extends Component {
    _signUp = ()=> {
        this.props.navigation.navigate('SignUp');
    }

    _asyncLogin = async ()=>{
        await AsyncStorage.setItem('userToken', 'asdf');
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View
                behavior="padding"
                style={styles.Wrapper}>

                <Image resizeMode="contain" style={styles.logo} source={require('../../asset/tag.png')} />
                <TextInput
                    placeholder='email'
                    underlineColorAndroid='#003399'
                    placeholderTextColor='#003399'
                    keyboardType='email-address'
                    style={styles.inputField}/>
                <TextInput
                    placeholder='password'
                    underlineColorAndroid='#003399'
                    placeholderTextColor='#003399'
                    secureTextEntry={true}
                    style={styles.inputField}/>

                <TouchableOpacity onPress={this._asyncLogin}>
                    <Text style={{color:'#003399', marginTop: 10}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._signUp}>
                    <Text style={{color:'#003399', marginTop: 10}}>SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputField: {
        width: 280,
        color: '#003399',
        borderColor: '#003399',
        marginTop: 5
    },
    Wrapper : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD'
    },
    text :{
        color: '#003399',
        fontSize: 23
    },
    logo: {
        width: 300,
        height: 180
    }
});

export default SignInScreen;