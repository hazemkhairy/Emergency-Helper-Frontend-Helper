import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActiveRequestInfoModal from './ActiveRequestInfoModal'
import CancelModal from '../FinishRequest/CancelModal';
import LoadingModal from '../../global/LoadingModal';
import { startRequest } from '../../../utils/RequestUtils'
const WaitingHelperToStartRequest = () => {
    const [cancelModal, setCancelModal] = useState(false);
    const [loading, setLoading] = useState(false);

    let mount = true;
    const handleStartRequest = async () => {
        if (mount)
            setLoading(true)
        await startRequest();
        if (mount)
            setLoading(false);

    }
    const handleCancelRequest = async () => {
        setCancelModal(true)
    }
    if (loading) {
        return <LoadingModal modalVisible={loading} />
    }
    if (cancelModal)
        return <CancelModal
            mv={cancelModal}
            close={() => { setCancelModal(false) }}
        />
    return <ActiveRequestInfoModal mv={true}>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { handleStartRequest(); }}>
                <Text style={styles.greenText}>Start Help</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { handleCancelRequest(); }}>
                <Text style={styles.redText}>Cancel Request</Text>
            </TouchableOpacity>
        </View>
    </ActiveRequestInfoModal>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    greenText: {
        color: '#1F7B13',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    redText: {
        color: '#B72020',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    }
});
export default WaitingHelperToStartRequest;