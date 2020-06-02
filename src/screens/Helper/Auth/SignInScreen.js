import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { signInAction, clearSignInStateAction } from '../../../store/User/SignIn-Helper/actions';
import { SignInUser } from '../../../Modules/User/UserModule';
import { useDispatch, useSelector } from 'react-redux';
import signInStyle from '../../../Styles/signInStyle';
import AuthHeader from './AuthHeader'
import Input from '../../../components/global/Input';
import ErrorModal from '../../../components/global/ErrorModal'
import LoadingModal from '../../../components/global/LoadingModal'
import SuccessModal from '../../../components/global/SuccessModal'

const SignInScreen = ({ navigation }) => {

  const disptach = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [email_error, setemail_error] = useState(' ');
  const [password_error, setpassword_error] = useState(' ');


  const requestState = useSelector((state) => {
    return {
      success: state.signInReducer.success,
      error: state.signInReducer.error,
      pending: state.signInReducer.signInStarted,
      errorMessage: state.signInReducer.errorMessage
    }
  }
  )
  const token = useSelector((state) => {
    return state.signInReducer.token
  })
  const validInput = () => {
    let thereIsNoError = true;
    if (email == "") {
      setemail_error("Please Enter your Email ")
      thereIsNoError = false;
    }
    else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(email) === true) {
        setemail_error(" ")
      }
      else {
        thereIsNoError = false
        setemail_error("Invalid Email")
      }
    }

    if (password == '') {
      thereIsNoError = false
      setpassword_error("Please Enter your Password")
    }
    else {
      if (password.length < 8) {
        thereIsNoError = false;
        setpassword_error("Invalid Password")
      }
      else {
        setpassword_error(" ")
      }
    }
    return thereIsNoError;
  }
  const onSubmit = () => {

    if (validInput()) {
      disptach(signInAction(new SignInUser(email, password)));
    }
  }


  return (
    <View>
      <View>
        <SuccessModal modalVisible={requestState.success} closeModal={() => { disptach(clearSignInStateAction()), navigation.navigate('MainScreen') }} message="Sign In successfully" />
        <ErrorModal modalVisible={requestState.error} closeModal={() => { disptach(clearSignInStateAction()) }} message={requestState.errorMessage ? requestState.errorMessage : 'Wrong Email or Password'} />
        <LoadingModal modalVisible={requestState.pending} />
        <AuthHeader
          continueButtonPress={() => { onSubmit() }}
          signUpButtonPress={() => { navigation.navigate('SignUpScreen') }}
          signInButtonPress={() => { }}
          backButtonPress={() => { navigation.navigate('Home') }}
          active={1}
          signin={1}
        >

          <Input
            placeholder="Email"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            value={email}
            autoCapitalize='none'
            onChangeText={(text) => setEmail(text)}
            style={signInStyle.emailinput}
            error={email_error != ' '}
            autoFocus={true}
          />
          <View>
            {
              <Text style={signInStyle.textError}>{email_error}</Text>
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
            style={signInStyle.input}
            error={password_error != ' '}
            autoFocus={true}
          />
          <View>
            {
              <Text style={signInStyle.textError}>{password_error}</Text>
            }
          </View>


        </AuthHeader>
        <View style={signInStyle.forgetPasswordView}>
          <Button type='clear' title='FORGOT PASSWORD' titleStyle={signInStyle.buttonforget}
            onPress={() => { }}
          />
        </View>
      </View>


    </View>

  );
}


export default SignInScreen;
