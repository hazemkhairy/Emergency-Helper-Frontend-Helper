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
import globalStyle from '../../Styles/Global/globalStyle';
import signUpStyle from '../../Styles/signUpStyle';


const SignUp2 = ({ navigation }) => {

    return (
        <View style={globalStyle.white_background}>
        <View style={globalStyle.blue_background}>

                <View>
                <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={globalStyle.backbutton} >
                        <Text>
                            <Icon name="arrowleft" style={globalStyle.iconstyle} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.SignIn_SignUp}>
                    <TouchableOpacity >
                        <Text style={signUpStyle.signInText}   onPress={() => navigation.navigate('SignInScreen')} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={signUpStyle.signUptext}  >SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <View style={signUpStyle.form}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signUpStyle.inputs}
                        placeholder="Front ID "
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signUpStyle.inputs}
                        placeholder="Back ID"
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signUpStyle.inputs}
                        placeholder="Certificates"
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signUpStyle.inputs}
                        placeholder="Personal Photo"
                    />

                    <TextInput placeholder="Categories"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signUpStyle.inputs}

                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={signUpStyle.inputs}
                        placeholder="Skills"

                    />

                    <View style={{ paddingTop: 20 }}>
                        <Text style={signUpStyle.ClickingText}>  By clicking continue you are confirming  </Text>
                        <Text style={signUpStyle.ClickingText}>  all details are correct </Text>
                    </View>

                </View>

                <View >
                    <TouchableOpacity style={globalStyle.Continuebutton}
                     onPress={() => {
                        disptach(signup(new SignInUser(email,
                            password)))
                    }
                    }>
                        <Text style={globalStyle.continueText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};

export default SignUp2;

