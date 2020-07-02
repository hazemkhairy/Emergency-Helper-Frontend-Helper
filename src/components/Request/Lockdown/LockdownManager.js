import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LoadingModal from '../../global/LoadingModal'
import { getLockdownStatus } from '../../../utils/LockdownUtils';
import WaitingOfferAcceptanceModal from './WaitingOfferAcceptanceModal'

const WAITING_FOR_OFFER_RESPONSE = 'WAITING_FOR_OFFER_RESPONSE';
const WAITING_FOR_HELPER_START = 'WAITING_FOR_HELPER_START';
const WAITING_FOR_CLIENT_START = 'WAITING_FOR_CLIENT_START';
const WAITING_FOR_FINISH_REQUEST = 'WAITING_FOR_FINISH_REQUEST';
const WAITING_FOR_ADMIN_APPROVAL = 'WAITING_FOR_ADMIN_APPROVAL';

const LockdownManager = ({ refreshLockdown }) => {

    const [loading, setLoading] = useState(true);
    const [lockdown, setLockdown] = useState({ isLockedDown: false });
    let mount = false;
    console.log(lockdown)
    useEffect(
        () => {
            mount = true;
            setLoading(true);
            compareLockdown();
            setLoading(false);
            setRefresh();
            return () => { mount = false };
        },
        []
    )
    const compareLockdown = () => {
        getLockdownStatus().then(
            (res) => {
                if (mount && !res.isLockedDown || res.type != lockdown.type) {
                    setLockdown(res)
                }
            }
        )
            .catch(
                (err) => {
                    if (mount)
                        setLockdown({ isLockedDown: false });
                }
            )
    }
    const setRefresh = () => {
        let timerId = setInterval(
            () => {
                if (mount)
                    compareLockdown()
                else
                    clearInterval(timerId)
            }
            , 10000
        )
    }
    if (loading) {
        return <LoadingModal modalVisible={loading} />
    }
    else if (!lockdown.isLockedDown) {
        refreshLockdown();
        return <View></View>;
    }
    switch (lockdown.type) {
        case WAITING_FOR_OFFER_RESPONSE: {
            return <WaitingOfferAcceptanceModal lockdown={lockdown} />

        }
        default:
            return <Text>LOOOL</Text>
    }
}
const styles = StyleSheet.create({

});

export default LockdownManager;