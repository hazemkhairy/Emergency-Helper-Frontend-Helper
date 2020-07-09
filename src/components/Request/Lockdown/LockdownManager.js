import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LoadingModal from '../../global/LoadingModal'
import { getLockdownStatus } from '../../../utils/LockdownUtils';
import WaitingOfferAcceptanceModal from './WaitingOfferAcceptanceModal';
import WaitingClientModal from './WaitingClientModal';
import WaitingHelperToStartRequest from './WaitingHelperToStartRequest';
import WaitingHelperToFinishRequest from './WaitingHelperToFinishRequest';

const WAITING_FOR_OFFER_RESPONSE = 'WAITING_FOR_OFFER_RESPONSE';
const WAITING_FOR_HELPER_START = 'WAITING_FOR_HELPER_START';
const WAITING_FOR_CLIENT_APPROVAL= 'WAITING_FOR_CLIENT_APPROVAL';
const WAITING_FOR_FINISH_REQUEST = 'WAITING_FOR_FINISH_REQUEST';
const WAITING_FOR_ADMIN_APPROVAL = 'WAITING_FOR_ADMIN_APPROVAL';

const LockdownManager = () => {

    const [loading, setLoading] = useState(true);
    const [lockdown, setLockdown] = useState({ isLockedDown: false });
    console.log(lockdown)
    let mount = true;
    const x = async () => {
        setLoading(true);
        await compareLockdown();
        setLoading(false);
    }
    useEffect(
        () => {

            x();
            setRefresh();

            return () => { mount = false };
        },
        []
    )
    const compareLockdown = async () => {
        return getLockdownStatus().then(
            (res) => {
                if (mount && (!res.isLockedDown || res.type != lockdown.type)) {
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
                    compareLockdown();
                else
                    clearInterval(timerId);
            }
            , 5000
        )
    }
    if (loading) {
        return <LoadingModal modalVisible={loading} />
    }
    else if (!lockdown.isLockedDown) {
        return <View></View>;
    }
    switch (lockdown.type) {
        case WAITING_FOR_OFFER_RESPONSE: {
            return <WaitingOfferAcceptanceModal lockdown={lockdown} />
        }
        case WAITING_FOR_HELPER_START: {
            return <WaitingHelperToStartRequest />
        }
        case WAITING_FOR_CLIENT_APPROVAL: {
            return <WaitingClientModal
                title={"Request Started"}
                subTitle={"Waiting For client confirmation!"}
            />
        }
        case WAITING_FOR_FINISH_REQUEST: {
            return <WaitingHelperToFinishRequest />
            }
        default:
            return <Text>LOOOL</Text>
    }
}
const styles = StyleSheet.create({

});

export default LockdownManager;