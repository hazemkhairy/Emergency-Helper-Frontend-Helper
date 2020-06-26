import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FillReceiptModal from '../../components/Request/FinishRequest/FillReceiptModal';
import RateClientModal from '../../components/Request/RateRequest/RateClientModal';

const TestFillReceipt = () => {

    const [rateModal, setRateModal] = useState(false);
    const [modal, setModal] = useState(false);
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
            modal ?
                <FillReceiptModal modalVisible={modal} close={() => { setModal(false) }} />
                : null
        }
        {
            rateModal ?
                <RateClientModal modalVisible={rateModal} close={() => { setRateModal(false) }} />
                : null
        }
        <TouchableOpacity
            style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '5%', borderRadius: 50, borderWidth: 2 }}
            onPress={() => { setModal(true) }}
        >
            <Text>Open Fill Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ marginTop: '5%', backgroundColor: 'rgba(0,0,0,0.3)', padding: '5%', borderRadius: 50, borderWidth: 2 }}
            onPress={() => { setRateModal(true) }}
        >
            <Text>Rate Client</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({

});

export default TestFillReceipt;