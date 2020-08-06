import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import normalize from 'react-native-normalize';

const MainHeader = (props) => {
    let HeaderText = props.headerText;
    let Name = props.name
    let containerStyle = { ...styles.container, ...props.style };
    return (
        <View style={containerStyle}>
            <View style={styles.Header} >
                <FontAwesome style={styles.Icon} name={Name} size={30}></FontAwesome>
                <Text style={styles.text}>
                    {HeaderText}
                </Text>

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',


    },
    text: {
        color: 'white',
        fontSize: normalize(40) *
            Math.min(
                Dimensions.get("window").height / 820.0,
                Dimensions.get("window").width / 390.0
            ),
        marginLeft: '5%',
        fontFamily: 'Montserrat_Bold', marginTop: normalize(100),

    },

    Icon: {
        color: '#FFFFFF',
        //  marginTop: normalize(30),
        //  marginRight:normalize(10)
        marginTop:Dimensions.get("window").height>820? '32%':Dimensions.get("window").height>720?'29%':'28%',
    }
});

export default MainHeader;