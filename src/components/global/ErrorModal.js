import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'
const ErrorModal = ({ modalVisible, closeModal, message }) => {
    if (!modalVisible)
        return null;
    return (
        <Modal isVisible={modalVisible} >
            <View style={styles.container}>

                <View style={styles.modalHeader}>
                    <Ionicons
                        size={Math.min(Dimensions.get('screen').width * 0.11, Dimensions.get('screen').height * 0.1)}
                        name="md-close-circle"
                        color='white'
                    />
                </View>

                <View style={styles.modalBody}>
                    <Text style={styles.errorText}>ERROR!</Text>
                    <Text style={styles.messageText}>{message ? message.replace(/, /g, '\n') : 'There is some error'}</Text>
                </View>

                <View style={styles.modalFooter}>
                    <TouchableOpacity style={styles.button} onPress={() => { closeModal() }}>
                        <View >
                            <Text style={styles.buttonText}>OK</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        minHeight: '30%',
        maxHeight: '30%',
        overflow: 'hidden'

    },
    modalHeader: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#b30000',

    },
    modalFooter: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBody: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       

    },
    button: {
        height: '70%',
        width: '30%',
        borderRadius: 10,
        backgroundColor:  '#b30000',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        fontWeight: "600"
    },
    errorText: {
        fontSize: 25, marginBottom: 5,
        color: 'black', fontWeight: "500"
    },
    messageText: {
        marginLeft:12,
        marginRight:12,
        fontSize: 16,
        fontWeight: "400",


    }
})
export default ErrorModal;