import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Modal from 'react-native-modal';

import { AntDesign } from '@expo/vector-icons';
import ReceiptItem from './ReceiptItem';

import { useSelector, useDispatch } from 'react-redux';

import { validNumber } from '../../../utils/CommonUtils';
import {
    addItemToReceipt,
    clearReceipt,
    deleteItemFromReceipt,
    setItems,
} from '../../../store/Request/FillReceipt/action'

const getUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const FillReceiptModal = ({ modalVisible, close, submit }) => {
    if (!modalVisible)
        return null;
    const items = useSelector(
        (store) => {
            return store.fillReceiptReducer.items;
        }
    )
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const addItem = (index) => {
        dispatch(addItemToReceipt(index));
        setRefresh(!refresh);
    }
    const removeItem = (index) => {
        dispatch(deleteItemFromReceipt(index));
        setRefresh(!refresh);
    }


    const validInput = () => {
        let copy = items;
        let valid = true;
        for (let i = 0; i < items.length; i++) {
            if (items[i].name.trim().length == 0) {
                copy[i].nameError = true;
                valid = false;
            }
            else {
                copy[i].nameError = false;
            }
            if (!validNumber(items[i].price)) {
                copy[i].priceError = true;
                valid = false;
            }
            else {
                copy[i].priceError = false;
            }


        }
        if (!valid) {
            dispatch(setItems(copy));
            setRefresh(!refresh);
        }
        return valid;
    }
    const handleSubmit = () => {
        if (validInput()) {
            submit(items)
        }
    }
    return (
        <Modal isVisible={modalVisible} >
            <KeyboardAvoidingView
                behavior={Platform.OS == "android" ? "postion" : "padding"}
                style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>

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
                            <Text style={styles.titleText}>Fill out customer's receipt</Text>
                        </View>
                        <View style={styles.itemsRow}>
                            <FlatList
                                extraData={refresh}
                                keyExtractor={() => getUUID()}
                                data={items}
                                renderItem={
                                    ({ item, index }) => {
                                        return <View style={styles.itemRow}>
                                            <ReceiptItem
                                                index={index}
                                                removeable={index > 0}
                                                addItem={() => { addItem(index) }}
                                                removeItem={() => { removeItem(index) }}
                                            />
                                        </View>
                                    }
                                }
                            />
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
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
    itemsRow: {
        flex: 5,
        borderRadius: 30,
        overflow: 'hidden',
    },
    itemRow: {
        width: '100%',
        marginTop: '5%',
        flex: 1
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
    }
})
export default FillReceiptModal;