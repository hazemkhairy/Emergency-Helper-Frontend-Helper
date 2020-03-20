import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import globalStyle from '../../Styles/Global/globalStyle';
import signUpStyle from '../../Styles/signUpStyle';
import Input from '../../components/global/Input';
import PhotoPicker from '../../components/global/PhotoPicker';
import { useDispatch, useSelector } from 'react-redux';
import { SaveSignUpDataAction } from '../../store/User/SignUp-Helper/actions';




const SignUp2 = ({ navigation }) => {


    const disptach = useDispatch();

    const user = useSelector((store) => { return store.signUpReducer.user })

    const [frontID, setFrontID] = useState(user.frontID);
    const [backID, setBackID] = useState(user.backID);
    const [certificates, setCertificates] = useState(user.certificates);
    const [personalPhoto, setPersonalPhoto] = useState(user.personalPhoto);
    const [categories, setCategories] = useState(user.categories);
    const [skills, setSkills] = useState(user.skills);

    const [errorFrontID, setErrorFrontID] = useState(null);
    const [errorBackID, setErrorBackID] = useState(null);
    const [errorCertificates, setErrorCertificates] = useState(null);
    const [errorPersonalPhoto, setErrorPersonalPhoto] = useState(null);
    const [errorCategories, setErrorCategories] = useState(null);
    const [errorSkills, setErrorSkills] = useState(null);

    const test = (fieldName, setter, word) => {
        
        if (!fieldName || fieldName=='') {
            setter(`Please Select ${word}`);
            return false
        }
        setter(null)
        return true;
    }
    const dataValid = () => {
        //categories ?
        if (
            test(frontID.name, setErrorFrontID, 'Front Id photo') &
            test(backID.name, setErrorBackID, 'Back Id photo') &
            test(certificates.name, setErrorCertificates, 'Certificate') &
            test(personalPhoto.name, setErrorPersonalPhoto, 'Certificate') &
            test(categories, setErrorCategories, 'Category') &
            test(skills, setErrorSkills, 'Skill')
        )
            return false;
        return true;
    }
    const saveData = () => {
        disptach(SaveSignUpDataAction({ ...user, frontID, backID, certificates, personalPhoto, categories, skills }))
    }
    const submit = () => {
        if (dataValid()) {
            navigation.navigate('SignUnScreen')
        }
    }

    const showError = (errorField) => {
        return errorField ? <Text style={globalStyle.texterror}>{errorField}</Text> : null
    }
    return (

        <KeyboardAvoidingView style={globalStyle.white_background}>
            <View style={globalStyle.blue_background}>
            </View>
            <View style={signUpStyle.container}>

                <TouchableOpacity
                    onPress={() => { saveData(), navigation.navigate('SignUpScreen') }}
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

                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker}
                        placeholder="Front ID"
                        value={frontID}
                        setValue={setFrontID}
                    />
                    {showError(errorFrontID)}
                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker}
                        placeholder="Back Id"
                        value={backID}
                        setValue={setBackID}
                    />
                    {showError(errorBackID)}
                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker}
                        placeholder="Certificate"
                        value={certificates}
                        setValue={setCertificates}
                    />
                    {showError(errorCertificates)}
                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker}
                        placeholder="Personal Photo"
                        value={personalPhoto}
                        setValue={setPersonalPhoto}
                    />
                    {showError(errorPersonalPhoto)}
                    <Input
                        value={categories}
                        onChangeText={setCategories}
                        placeholder='Categories'
                        style={signUpStyle.globalInput}
                    />
                    {showError(errorCategories)}
                    <Input
                        value={skills}
                        onChangeText={setSkills}
                        placeholder='Skills'
                        style={signUpStyle.globalInput}
                    />
                    {showError(errorSkills)}


                    <View >
                        <Text style={signUpStyle.ClickingText}>  By clicking continue you are confirming  </Text>
                        <Text style={signUpStyle.ClickingText}>  all details are correct </Text>
                    </View>

                </View>

                <View >
                    <TouchableOpacity style={globalStyle.Continuebutton}
                        onPress={submit}
                    >
                        <Text style={globalStyle.continueText}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
};

export default SignUp2;


