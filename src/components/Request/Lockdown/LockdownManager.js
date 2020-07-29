import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getLockdownStatus } from '../../../utils/LockdownUtils';
import WaitingOfferAcceptanceModal from './WaitingOfferAcceptanceModal';
import WaitingClientModal from './WaitingClientModal';
import WaitingHelperToStartRequest from './WaitingHelperToStartRequest';
import WaitingHelperToFinishRequest from './WaitingHelperToFinishRequest';

const WAITING_FOR_OFFER_RESPONSE = 'WAITING_FOR_OFFER_RESPONSE';
const WAITING_FOR_HELPER_START = 'WAITING_FOR_HELPER_START';
const WAITING_FOR_CLIENT_APPROVAL = 'WAITING_FOR_CLIENT_APPROVAL';
const WAITING_FOR_FINISH_REQUEST = 'WAITING_FOR_FINISH_REQUEST';
const WAITING_FOR_ADMIN_APPROVAL = 'WAITING_FOR_ADMIN_APPROVAL';

const LockdownManager = () => {
    const [lockdown, setLockdown] = useState({ isLockedDown: false });
    let mount = useRef(true);

    useEffect(
        () => {
            compareLockdown();
            setRefresh();
            return () => { mount.current = false };
        },
        []
    )
    let lastLockdown = useRef({ isLockedDown: false });
    const compareLockdown = async () => {
        return await getLockdownStatus().then(
            (res) => {
                if (mount.current && (res.type != lastLockdown.current.type)) {
                    setLockdown(res)
                    lastLockdown.current = res
                }
            }
        )
            .catch(
                (err) => {
                    //handle error
                    if (mount.current) {

                        setLockdown({ isLockedDown: false });
                    }
                }
            )
    }
    const setRefresh = () => {
        let timerId = setInterval(
            () => {
                if (mount.current)
                    compareLockdown();
                else
                    clearInterval(timerId);
            }
            , 5000
        )
    }
    if (!lockdown.isLockedDown) {
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