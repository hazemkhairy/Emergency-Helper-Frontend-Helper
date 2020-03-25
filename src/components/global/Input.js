import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const Input = (props) => {
    let myStyle = styles.input;
    if (props.style)
        myStyle = { ...myStyle, ...props.style }
    if (props.error)
        myStyle = { ...myStyle, ...styles.error }

    return <View>
        <TextInput

            value={props.value}
            onChangeText={props.onChangeText}
            {...props}
            style={myStyle}
        />
    </View>
}
const styles = StyleSheet.create({
    input: {

        height: 25,
        backgroundColor: '#ffffff00',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Montserrat_Medium'

    },
    error: {
        borderBottomColor: '#b30000',
        borderBottomWidth: 1
    }
})

export default Input;