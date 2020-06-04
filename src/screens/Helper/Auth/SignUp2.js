import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyle from '../../../Styles/Global/globalStyle';
import signUpStyle from '../../../Styles/signUpStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../../../components/global/Input';
import PhotoPicker from '../../../components/global/PhotoPicker';
import RNPickerSelect from 'react-native-picker-select';
import AuthHeader from './AuthHeader'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import ErrorModal from '../../../components/global/ErrorModal'
import LoadingModal from '../../../components/global/LoadingModal'
import SuccessModal from '../../../components/global/SuccessModal'
import { SaveSignUpDataAction, signUpAction, ClearSignUpStateAction, ClearSignUpAction } from '../../../store/User/SignUp-Helper/actions';

import { getAllCategories } from '../../../utils/categories'

const SignUp2 = ({ navigation }) => {

    const disptach = useDispatch();

    const user = useSelector((store) => { return store.signUpReducer.user })
    const requestState = useSelector(
        (store) => {
            return {
                pending: store.signUpReducer.requestState.sendingSignUpRequest,
                error: store.signUpReducer.requestState.errorSignUpRequest,
                success: store.signUpReducer.requestState.successSignUpRequest,
                errorMessage: store.signUpReducer.requestState.errorMessage
            }
        })

    const [frontID, setFrontID] = useState(user.frontID);
    const [backID, setBackID] = useState(user.backID);
    const [certificates, setCertificates] = useState(user.certificates);
    const [personalPhoto, setPersonalPhoto] = useState(user.personalPhoto);
    const [categories, setCategories] = useState(user.categories);
    const [skills, setSkills] = useState(user.skills);

    const [allCategories, setAllCategories] = useState([]);

    const [errorFrontID, setErrorFrontID] = useState(' ');
    const [errorBackID, setErrorBackID] = useState(' ');
    const [errorCertificates, setErrorCertificates] = useState(' ');
    const [errorPersonalPhoto, setErrorPersonalPhoto] = useState(' ');
    const [errorCategories, setErrorCategories] = useState(' ');
    const [errorSkills, setErrorSkills] = useState(' ');

    const test = (fieldName, setter, word) => {

        if (!fieldName || fieldName == '') {
            setter(`Please Select ${word}`);
            return false
        }
        setter(' ')
        return true;
    }
    const dataValid = () => {
        //categories ?
        let valid = true;
        if (!test(frontID.name, setErrorFrontID, 'Front ID photo'))
            valid = false;
        if (!test(backID.name, setErrorBackID, 'Back ID photo'))
            valid = false;
        if (!test(certificates.name, setErrorCertificates, 'Certificate'))
            valid = false;
        if (!test(personalPhoto.name, setErrorPersonalPhoto, 'Personal Photo'))
            valid = false;
        if (!test(categories, setErrorCategories, 'Category'))
            valid = false;
        if (!test(skills, setErrorSkills, 'Skill'))
            valid = false;
        return valid;
    }

    useEffect(
        () => {
            saveData()
        },
        [frontID, backID, certificates, personalPhoto, categories, skills]
    )
    useEffect(
        () => {
            getAllCategories().then(
                (result) => {
                    setAllCategories(result.map(o => { return { label: o.name, value: o.name } }))
                }
            )
        }, [])
    const saveData = () => {
        disptach(SaveSignUpDataAction({ ...user, frontID, backID, certificates, personalPhoto, categories, skills }))
    }

    const submit = () => {
        if (dataValid()) {
            disptach(signUpAction(user))

        }
    }

    const showError = (errorField) => {
        return <Text style={signUpStyle.textError}>{errorField}</Text>
    }
    return (
        <KeyboardAwareScrollView bounces={false}>

            <>
                <SuccessModal modalVisible={requestState.success} closeModal={() => { disptach(ClearSignUpAction()), navigation.navigate('PreConfigScreen') }} message="Registration completed successfully" />
                <ErrorModal modalVisible={requestState.error} closeModal={() => { disptach(ClearSignUpStateAction()) }} message={requestState.errorMessage} />
                <LoadingModal modalVisible={requestState.pending} />
                <AuthHeader
                    continueButtonPress={() => { submit() }}
                    signUpButtonPress={() => { }}
                    signInButtonPress={() => { navigation.navigate('SignInScreen'), disptach(ClearSignUpAction()) }}
                    backButtonPress={() => { saveData(), navigation.navigate('SignUpScreen') }}
                    active={2}
                    signin={0}

                >
                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker1}
                        placeholder="Front ID"
                        value={frontID}
                        setValue={setFrontID}
                        error={errorFrontID != ' '}
                    />
                    {showError(errorFrontID)}
                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker}
                        placeholder="Back ID"
                        value={backID}
                        setValue={setBackID}
                        error={errorBackID != ' '}
                    />
                    {showError(errorBackID)}
                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker}
                        placeholder="Certificate"
                        value={certificates}
                        setValue={setCertificates}
                        error={errorCertificates != ' '}
                    />
                    {showError(errorCertificates)}
                    <PhotoPicker
                        style={signUpStyle.globalPhotoPicker}
                        placeholder="Personal Photo"
                        value={personalPhoto}
                        setValue={setPersonalPhoto}
                        error={errorPersonalPhoto != ' '}
                    />
                    {showError(errorPersonalPhoto)}
                    <View
                        style={{ ...globalStyle.oneLineInput, ...{ borderBottomWidth: 1, borderColor: '#DDDDDD' } }}
                    >
                        {
                            allCategories.length ?

                                <RNPickerSelect

                                    placeholder={{ label: 'Categories', value: null }}
                                    style={{
                                        ...pickerSelectStyles,
                                        placeholder: {
                                            fontSize: 16,
                                            fontFamily: "Montserrat_Medium",
                                            color: 'rgb(199,200,204)'
                                        }
                                    }}
                                    value={categories}
                                    onValueChange={(item) => { setCategories(item) }}
                                    useNativeAndroidPickerStyle={false}
                                    items={allCategories}
                                    Icon={() => { return <Ionicons name="ios-arrow-down" size={20} color="#132641" /> }}

                                />
                                : <Text>Still loading categories</Text>
                        }
                    </View>
                    {showError(errorCategories)}
                    <Input
                        value={skills}
                        onChangeText={setSkills}
                        placeholder='Skills'
                        style={globalStyle.oneLineInput}
                        error={errorSkills != ' '}
                    />
                    {showError(errorSkills)}
                    <View >
                        <Text style={signUpStyle.ClickingText}>By sigining up you are confirming all details are correct</Text>
                    </View>
                </AuthHeader>
            </>
        </KeyboardAwareScrollView>

    )
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        color: "rgb(199,200,204)",
        fontFamily: "Montserrat_Medium",
    },
    inputAndroid: {
        fontSize: 16,
        color: "rgb(199,200,204)",
        fontFamily: "Montserrat_Medium",
    },
});
export default SignUp2;


