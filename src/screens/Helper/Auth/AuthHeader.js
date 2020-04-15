import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import signInStyle from '../../../Styles/signInStyle';
import signUpStyle from '../../../Styles/signUpStyle';
import AuthHeaderStyle from '../../../Styles/Helper/Auth/AuthHeaderStyle'
import globalStyle from '../../../Styles/Global/globalStyle';
const AuthHeader = (props) => {

    return (
        <View >
            <View style={globalStyle.whiteBackground}>
                <View style={globalStyle.blueBackground}>
                </View>
            </View>

            <View style={globalStyle.container}>

                <View >
                    <TouchableOpacity
                        onPress={() => { props.backButtonPress() }}
                        style={globalStyle.backButton} >
                        <Text>
                            <Icon name="arrowleft" style={globalStyle.backIcon} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={AuthHeaderStyle.signInUpContainer}>
                    <TouchableOpacity
                        onPress={() => { props.signInButtonPress() }}
                    >
                        <Text style={props.active == 1 ? AuthHeaderStyle.activeText : AuthHeaderStyle.inActiveText} >SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { props.signUpButtonPress() }}
                    >
                        <Text style={props.active == 2 ? AuthHeaderStyle.activeText : AuthHeaderStyle.inActiveText} >SIGN UP</Text>
                    </TouchableOpacity>

                </View>
                <View style={AuthHeaderStyle.form} >
                    <View
                    style={props.signin==1? signInStyle.form: signUpStyle.form} >
                    {props.children}
                    </View>
                </View>
                <View >
                    <TouchableOpacity style={globalStyle.continueButton}
                        onPress={() => { props.continueButtonPress() }}
                    >
                        <Text style={globalStyle.continueText}>{props.signin==1?'SIGN IN':props.signin==0?'SIGN UP':'COUNTINUE'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default AuthHeader;