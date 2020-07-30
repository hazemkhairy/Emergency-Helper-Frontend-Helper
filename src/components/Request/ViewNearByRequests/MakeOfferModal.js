import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import { sendOffer } from '../../../utils/OfferUtils';
import LoadingModal from '../../global/LoadingModal';
import ErrorModal from '../../global/ErrorModal';
import { useNavigation } from 'react-navigation-hooks';

const MakeOfferModal = ({ modalVisibility, close, clientName, requestID }) => {
    if (!modalVisibility)
        return null;
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');

    const [priceError, setPriceError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const validData = () => {
        let valid = true;
        if (from.length == 0 || to.length == 0 || isNaN(from) || isNaN(to)) {
            valid = false;
            setPriceError("Please enter valid price value")
        }
        else if (Number(from) > Number(to)) {
            valid = false;
            setPriceError("Please enter valid range")
        }
        else {
            setPriceError("")
        }
        if (description.trim().length == 0) {
            valid = false;
            setDescriptionError("Please enter Description")

        }
        else {
            setDescriptionError("")
        }
        return valid
    }
    const handleSubmit = async () => {
        if (validData()) {
            setLoading(true);
            let res = await sendOffer(from, to, description, requestID);
            setLoading(false);
            if (res.status && res.status >= 300) {
                setErrorModalMessage(res.message ? res.message : 'something went wrong')
                setErrorModal(true);
            }
            else {
                navigate('MainScreen');
            }
        }
    }

    if (loading)
        return <LoadingModal modalVisible={loading} />

    if (errorModal)
        return <ErrorModal
            closeModal={() => { setErrorModal(false) }}
            modalVisible={errorModal}
            message={errorModalMessage}
        />
    return <Modal
        isVisible={true}
        animationIn="fadeIn"

    >
        <KeyboardAvoidingView
            behavior={Platform.OS == "android" ? "postion" : "padding"}
            style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>

            <View style={styles.container}  >
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
                <View style={styles.body}>
                    <View style={styles.titleContainer}>

                        <Text style={styles.titleText}>Make an Offer for </Text>
                        <Text style={styles.clientName}>{clientName} </Text>
                    </View>
                    <View style={styles.priceRow}>
                        <TextInput
                            placeholder="From"
                            style={priceError ? { ...styles.priceInput, ...styles.errorTextInput } : styles.priceInput}
                            keyboardType="numeric"
                            value={from}
                            onChangeText={(text) => { setFrom(text) }}
                            placeholderTextColor='#78849E'
                        />
                        <Text style={styles.currancyStyle}>
                            ~
                    </Text>
                        <TextInput
                            placeholder="To"
                            style={priceError ? { ...styles.priceInput, ...styles.errorTextInput } : styles.priceInput}
                            keyboardType="numeric"
                            value={to}
                            onChangeText={(text) => { setTo(text) }}
                            placeholderTextColor='#78849E'
                        />
                        <Text style={styles.currancyStyle}>
                            EGP
                    </Text>
                    </View>
                    <Text adjustsFontSizeToFit style={styles.errorMessageText}>{priceError}</Text>
                    <View style={styles.descriptionRow}>
                        <TextInput
                            placeholder="Type your offer here"
                            style={descriptionError ? { ...styles.descriptionInput, ...styles.errorTextInput } : styles.descriptionInput}
                            multiline
                            numberOfLines={4}
                            value={description}
                            placeholderTextColor={'#78849E'}
                            onChangeText={(text) => { setDescription(text) }}
                        />
                        <Text style={styles.errorMessageText}>{descriptionError}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    </Modal>
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        height: Dimensions.get('screen').height * 0.45,
        width: '100%',
        borderRadius: 45,
        alignItems: 'center'
    },
    closeRow: {
        alignSelf: 'flex-end',
        flex: 1,
        marginRight: '7%',
        justifyContent: 'center',
    },
    body: {
        paddingHorizontal: '15%',
        alignItems: 'center',
        width: '100%',
        flex: 9,
    },
    titleContainer: {
        alignItems: 'center',
        flex: 2
    },
    titleText: {
        color: '#132641',
        fontSize: 20,
        fontFamily: 'Montserrat_SemiBold'
    },
    clientName: {
        color: '#132641',
        fontSize: 15,
        fontFamily: 'Montserrat'
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    priceInput: {
        borderWidth: 0.3,
        borderColor: '#707070',
        borderRadius: 12,
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '35%',
        fontSize: 12,
    },
    currancyStyle: {
        color: '#78849E',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold',
    },
    descriptionRow: {
        width: '100%',
        flex: 4,
        marginTop: '5%',
        alignItems: 'center'
    },
    descriptionInput: {
        borderWidth: 0.3,
        borderColor: '#707070',
        borderRadius: 12,
        paddingVertical: Dimensions.get('screen').height * 0.01,
        paddingHorizontal: Dimensions.get('screen').width * 0.03,
        textAlign: 'left',
        textAlignVertical: 'top',
        width: '100%',
        height: '100%',
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
    errorMessageText: {
        color: 'red',
        fontSize: 14 * (Dimensions.get('screen').width / 375),
        fontFamily: 'Montserrat'
    },
    errorTextInput: {
        borderColor: 'red',
        borderWidth: 1,
    }
});

export default MakeOfferModal;
