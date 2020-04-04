import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';

const ErrorModal = ({ modalVisible }) => {
    useEffect(() => { }, [modalVisible])

    return (
        <Modal isVisible={modalVisible} >
            <>
                <View style={styles.modalBody}>
                    <ActivityIndicator
                        color='rgba(117, 152, 200,1)'
                        size={Math.min(Dimensions.get('window').width * 0.2, Dimensions.get('window').height * 0.1)}
                    />
                </View>
            </>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBody: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ErrorModal;