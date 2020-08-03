import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import normalize from 'react-native-normalize';

const ScreenHeader = (props) => {
    let HeaderText = props.headerText;
    let Name = props.name
    let containerStyle = { ...styles.container, ...props.style };
    return (
        <View style={containerStyle}>
            <View style={styles.Header} >
                <Text style={styles.text}>
                    {HeaderText}
                </Text>
                <FontAwesome style={styles.Icon} name={Name} size={30}></FontAwesome>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#7598BA',
        height: Dimensions.get('window').height * 0.28,
        borderBottomLeftRadius: 70
    },
    Header: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '25%',

    },
    text: {
        color: 'white',
        fontSize: normalize(40) *
            Math.min(
                Dimensions.get("window").height / 900.0,
                Dimensions.get("window").width / 500.0
            ),
        marginLeft: '5%',
        fontFamily: 'Montserrat_Bold'
    },

    Icon: {
        color: '#FFFFFF',
        marginTop: '3%'
    }
});

export default ScreenHeader;