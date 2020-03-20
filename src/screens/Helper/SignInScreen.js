import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { signInAction } from '../../store/User/SignIn-Helper/actions';
import { SignInUser } from '../../Modules/User/UserModule';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from 'email-validator';
import globalStyle from '../../Styles/Global/globalStyle';
import signInStyle from '../../Styles/signInStyle';

const SignInScreen = ({ navigation }) => {

  const disptach = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email_error, setemail_error] = useState('');
  const [password_error, setpassword_error] = useState('');




  const isLoading = useSelector((state) => {
    return state.userReducer.SignInStarted
  })
  const token = useSelector((state) => {
    return state.userReducer.token
  })
  console.log(isLoading);

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
      setpassword_error(" Please Enter your Password")
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

    <View style={globalStyle.white_background}>
      <View style={globalStyle.blue_background}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={globalStyle.backbutton} >
          <Text>
            <Icon name="arrowleft" style={globalStyle.iconstyle} />
          </Text>
        </TouchableOpacity>



        <View style={globalStyle.SignIn_SignUp}>

          <TouchableOpacity >
            <Text style={signInStyle.signInText} onPress={() => navigation.navigate('SignInScreen')}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={signInStyle.signUpText} onPress={() => navigation.navigate('SignUpScreen')}>SIGN UP</Text>
          </TouchableOpacity>



        </View>

        <View style={signInStyle.form}>
          <TextInput
            placeholder="Email"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            style={[signInStyle.textInputStyle, !email_error == '' ? globalStyle.error : null]}
            value={email}
            autoCapitalize='none'
            onChangeText={() => setEmail()}


          />
          <Text style={globalStyle.texterror}>{email_error}</Text>

          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize='none'
            style={[signInStyle.textInputStyle, !password_error == '' ? globalStyle.error : null]}
            value={password}
            onChangeText={() => setPassword()}

          />
          <Text style={globalStyle.texterror}>{password_error}</Text>

        </View>
        <View>

          <TouchableOpacity style={globalStyle.Continuebutton}
            onPress={() => {
              disptach(signInAction(new SignInUser(email, password)))
              onSubmit()
            }
            } >
            <Text style={globalStyle.continueText}>CONTINUE</Text>
          </TouchableOpacity>
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
    </View>

  );
}


export default SignInScreen;
