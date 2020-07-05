import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const WaitingClientModal = ({ lockdown, title, subTitle }) => {
    if (!lockdown.isLockedDown)
        return null;
    let mount = true;


    useEffect(
        () => {
            return () => { mount = false; }
        }, []
    )
    return <Modal isVisible={lockdown.isLockedDown} >
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>

                <View style={styles.subTitleRow}>
                    <Text style={styles.subTitleText}>{subTitle}</Text>
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
        maxHeight: Dimensions.get('screen').height * 0.2,
        paddingTop: '3%',
        paddingHorizontal: '5%',
        borderWidth: 1
    },
    innerContainer: {
        flex: 1,
    },
    titleRow: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTitleRow: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat_Bold'
    },
    subTitleText: {
        fontSize: 16 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat_Medium',
    },
});

export default WaitingClientModal;