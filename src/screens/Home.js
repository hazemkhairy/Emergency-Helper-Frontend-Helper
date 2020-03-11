import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import image from '../images/image.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get('window');
const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

const First = ({ navigation }) => {
    return (
        <ImageBackground
            source={image}
            style={{ flex: 1, resizeMode: 'stretch', height: hp('95%'), backgroundColor: '#241332' }} >
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
            <View style={{ borderTopLeftRadius: 60, backgroundColor: '#7598BA', height: hp("10%") }}>
                <Button  title="LOG IN" titleStyle={{ color: 'white', fontSize: 14, fontWeight: '500' }} onPress={() => navigation.navigate('SignInScreen')}  type="clear" >

                </Button>

            </View>
            <View style={{ backgroundColor: '#7598BA', height: hp('10%') }}>
                <Button style={styles.button2} title="SIGN UP" titleStyle={{ color: 'white', fontSize: 14, fontWeight: '500' }} type="clear" onPress={() => navigation.navigate('SignUpScreen')} />
            </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
},
text: {
    color: 'white',
    fontSize: 32,
    marginBottom: 20,
    // fontFamily: 'light',
    fontWeight: 'bold',
},
text1: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    //fontFamily: 'Montserrat-Bold'
},
text2: {
    color: 'white',
    fontSize: 12,
    fontWeight: '200',
    // fontFamily: 'light'
},
    button1: {
        backgroundColor: '#7598BA',
        height: '50s%',
        borderTopLeftRadius: 120,
        justifyContent: 'center',
    },
    button2: {
        backgroundColor: '#132641',
        height: '100%',

        borderTopLeftRadius: 60,
        justifyContent: 'center',

    }
});

   
export default First;