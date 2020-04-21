import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import image from '../images/image.png';


const First = ({ navigation }) => {
    return (
        <ImageBackground source={image} style={styles.Backgroundstyle} >

            <View style={styles.main}>
                <Text style={styles.text1}>
                    Welcome
                </Text>
                <Text style={styles.text}>
                    to Lift Up
                </Text>
                <Text style={styles.text2}>
                    The best way to find quick help.
                </Text>
                <Text style={styles.text2}>
                    Let’s get started!
                </Text>
            </View>

            <View style={styles.LoginBackground}>
                <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('SignInScreen')}>
                    <Text style={styles.loginTextStyle}>LOG IN</Text>
                </TouchableOpacity>
                {/* </View> */}
                {/* <View style={styles.buttonbackground2}> */}
                <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.SignUpTextStyle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    Backgroundstyle: {
        flex: 1,
        resizeMode: 'stretch',
        height: '93%',
        backgroundColor: '#241332'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 65
    },
    text: {
        color: '#FFFFFF',
        fontSize: 32,
        marginBottom: '3%',
        fontFamily: 'Montserrat_Bold'
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 32,
        fontFamily: 'Montserrat_Bold'
    },
    text2: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '200',
        fontFamily: 'Montserrat_Medium'


    },
    loginTextStyle: {
        color: 'white',
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat_SemiBold',

    },
    LoginButton: {
        backgroundColor: '#7598BA',
        height: '48%',
        borderTopLeftRadius: 120,
        justifyContent: "center",
        alignItems: 'center',

    },
    SignUpButton: {
        backgroundColor: '#132641',
        height: '53%',
        borderTopLeftRadius: 120,
        justifyContent: "center",
        alignItems: 'center',
        overflow: 'hidden'
    },
    SignUpTextStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat_SemiBold',
        marginBottom: 10

    },
    LoginBackground: {
        borderTopLeftRadius: 90,
        backgroundColor: '#7598BA',
        height: '20%',
        overflow: 'hidden'


    },
    // buttonbackground2: {
    //     backgroundColor: '#7598BA',
    //     height: '10%'
    // }
});

export default First;