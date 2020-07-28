import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Modal from 'react-native-modal';
import { cancelRequest } from '../../../utils/RequestUtils';
import LoadingModal from '../../global/LoadingModal';
import ErrorModal from '../../global/ErrorModal';


const CancelModal = ({ mv, close }) => {
    let mount = true;
    if (!mv || !mount)
        return null;
    const [reason, setReason] = useState('');
    const [reasonError, setReasonError] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    useEffect(
        () => {
            return () => { mount = false; }
        }, []
    )
    const validInput = () => {
        if (reason.trim().length) {
            setReasonError('');
            return true;
        }
        setReasonError('Please enter valid Text');
        return false;
    }
    const handleSubmit = async () => {
        if (validInput()) {
            setLoading(true)
            cancelRequest(reason).then(
                () => {

                }
            )
                .catch(
                    err => {
                        if (mount)
                            setLoading(false)
                        if (mount)
                            setErrorModal(true);
                    }
                )
        }
    }
    if (loading)
        return <LoadingModal modalVisible={loading} />
    else if (errorModal)
        return <ErrorModal
            closeModal={() => setErrorModal(false)}
            message="Error happened during cancelling"
            modalVisible={errorModal}
        />
    return <Modal isVisible={mv} >
        <KeyboardAvoidingView behavior={"padding"} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.outerContainer}>
                <View style={styles.closeRow}>
                    <TouchableOpacity
                        onPress={() => { close() }}
                    >
                        <AntDesign
                            name="close"
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <View style={styles.titleRow}>
                        <Text numberOfLines={2} style={styles.titleText}>
                            Are you sure you want to cancel?
                    </Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={reasonError ? { ...styles.input, ...styles.errorInput } : styles.input}
                            value={reason}
                            onChangeText={(t) => { setReason(t) }}
                            placeholderTextColor={reasonError ? 'red' : "#78849E"}
                            multiline
                            placeholder={"Tell Us what happened"}
                        />
                        <Text style={styles.errorText}>{reasonError}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>
                            You might be charged the visit payment if you exceeded the minimum time for cancelling.
                    </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => { handleSubmit() }}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </KeyboardAvoidingView>
    </Modal>
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',

        height: Dimensions.get('screen').height * 0.4,
        paddingTop: '3%',
        paddingHorizontal: '5%',
        borderWidth: 1
    },
    innerContainer: {
        flex: 10,
        paddingHorizontal: '15%',
        justifyContent: 'space-between'
    },
    closeRow: {
        alignSelf: 'flex-end',
        flex: 1,
        marginRight: '7%',
        justifyContent: 'center',
    },
    titleRow: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'Montserrat_SemiBold',
        color: '#132641',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    inputRow: {
        flex: 7,

    },
    input: {
        flex: 1,
        borderRadius: 12,
        borderColor: '#707070',
        borderWidth: 0.2,
        backgroundColor: 'white',
        color: '#132641',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold',
        textAlignVertical: 'top',
        padding: '5%'
    },
    infoRow: {
        flex: 3
    },
    infoText: {
        fontSize: 10,
        fontFamily: 'Montserrat',
        color: '#132641',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,

    },
    button: {
        backgroundColor: '#132641',
        paddingVertical: Dimensions.get('screen').height * 0.01,
        paddingHorizontal: Dimensions.get('screen').width * 0.05,
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat',

    },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1,
    },
    errorText: {
        color: 'red',
        fontSize: 14 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat_SemiBold',
        textAlign: 'center'
    }
});

export default CancelModal;