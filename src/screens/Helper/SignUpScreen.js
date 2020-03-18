import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import globalStyle from '../../Styles/Global/globalStyle';
import signUpStyle from '../../Styles/signUpStyle';



const SignUp = ({ navigation }) => {


    //const disptach = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstname_error, setFirstname_error] = useState('');
    const [lastname_error, setLastname_error] = useState('');
    const [phonenumber_error, setPhonenumber_error] = useState('');
    const [email_error, setemail_error] = useState('');
    const [password_error, setpassword_error] = useState('');
    const [confirmpassword_error, setConfirmPassword_error] = useState('');

    const onSubmit = () => {
        if (firstName == "") {
            setFirstname_error("Please Enter your First Name ")

        }

        else {
            const valid = /^[A-Za-z]+$/;
            if (valid.test(firstName) === true) {
                setFirstname_error("")
            }
            else {
                setFirstname_error("Please Enter Valid Name without Numbers")
            }
        }

        if (lastName == '') {
            setLastname_error("Please Enter your Last Name")
        }
        else setLastname_error("")
        if (phoneNumber == "") {
            setPhonenumber_error("Please Enter your Phone number ")
        }
        else {
            var numbers = /^[0-9\b]+$/;
            if (phoneNumber.length != 12) {
                setPhonenumber_error("Please Enter valid mobile number")
            }
            else {
                if (numbers.test(phonenumber_error) === true) {

                    setPhonenumber_error("")
                }
                else
                    setPhonenumber_error("Please Enter Numbers only")
            }
        }

        if (email == '') {
            setemail_error("Please Enter your Email")
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
            if (password.length <= 8) {
                setpassword_error("Password must be 8 characters or more")
            }
            else { setpassword_error("") }
        }

        if (confirmPassword == '') {
            setConfirmPassword_error("Please Confirm your Password")
        }
        else {
            if (password != confirmPassword) {
                setConfirmPassword_error("Password doesn't match")
            }
            else
                setConfirmPassword_error("")
        }
    }





    return (

        <KeyboardAvoidingView style={globalStyle.white_background}>
            <View style={globalStyle.blue_background}>
            </View>
            <View style={signUpStyle.container}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={globalStyle.backbutton} >
                    <Text>
                        <Icon name="arrowleft" style={globalStyle.iconstyle} />
                    </Text>
                </TouchableOpacity>

                <View style={globalStyle.SignIn_SignUp}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignInScreen')}
                    >
                        <Text style={signUpStyle.signInText} >SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Text style={signUpStyle.signUptext} >SIGN UP</Text>
                    </TouchableOpacity>

                </View>

                <View style={signUpStyle.form}>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                        style={[signUpStyle.inputs, !firstname_error == '' ? globalStyle.error : null]}
                    />
                    <Text style={globalStyle.texterror}>{firstname_error}</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Last Name"
                        value={lastName}
                        style={[signUpStyle.inputs, !lastname_error == '' ? globalStyle.error : null]}
                        onChangeText={(text) => setLastName(text)}

                    />
                    <Text style={globalStyle.texterror}>{lastname_error}</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Phone Number"
                        keyboardType={"numeric"}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        style={[signUpStyle.inputs, !phonenumber_error == '' ? globalStyle.error : null]}


                    />
                    <Text style={globalStyle.texterror}>{phonenumber_error}</Text>

                    <TextInput

                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Email"
                        keyboardType={"email-address"}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={[signUpStyle.inputs, !email_error == '' ? globalStyle.error : null]}



                    />
                    <Text style={globalStyle.texterror}>{email_error}</Text>

                    <TextInput placeholder="Passwrod"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={[signUpStyle.inputs, !password_error == '' ? globalStyle.error : null]}


                    />
                    <Text style={globalStyle.texterror}>{password_error}</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Confrim Password"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        style={[signUpStyle.inputs, !confirmpassword_error == '' ? globalStyle.error : null]}

                    />
                    <Text style={globalStyle.texterror}>{confirmpassword_error}</Text>


                    <View >
                        <Text style={signUpStyle.ClickingText}>By clicking continue you are agreeing to our</Text>

                        <TouchableOpacity >
                            <Text style={signUpStyle.termsAndConditionsText}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View >
                    <TouchableOpacity style={globalStyle.Continuebutton}
                        onPress={() => {
                            onSubmit()
                            //navigation.navigate('SignUp2')


                        }
                        }
                    >
                        <Text style={globalStyle.continueText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>

        // </KeyboardAvoidingView>

    )

};

export default SignUp;

