import React, { useState, Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpUser } from '../../Modules/User/UserModule';
import { signUpAction } from '../../store/User/SignUp-Helper/actions';
import Icon from 'react-native-vector-icons/AntDesign';
//import { TouchableOpacity } from 'react-native-gesture-handler';




const SignUp = ({ navigation }) => {

    {
        //const disptach = useDispatch();
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');



        return (

            <View style={styles.MainContainer}>
                <View style={styles.Container}>

                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.backbutton} >
                        <Text>
                            <Icon name="arrowleft" style={styles.iconstyle} />
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.RowButton}>
                        <TouchableOpacity  onPress={() => navigation.navigate('SignInScreen')}>
                            <Text style={styles.textSignIn} >SIGN IN</Text>
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
                            <Text style={styles.text1}>By clicking continue you are agreeing to our</Text>

                            <TouchableOpacity >
                                <Text style={styles.text2}>Terms and Conditions</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View >
                        <TouchableOpacity style={styles.ButtonContunie} onPress={() => navigation.navigate('SignUp2')}  >
                            <Text style={styles.ContunieText} >CONTINUE</Text>
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
        flex: 0.34,
        borderBottomLeftRadius: 75,
    },

    inputs: {

        height: '9%',
        backgroundColor: '#ffffff00',
        marginLeft: '7%',
        marginRight: '7%',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginBottom: '2%',
        marginTop: '2%',
        fontSize: 16,
        fontWeight: '500',
        fontFamily:'Montserrat_Medium'




    },
    form: {

        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        height: '200%',
        width: '87%',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '3%',
        borderRadius: 35,
        justifyContent: 'center'

    },
    ButtonContunie: {
        backgroundColor: '#132641',
        height: '37%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '7%',
        marginRight: '7%',
        marginTop: '3%',
        width: '87%',
    },

    RowButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20%',
        marginRight: '20%',
        marginLeft: '20%',
        marginBottom: '5%'

    },
    backbutton: {
        position: 'absolute',
        marginTop: 60,
        marginLeft: 20,
        alignItems: "center"
    },
    text1: {
        color: 'grey',
        marginLeft: 10,
        paddingTop: 15,
        fontSize: 14,
        marginRight: 10,
        textAlign:'center',
        fontFamily:'Montserrat'

        
    },
    text2: {
        fontSize: 14,
        color: '#132641',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily:'Montserrat'


    },
    ContunieText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        justifyContent:"center",
        alignItems:"center",
        fontFamily:'Montserrat_SemiBold'


    },
    textSignIn: {
        color: 'white',
        fontSize: 12,
        color: '#C0CDDC',
        marginRight: 50,
        fontFamily:'Montserrat_SemiBold'


    },
    textSignUp: {
        color: 'white',
        fontSize: 12,
        fontFamily:'Montserrat_SemiBold'

    },
    iconstyle: {
        color: '#fff',
        fontSize: 20
    },

}


);

export default SignUp;

