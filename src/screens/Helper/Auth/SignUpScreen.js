import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyle from '../../../Styles/Global/globalStyle';
import signUpStyle from '../../../Styles/signUpStyle';
import { useSelector, useDispatch } from 'react-redux';
import { SaveSignUpDataAction, ClearSignUpAction } from '../../../store/User/SignUp-Helper/actions';
import AuthHeader from './AuthHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Input from '../../../components/global/Input';
const SignUp = ({ navigation }) => {

    const disptach = useDispatch();

    const user = useSelector((store) => { return store.signUpReducer.user })

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [confirmPassword, setConfirmPassword] = useState(user.confirmPassword);

    const [firstname_error, setFirstname_error] = useState(' ');
    const [lastname_error, setLastname_error] = useState(' ');
    const [phonenumber_error, setPhonenumber_error] = useState(' ');
    const [email_error, setemail_error] = useState(' ');
    const [password_error, setpassword_error] = useState(' ');
    const [confirmpassword_error, setConfirmPassword_error] = useState(' ');

    const onSubmit = () => {
        let thereIsError = false;
        if (!firstName || firstName == "") {
            setFirstname_error("Please Enter your First Name ")
            thereIsError = true;
        }

        else {
            const valid = /^[A-Za-z]+$/;
            if (valid.test(firstName) === true) {
                setFirstname_error(" ")
            }
            else {
                thereIsError = true;
                setFirstname_error("Please Enter Valid Name without Numbers")
            }
        }

        if (lastName == '') {
            thereIsError = true;
            setLastname_error("Please Enter your Last Name")
        }
        else {
            const valid = /^[A-Za-z]+$/;
            if (valid.test(lastName) === true) {
                setLastname_error(" ")
            }
            else {
                thereIsError = true;
                setLastname_error("Please Enter Valid Name without Numbers")
            }
        }
        if (!phoneNumber || phoneNumber == "") {
            thereIsError = true;
            setPhonenumber_error("Please Enter your Phone Number ")
        }
        else if (phoneNumber.length < 6 || phoneNumber.length > 15) {
            thereIsError = true;
            setPhonenumber_error("Number must be between[6-15]")
        }
        else {
            var numbers = /^[0-9\b]+$/;
            if (numbers.test(phoneNumber) === true) {
                setPhonenumber_error(" ")
            }
            else {

                thereIsError = true;
                setPhonenumber_error("Please Enter Numbers Only ")
            }

        }

        if (!email || email == '') {
            thereIsError = true;
            setemail_error("Please Enter your Email")
        }
        else {
            const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (valid.test(email) === true) {
                setemail_error(" ")
            }
            else {
                thereIsError = true;
                setemail_error("Invalid Email")
            }

        }
        if (!password || password == '') {
            thereIsError = true;
            setpassword_error("Please Enter your Password")
        }
        else {
            if (password.length < 8) {
                thereIsError = true;
                setpassword_error("Must be 8 characters or more")
            }
            else { setpassword_error(" ") }
        }

        if (!confirmPassword || confirmPassword == '') {
            thereIsError = true;
            setConfirmPassword_error("Please Confirm your Password")
        }
        else {
            if (password != confirmPassword) {
                thereIsError = true;
                setConfirmPassword_error("Password doesn't match")
            }
            else
                setConfirmPassword_error(" ")
        }
        return thereIsError
    }

    const submit = () => {
        if (!onSubmit()) {
            disptach(SaveSignUpDataAction({ ...user, firstName, lastName, email, password, phoneNumber, confirmPassword }))
            navigation.navigate('SignUp2')
        }

    }



    return (
        <KeyboardAwareScrollView>
        <AuthHeader
            continueButtonPress={() => { submit() }}
            signUpButtonPress={() => { }}
            signInButtonPress={() => { navigation.navigate('SignInScreen'), disptach(ClearSignUpAction()) }}
            backButtonPress={() => { navigation.navigate('Home'), disptach(ClearSignUpAction()) }}
            active={2}
            signin={2}
        >
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                style={signUpStyle.firstnameinput}
                error={firstname_error != ' '}
            />

            <Text style={signUpStyle.textError}>{firstname_error}</Text>

            <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                style={signUpStyle.input}
                error={lastname_error != ' '}
            />
            <Text style={signUpStyle.textError}>{lastname_error}</Text>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Phone Number"
                keyboardType={"numeric"}
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
                style={signUpStyle.input}
                error={phonenumber_error != ' '}
            />

            <Text style={signUpStyle.textError}>{phonenumber_error}</Text>

            <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                keyboardType={"email-address"}
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={signUpStyle.input}
                error={email_error != ' '}
            />
            <Text style={signUpStyle.textError}>{email_error}</Text>


            <Input
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={signUpStyle.input}
                error={password_error != ' '}
            />
            <Text style={signUpStyle.textError}>{password_error}</Text>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Confrim Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                style={signUpStyle.input}
                error={confirmpassword_error != ' '}
            />

            <Text style={signUpStyle.textError}>{confirmpassword_error}</Text>


            <View >
                <Text style={signUpStyle.ClickingText}>By clicking continue you are agreeing to our</Text>

                <TouchableOpacity >
                    <Text style={signUpStyle.termsAndConditionsText}>Terms and Conditions</Text>
                </TouchableOpacity>
            </View>

        </AuthHeader>

        </KeyboardAwareScrollView>

    )

};

export default SignUp;

