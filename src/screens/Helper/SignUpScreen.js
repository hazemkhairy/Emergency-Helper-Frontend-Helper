import React, { useState,Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {SignUpUser} from '../../Modules/User/UserModule';
import {signUpAction} from '../../store/User/SignUp-Helper/actions';
import Icon from 'react-native-vector-icons/AntDesign';




const SignUp = ({navigation}) => {

 {
    //const disptach = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    
        return (

            //<KeyboardAvoidingView behavior='position'  style={styles.Container} enabled>
           
                <View style={styles.MainContainer}>
                    <View style={styles.Container}>
 
                        <View >
                            <Button type="clear"
                                style={{ position: 'absolute', marginTop: 30, marginLeft: 20 }}
                                icon={<AntDesign name="arrowleft" size={20} color="white" />}
                                onPress={() => this.props.navigation.navigate('Home')} />
                        </View> 

                        <View style={styles.line}>
                            <TouchableOpacity >
                                <Text style={styles.textSignIn} onPress={() => navigation.navigate('SignInScreen')}>SIGN IN</Text>
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <Text style={styles.textSignUp} >SIGN UP</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.form}>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputs}
                                placeholder="First Name"
                                value={firstName}
                                onChangeText={(text) => setFirstName(text)}
                            />
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputs}
                                placeholder="Last Name"
                                value={lastName}

                                onChangeText={(text) => setLastName(text)}
                            />
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputs}
                                placeholder="Phone Number"
                                keyboardType={"numeric"}
                                value={phoneNumber}
                                onChangeText={(text) => setPhoneNumber(text)}

                            />
                            <TextInput

                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputs}
                                placeholder="Email"
                                keyboardType={"email-address"}
                                value={email}
                                onChangeText={(text) => setEmail(text)}


                            />
                            <TextInput placeholder="Passwrod"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputs}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}



                            />
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputs}
                                placeholder="Confrim Password"
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={(text) => setConfirmPassword(text)}



                            />

                            <View style={{ paddingTop: 20 }}>
                                <Text style={styles.text1}> By clicking continue you are agreeing to our</Text>
                                <TouchableOpacity >
                                    <Text style={styles.text2}>Terms and Conditions</Text>

                                </TouchableOpacity>
                            </View>

                        </View>

                        <View >
                            <TouchableOpacity style={styles.Contunie}  >
                                <Text style={styles.ContunieText} onPress={() => navigation.navigate('SignUp2')}>CONTINUE</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
           
            // </KeyboardAvoidingView>

        )
    }
};

const styles = StyleSheet.create({

    MainContainer: {
        backgroundColor: '#F1F0F2',
        flex: 1,

    },

    Container: {
        backgroundColor: '#7598BA',
        flex: 0.35,
        borderBottomLeftRadius: 110,
    },

    inputs: {

        height: hp('5%'),
        backgroundColor: '#ffffff00',
        marginHorizontal: 25,
        marginVertical: 15,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginBottom: 20,
        marginTop: 5,
        fontSize: 16,
        fontWeight: '500'


    },
    form: {

        // borderRadius: 4,
        // borderWidth: 0.5,
        //borderColor: '#d6d7da',
        backgroundColor: '#fff',
        height: hp('70%'),
        marginLeft: 24,
        marginRight: 24,
        borderRadius: 35,
        justifyContent: 'center',

    },
    Contunie: {
        backgroundColor: '#132641',
        height: hp('7%'),
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 20,
        width: wp('90%'),
    },

    line: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        paddingBottom: 15,

        /* flexDirection: 'row',
         paddingBottom: 15,
         paddingTop: 50,
         justifyContent: 'center'*/
    },
    text1: {
        color: 'grey',
        marginLeft: 10,
        paddingTop: 20,
        fontSize: 17,
        marginRight: 10,
    },
    text2: {
        fontSize: 17,
        color: '#132641',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    ContunieText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700'

    },
    textSignIn: {
        color: 'white',
        fontSize: 12,
        color: '#C0CDDC',
        marginRight: 50

    },
    textSignUp: {
        color: 'white',
        fontSize: 12
    }

}


);

export default SignUp;

