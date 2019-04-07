import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Linking,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    Alert,
} from "react-native";
import QRCode from 'react-native-qrcode';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from "react-native-modal";

class QRCodeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {isShowingTag : true}
    };

    handleOnPress = () => this.setState({ isShowingTag: !this.state.isShowingTag })

    onSuccess(e) {
        <PopUp/>
        // Linking
        //     .openURL(e.data)
        //     .catch(err => console.error('An error occurred', err));
    };

    render() {
        const tagView = <QRCode
            value={"this.state.text"}
            size={200}
            bgColor='#003399'
            fgColor='white'/>;

        const scanView = <QRCodeScanner onRead={this.onSuccess.bind(this)}/>;

        return (
            <View style={styles.screenContainer}>
                <View style={styles.PaddingContainer}>

                </View>

                <View style={styles.QRContainer}>
                    {this.state.isShowingTag ? tagView : scanView}
                </View>

                <View style={styles.PaddingContainer}>
                    <Button title={!this.state.isShowingTag ? "Your Code" : "Scan a Code"} onPress={this.handleOnPress}/>
                </View>

            </View>
        );
    }
}

class PopUp extends Component {
    state = {
        popUpVisible: false,
    };

    setModalVisible(visible) {
        this.setState({popUpVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.popUpVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        backgroundColor:'#003399',
    },
    QRContainer:{
        flex: 6,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F2F2F2',
    },
    PaddingContainer:{
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center',
    },
});
export default QRCodeScreen;