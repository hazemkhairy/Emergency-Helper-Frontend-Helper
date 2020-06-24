import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ReceiptItem = ({ item, removeable, addItem, removeItem, doneEditting }) => {

    const [price, setPrice] = useState(item.price)
    const [name, setName] = useState(item.name)

    return <TouchableWithoutFeedback
        onPressOut={() => { console.log('out') }}
        onPressIn={() => { console.log('in') }}
        onPress={() => { console.log('press') }}
    >

        <View style={styles.container}>
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
                value={name}
                onChangeText={(t) => { setName(t); }}
                onBlur={() => { doneEditting({ name, price }) }}
                onEndEditing={() => { doneEditting({ name, price }) }}
                on
            />
            <TextInput
                placeholder="Price"
                style={item.priceError ? { ...styles.priceInput, ...styles.errorInput } : styles.priceInput}
                placeholderTextColor='#78849E'
                value={price}
                keyboardType="numeric"
                onChangeText={(t) => { setPrice(t); }}
                onBlur={() => { doneEditting({ name, price }) }}
                onEndEditing={() => { doneEditting({ name, price }) }}
                
            />
            


            <TouchableOpacity style={styles.iconContainer} onPress={() => { addItem() }}>

                <AntDesign name="plus" size={26} color="#2C2626" />
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
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