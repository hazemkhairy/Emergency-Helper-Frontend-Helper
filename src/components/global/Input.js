import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const Input = (props) => {

    return <View>
        <TextInput

            value={props.value}
            onChangeText={props.onChangeText}
            {...props}
            style={
                
                props.style ? { ...styles.input, ...props.style } : styles.input
            }
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
})

export default Input;