import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import RatingComponent from '../../global/RatingComponent'
import { AntDesign } from '@expo/vector-icons';

const RateClientModal = ({ modalVisible, close }) => {
    if (!modalVisible)
        return null;
    const [rate, setRate] = useState(3);
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('')

    const validInput = () => {
        let valid = true;
        if (description.trim().length == 0) {
            valid = false;
            setDescriptionError("Please enter Description")

        }
        else {
            setDescriptionError("")
        }
        return valid
    }

    const handleSubmit = () => {
        close({ rate, feedback: description })

    }
    return <Modal isVisible={modalVisible} >
        <KeyboardAvoidingView behavior={"position"} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>

            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>

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
                    <View style={styles.titleRow}>
                        <Text style={styles.titleText}>Rate the Client</Text>
                    </View>
                    <View style={styles.inputRow}>

                        <View style={styles.ratingRow}>
                            <RatingComponent value={rate} setValue={setRate} />
                        </View>
                        <View style={styles.textInputRow}>

                            <TextInput
                                returnKeyType="done"
                                placeholder="Tell us your feedback"
                                style={descriptionError ? { ...styles.descriptionInput, ...styles.errorTextInput } : styles.descriptionInput}
                                multiline
                                numberOfLines={4}
                                value={description}
                                placeholderTextColor={descriptionError ? 'red' : '#78849E'}
                                onChangeText={(text) => { setDescription(text) }}
                            />
                            <Text style={styles.errorMessageText}>{descriptionError}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => { handleSubmit() }}>
                            <Text style={styles.buttonText}>Submit</Text>
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
        flex: 1,
        maxHeight: Dimensions.get('screen').height * 0.4,
        paddingTop: '3%',
        paddingHorizontal: '7%',
        borderWidth: 1
    },
    innerContainer: {
        flex: 1,
    },
    closeRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'Montserrat_Bold'
    },
    ratingRow: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    textInputRow: {
        flex: 3
    },
    inputRow: {
        flex: 6,
        paddingHorizontal: '15%'
    },
    descriptionInput: {
        borderWidth: 0.2,
        borderColor: '#707070',
        borderRadius: 12,
        paddingVertical: Dimensions.get('screen').height * 0.01,
        paddingHorizontal: Dimensions.get('screen').width * 0.03,
        textAlign: 'left',
        textAlignVertical: 'top',
        width: '100%',
        height: '100%'
    },
    buttonRow: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#132641',
        borderRadius: 30,
        paddingHorizontal: '5%',
        paddingVertical: '3%'
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Montserrat_SemiBold'
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

export default RateClientModal;