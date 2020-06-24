import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FillReceiptModal from '../../components/Request/FinishRequest/FillReceiptModal';

const TestFillReceipt = () => {

    const [modal, setModal] = useState(false);
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FillReceiptModal modalVisible={modal} close={() => { setModal(false) }} />
        <TouchableOpacity
            style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '5%', borderRadius: 50, borderWidth: 2 }}
            onPress={() => { setModal(true) }}
        >
            <Text>Open Fill Receipt</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({

});

export default TestFillReceipt;