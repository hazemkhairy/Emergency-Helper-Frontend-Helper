import React from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';

const LoadingModal = ({ modalVisible }) => {
    if (!modalVisible)
        return null;
    return (
        <Modal isVisible={modalVisible} >
            <>
                <View style={styles.modalBody}>
                    <ActivityIndicator
                        color='rgba(117, 152, 200,1)'
                        size={Math.min(Dimensions.get('screen').width * 0.2, Dimensions.get('screen').height * 0.1)}
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
export default LoadingModal;