import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { signInAction } from '../../store/User/SignIn-Helper/actions';
import { SignInUser } from '../../Modules/User/UserModule';
import { useDispatch, useSelector } from 'react-redux';


const SignInScreen = ({ navigation }) => {

  const disptach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email_error, setemail_error] = useState('');
  const [password_error, setpassword_errorr] = useState('');


  const isLoading = useSelector((state) => {
    return state.userReducer.SignInStarted
  })
  const token = useSelector((state) => {
    return state.userReducer.token
  })
  console.log(isLoading);

  const validationemail = () => {
    if (email == "") {
      setemail_error("Please enter your Email ")

    }
    // else 
    // {
    // var validator = require("email-validator");
    // if(validator.validate(email))
    // {
    //   setemail_error("")
    // }
    else setemail_error("")
    //}  
  }
  const validationpassword = () => {
    console.log(password)

    if (password == '') {
      setpassword_errorr(" Please enter your Password")

    }
    else setpassword_errorr("")
  }
  return (

    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.backbutton} >
          <Text>
            <Icon name="arrowleft" style={styles.iconstyle} />
          </Text>
        </TouchableOpacity>



        <View style={styles.Rowbuttons}>

          <TouchableOpacity >
            <Text style={styles.textSignIn} onPress={() => navigation.navigate('SignInScreen')}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={styles.textSignUp} onPress={() => navigation.navigate('SignUpScreen')}>SIGN UP</Text>
          </TouchableOpacity>



        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            style={styles.input}
            value={email}
            autoCapitalize='none'
            onChangeText={(text) => setEmail(text)}
            onBlur={() => validationemail()}

          />
          <Text style={styles.texterror}>{email_error}</Text>

          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='#B9B3BD'
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.input}
            value={password}
            onChangeText={(text) => { setPassword(text) }}
            onBlur={(text) => validationpassword(text)}

          />
          <Text style={styles.texterror}>{password_error}</Text>

        </View>
        <View>

          <TouchableOpacity style={styles.Continuebutton}
            onPress={() => {
              disptach(signInAction(new SignInUser(email,
                password)))
            }
            } >
            <Text style={styles.TextCountine}>CONTINUE</Text>
          </TouchableOpacity>
          {
            isLoading === true ? <ActivityIndicator /> : null
          }
          {
            token ? <Text >{token}</Text> : null
          }
          <Button type='clear' title='FORGOT PASSWORD' titleStyle={styles.buttonforget}
            onPress={() => { }}
          />


        </View>

      </View>
    </View>

  );

}


const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#F1F0F2',
    //flex: 1
    height:'100%'
  },
  container: {
    backgroundColor: '#7598BA',
    //flex: 0.34,
    height:'33%',
    borderBottomLeftRadius: 75
  },
  Rowbuttons: {

    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '23%',
    marginRight: '20%',
    marginLeft: '20%',
    marginBottom: '5%'
  },
  textSignIn: {

    color: 'white',
    fontSize: 12,
    marginRight: '20%',
    fontFamily: 'Montserrat_SemiBold'


  },
  textSignUp: {
    color: '#C0CDDC',
    fontSize: 12,
    fontFamily: 'Montserrat_SemiBold'

  },
  form: {

    borderColor: '#d6d7da',
    backgroundColor: '#fff',
    height: '75%',
    width: '87%',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '5%',
    borderRadius: 35,
    justifyContent: 'center',

  },
  backbutton: {
    position: 'absolute',
    marginTop: '15%',
    marginLeft: '5%',
    alignItems: "center"
  },
  input: {

    height: '15%',
    backgroundColor: '#ffffff00',
    marginLeft: '10%',
    marginRight: '10%',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginBottom: '5%',
    marginTop: '2%',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Montserrat_Medium'


  },
  text: {
    color: '#DDDDDD',
    fontSize: 12,
    position: 'relative',
    alignItems: 'center',
  },
  Continuebutton: {
    backgroundColor: '#132641',
    height: '35%',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '3%',
    width: '87%',
    fontFamily: 'Montserrat_SemiBold'

  },
  TextCountine: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    justifyContent: "center",
    alignItems: "center"

  },
  buttonforget: {
    color: '#132641',
    fontSize: 12,
    fontWeight: '700',
    alignItems: 'center',
    fontFamily: 'Montserrat_SemiBold'

  },
  iconstyle: {
    color: '#fff',
    fontSize: 20
  },
  texterror: {
    color: 'red',
    fontSize: 14,
    position: 'relative',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 20,
    // fontFamily:'Montserrat_Medium'
  },

});
export default SignInScreen;
