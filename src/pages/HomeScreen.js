import React, {Component} from 'react';
import {View, Text} from "native-base";
import {StyleSheet, TouchableOpacity, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    constructor(props){
        super(props);
        this.state = {
            userDataInfo: this.props.navigation.state.params.userDataInfo,
        };
    }

    _signOutAsync= async ()=>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    }

    render() {
        const { navigate } = this.props.navigation;
        let concat = this.state.userDataInfo.first_name+' '+this.state.userDataInfo.last_name;
        return (
            <View style={styles.container}>
                <Text style={{fontSize:24}}> Hi {this.state.userDataInfo.first_name}</Text>
                <View style = {{marginTop:10, marginBottom: 10, fontSize:24}}>
                    <Button title="Name Tag" onPress={()=>navigate('Main',{NameOfUser: concat})} />
                </View>
                <View style = {{marginTop:10, marginBottom: 10, fontSize:24}}>
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