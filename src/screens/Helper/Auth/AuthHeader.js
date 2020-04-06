import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthHeaderStyle from '../../../Styles/Helper/Auth/AuthHeaderStyle'
const AuthHeader = (props) => {

    return (
        <View >
            <View style={AuthHeaderStyle.whiteBackground}>
                <View style={AuthHeaderStyle.blueBackground}>
                </View>
            </View>

            <View style={AuthHeaderStyle.container}>

                <View >
                    <TouchableOpacity
                        onPress={() => { props.backButtonPress() }}
                        style={AuthHeaderStyle.backButton} >
                        <Text>
                            <Icon name="arrowleft" style={AuthHeaderStyle.backIcon} />
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
                    {props.children}
                </View>
                <View >
                    <TouchableOpacity style={AuthHeaderStyle.continueButton}
                        onPress={() => { props.continueButtonPress() }}
                    >
                        <Text style={AuthHeaderStyle.continueText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default AuthHeader;