import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActiveRequestInfoModal from './ActiveRequestInfoModal'
import FillReceiptModal from '../FinishRequest/FillReceiptModal'
import LoadingModal from '../../global/LoadingModal';
import RateClientModal from '../RateRequest/RateClientModal'
const WaitingHelperToFinishRequest = () => {
    const [infoModal, setInfoModal] = useState(true);
    const [receiptModal, setReceiptModal] = useState(false);
    const [rateModal, setRateModal] = useState(false);

    const toggleModals = () => {
        if (infoModal) {
            setInfoModal(!infoModal);
            setReceiptModal(!receiptModal);
        }
        else {
            setInfoModal(!infoModal);
            setReceiptModal(!receiptModal);
        }
    }
    const openRate =  () => {
        setReceiptModal(false);
        setRateModal(true);
        console.log('clicked')
    }
    if (infoModal) {
        return <ActiveRequestInfoModal mv={infoModal} inProgress>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { toggleModals(); }}>
                    <Text style={styles.redText}>End Request</Text>
                </TouchableOpacity>
            </View>
        </ActiveRequestInfoModal>
    }
    else if (receiptModal) {
        return <FillReceiptModal
            modalVisible={receiptModal}
            close={() => { toggleModals() }}
            submit={() => { openRate() }}
        />
    }
    else if (rateModal)
        return <RateClientModal
            modalVisible={rateModal}
            close={() => { setRateModal(false); setReceiptModal(true); }}
        />

    return <LoadingModal modalVisible={!receiptModal && !infoModal} />
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    redText: {
        color: '#B72020',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    }
});
export default WaitingHelperToFinishRequest;