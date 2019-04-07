import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Linking,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
} from "react-native";
import QRCode from 'react-native-qrcode';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from "react-native-modal";

class QRCodeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            isShowingTag : true,
            isShowingModal : false,
            NameOfUser : this.props.navigation.state.params.NameOfUser
        }
    };

    handleOnPress = () => this.setState({ isShowingTag: !this.state.isShowingTag })

    static onSuccess(e) {
        // Linking
        //     .openURL(e.data)
        //     .catch(err => console.error('An error occurred', err));
    };

    render() {
        const tagView = <QRCode
            value={this.state.NameOfUser}
            size={300}
            bgColor='#003399'
            fgColor='white'/>;

        const scanView = <QRCodeScanner onRead={QRCodeScreen.onSuccess.bind(this)}/>;
        const modalView = <PopUp text={"this.modalText"}/>;

        return (
            <View style={styles.screenContainer}>
                <View style={styles.PaddingContainer}>

                </View>

                <View style={styles.QRContainer}>
                    {this.state.isShowingTag ? tagView : scanView}
                    {/*<PopUp/>*/}
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
        isModalVisible: false,
    };

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button title="TEST" onPress={this._toggleModal} />
                <Modal isVisible={this.state.isModalVisible} onBackdropPress={this._toggleModal}>
                    <View style={{ width:400, height: 400, backgroundColor:'#A7FFFF'}}>
                        <Text>{this.props.text}</Text>
                        <Button title="TEST" onPress={this._toggleModal}/>
                    </View>
                </Modal>
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