import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActiveRequestInfoModal from './ActiveRequestInfoModal'

const WaitingHelperToStartRequest = () => {
    const handleStartRequest = async () => {
        if (mount)
            setLoading(true)
        await startRequest();
        if (mount)
            setLoading(false);
        refresh();
    }
    const handleCancelRequest = async () => {
        if (mount)
            setLoading(true)
        await cancelRequest();
        if (mount)
            setLoading(false);
        refresh();
    }
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