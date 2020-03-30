import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { signInAction } from '../../../store/User/SignIn-Helper/actions';
import { SignInUser } from '../../../Modules/User/UserModule';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'email-validator';
import globalStyle from '../../../Styles/Global/globalStyle';
import signInStyle from '../../../Styles/signInStyle';
import AuthHeader from './AuthHeader'
import Input from '../../../components/global/Input';
const SignInScreen = ({ navigation }) => {

  const disptach = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [email_error, setemail_error] = useState('');
  const [password_error, setpassword_error] = useState('');




  const isLoading = useSelector((state) => {
    return state.signInReducer.SignInStarted
  })
  const token = useSelector((state) => {
    return state.signInReducer.token
  })
  
  const onSubmit = () => {

    let thereIsError = false;
    if (email == "") {
      setemail_error("Please Enter your Email ")

    }
    else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(email) === true) {
        setemail_error("")
      }
      else {
        setemail_error("Invalid Email")
      }
    }

    if (password == '') {
      setpassword_error("Please Enter your Password")
    }
    else {
      if (password.length < 8) {
        thereIsError = true;
        setpassword_error("Please Enter 8 characters or more ")
      }
      else {
        setpassword_error("")
      }
    }
  }


  return (
    <View>
      <View>

        <AuthHeader
          continueButtonPress={() => { onSubmit() }}
          signUpButtonPress={() => { navigation.navigate('SignUpScreen') }}
          signInButtonPress={() => { }}
          backButtonPress={() => { navigation.navigate('Home') }}
          active={1}
        >

          <Input
            placeholder="Email"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            value={email}
            autoCapitalize='none'
            onChangeText={() => setEmail()}
            style={globalStyle.oneLineInput}
            error={email_error != ''}
          />
          <View>
            {
                <Text style={globalStyle.texterror}>{email_error}</Text> 
            }
          </View>

          <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize='none'
            style={globalStyle.oneLineInput}
            error = {password_error != ''}
          />
          <View>
            {
                <Text style={globalStyle.texterror}>{password_error}</Text> 
            }
          </View>
        </AuthHeader>
      </View>

      <View>
        {
          isLoading === true ? <ActivityIndicator /> : null
        }
        {
          token ? <Text >{token}</Text> : null
        }
        <Button type='clear' title='FORGOT PASSWORD' titleStyle={signInStyle.buttonforget}
          onPress={() => { }}
        />


      </View>

    </View>

  );
}


export default SignInScreen;
