import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import QRCode from 'react-native-qrcode';

class QRCodeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, alignItems: 'center'}}></View>
                <View style={styles.QRContainer}>
                    <QRCode
                        value={"this.state.text"}
                        size={200}
                        bgColor='#003399'
                        fgColor='white'/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#003399',
    },
    QRContainer:{
        alignItems: 'center',
        flex: 8,
        justifyContent: 'center',
        backgroundColor:'#F2F2F2',
    },
    logo:{
        position: 'absolute',
        width: 300,
        height: 300
    }
});
export default QRCodeScreen;