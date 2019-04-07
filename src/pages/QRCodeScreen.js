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
            popUpText : '',
            NameOfUser : this.props.navigation.state.params.NameOfUser
        }
    };

    handleOnPress = () => this.setState({ isShowingTag: !this.state.isShowingTag })

    static onSuccess(e) {
        // Linking
        //     .openURL(e.data)
        //     .catch(err => console.error('An error occurred', err));
    };

    modalOnPress(e){
        this.setState({ isShowingModal: true, popUpText: e.data })
    }

    render() {
        const tagView = <QRCode
            value={this.state.NameOfUser}
            size={300}
            bgColor='#003399'
            fgColor='white'/>;

        const scanView = <QRCodeScanner onRead={this.modalOnPress.bind(this)}/>;
        const modalView = <PopUp text={"Hi "+this.state.popUpText}/>;

        return (
            <View style={styles.screenContainer}>
                <View style={styles.PaddingContainer}/>

                <View style={styles.QRContainer}>
                    {this.state.isShowingTag ? tagView : scanView}
                    {this.state.isShowingModal ? modalView : null}
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
        isModalVisible: true,
    };

    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Modal isVisible={this.state.isModalVisible} onBackdropPress={this._toggleModal}>
                    <View style={{ width:400, height: 400, backgroundColor:'#A7FFFF'}}>
                        <Text>{this.props.text}</Text>
                        <Button title="DISMISS" onPress={this._toggleModal}/>
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