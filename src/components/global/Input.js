import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';


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
       
        backgroundColor: '#ffffff00',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
        marginLeft:'9%',
        marginRight:'9%'
    },
    error: {
        borderBottomColor: '#b30000',
        borderBottomWidth: 1
    }
})

export default Input;