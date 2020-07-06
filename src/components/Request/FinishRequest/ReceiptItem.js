import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { modifieItemInReceipt } from '../../../store/Request/FillReceipt/action';

const ReceiptItem = ({ removeable, addItem, removeItem, index }) => {
    const dispatch = useDispatch();
    let item = useSelector(
        store => {
            return store.fillReceiptReducer.items[index];
        }
    )
    return <View style={styles.container}>
        <View style={styles.iconContainer}>
            {removeable ?
                <TouchableOpacity onPress={removeItem}>

                    <AntDesign name="minus" size={26} color="red" />
                </TouchableOpacity>
                : null
            }
        </View>
        <TextInput
            placeholder="Service Name"
            style={item.nameError ? { ...styles.nameInput, ...styles.errorInput } : styles.nameInput}
            placeholderTextColor='#78849E'
            value={item.name}
            onChangeText={(t) => {
                dispatch(modifieItemInReceipt(index, { name: t }))
            }}
        />
        <TextInput
            placeholder="Price"
            style={item.priceError ? { ...styles.priceInput, ...styles.errorInput } : styles.priceInput}
            placeholderTextColor='#78849E'
            value={item.price}
            keyboardType="numeric"

            onChangeText={(t) => {
                dispatch(modifieItemInReceipt(index, { price: t }))
            }}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={() => { addItem() }}>

            <AntDesign name="plus" size={26} color="#2C2626" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconContainer: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    priceInput: {
        borderWidth: 0.2,
        borderColor: '#707070',
        borderRadius: 12,
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        fontSize: 12,
    },
    nameInput: {
        borderWidth: 0.2,
        borderColor: '#707070',
        borderRadius: 12,
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 12,
        height: '100%',
        width: '50%',
    },
    errorInput: {

        borderColor: 'red',
        borderWidth: 1,
    }
})

export default ReceiptItem;