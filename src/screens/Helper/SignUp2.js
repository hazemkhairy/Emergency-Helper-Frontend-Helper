import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import * as Font from "expo-font";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { signUpAction } from '../../store/User/SignUp-Helper/actions';

const SignUp2 = ({ navigation }) => {

    return (
        <View style={styles.MainContainer}>
            <View style={styles.Container}>

                <View>
                <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.backbutton} >
                        <Text>
                            <Icon name="arrowleft" style={styles.iconstyle} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <TouchableOpacity >
                        <Text style={styles.textSignIn}   onPress={() => navigation.navigate('SignInScreen')} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.textSignUp}  >SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.form}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Front ID "
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Back ID"
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Certificates"
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Personal Photo"
                    />

                    <TextInput placeholder="Categories"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}

                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Skills"

                    />

                    <View style={{ paddingTop: 20 }}>
                        <Text style={styles.text1}>  By clicking continue you are confirming  </Text>
                        <Text style={styles.text2}>  all details are correct </Text>
                    </View>

                </View>

                <View >
                    <TouchableOpacity style={styles.Contunie} onPress={() => {
                        disptach(signup(new SignInUser(email,
                            password)))
                    }
                    }>
                        <Text style={styles.ContunieText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    MainContainer: {
        backgroundColor: '#F1F0F2',
        flex: 1
    },
    Container: {
        backgroundColor: '#7598BA',
        flex: 0.34,
        borderBottomLeftRadius: 110

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
        fontWeight: '500'

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
        justifyContent: 'center',



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
    },
    text1: {
        color: 'grey',
        marginLeft: 10,
        paddingTop: 20,
        fontSize: 18,
        marginRight: 10,
        textAlign:"center"
        
    },
    text2: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center',
    },
    Contunie: {
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
    ContunieText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        

    },
    Button: {
        backgroundColor: '#7598BA',
        flexDirection: 'row',
        marginLeft: 50,
        marginRight: 50

    },
    line: {
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
        marginLeft: 30,
        alignItems: "center"
    },
    iconstyle: {
        color: '#fff',
        fontSize: 20
    },


}


);

export default SignUp2;

