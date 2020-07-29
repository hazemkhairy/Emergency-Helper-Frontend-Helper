import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { getCurrentOffer } from '../../../utils/LockdownUtils';

const WaitingOfferAcceptanceModal = () => {

    let mount = useRef(true);

    const [timeLeft, setTimeLeft] = useState(new Date(0, 0, 0, 0, 0, 0, 1));
    let [offer, setOffer] = useState({});

    const getOffer = () => {
        getCurrentOffer().then(
            (res) => {
                if (mount.current)
                    setOffer(res);
            }
        )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }
    useEffect(
        () => {
            let timerId = setTimeout(
                () => {
                    let ms = new Date() - new Date(offer.createdAt)
                    ms = offer.expiryDuration - ms;
                    if (mount.current && ms >= 0) {
                        setTimeLeft(new Date(0, 0, 0, 0, 0, 0, ms));
                        clearTimeout(timerId)
                    }

                },
                1000
            )
        },
        [timeLeft, offer]
    )
    useEffect(
        () => {
            getOffer();
            return () => { mount.current = false; }
        }, []
    )
    return <Modal isVisible={mount.current} >
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>

                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>Waiting for client's Response</Text>
                </View>
                <View style={styles.timeRow}>
                    <Text style={styles.subTitleText}>Remaining Time:</Text>
                    <Text style={styles.timeText}>
                        {timeLeft.getMinutes() <= 9 ? '0' : ''}
                        {timeLeft.getMinutes()}
                        :
                        {timeLeft.getSeconds() <= 9 ? '0' : ''}
                        {timeLeft.getSeconds()} Minutes
                    </Text>

                </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        flex: 1,
        maxHeight: Dimensions.get('screen').height * 0.4,
        paddingTop: '3%',
        paddingHorizontal: '5%',
        borderWidth: 1
    },
    innerContainer: {
        flex: 1,
    },
    titleRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeRow: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 17 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat_Bold'
    },
    subTitleText: {
        fontSize: 18 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat_Medium',
    },
    timeText: {
        fontSize: 16 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat_Medium',
        color: '#B72020',
    },
});

export default WaitingOfferAcceptanceModal;