import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        TextInput,
        View,
        Image,
        TouchableOpacity,
        Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const userSatu = {
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "username": "BerryGood",
    "password": "BerryGood",
    "ip_address": "26.58.193.2"
};

export const userDua = {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "username": "EverBefore",
    "password": "EverBefore",
    "ip_address": "229.179.4.212"
};

class SignInScreen extends Component {
    constructor(props){
        super(props);
        this.state={username : '', password : '', dataIndex: ''}
    }

    _signUp = ()=> {
        this.props.navigation.navigate('SignUp');
    }

    _asyncLogin = async ()=>{
        const cond1 = (this.state.username === userSatu.username && this.state.password === userSatu.password);
        const cond2 = (this.state.username === userDua.username && this.state.password === userDua.password);
        if(cond1){
            await AsyncStorage.setItem('userToken', 'user1');
            this.props.navigation.navigate('Home', {userDataInfo : userSatu});
        } else {
            await AsyncStorage.setItem('userToken', 'user2');
            this.props.navigation.navigate('Home', {userDataInfo : userDua});
        }

        if(cond1 || cond2)
        {

        }
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
                    onChangeText={(username) => this.setState({username})}
                    style={styles.inputField}/>
                <TextInput
                    placeholder='password'
                    underlineColorAndroid='#003399'
                    placeholderTextColor='#003399'
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    style={styles.inputField}/>

                <TouchableOpacity onPress={this._asyncLogin}>
                    <Text style={{color:'#003399', marginTop: 10, fontSize: 23}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._signUp}>
                    <Text style={{color:'#003399', marginTop: 10, fontSize: 23}}>Sign Up</Text>
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
        marginTop: 5,
        fontSize: 18,
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