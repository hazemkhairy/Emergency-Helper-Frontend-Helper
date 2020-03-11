import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { signInAction } from '../../store/User/SignIn-Helper/actions';
import { SignInUser } from '../../Modules/User/UserModule';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');

// export const IMAGE_HEIGHT = window.width / 2;
// export const IMAGE_HEIGHT_SMALL = window.width /7;
console.log(height);




const SignInScreen = ({ navigation }) => {

    const disptach = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isLoading = useSelector((state) => {
        return state.userReducer.SignInStarted
    })
    const token = useSelector((state) => {
        return state.userReducer.token
    })
    console.log(isLoading);


    return (

        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <Button type="clear" style={{ position: 'absolute', marginTop: height * 0.0689, marginLeft: width * 0.064 }}
                    icon={<AntDesign name="arrowleft" size={20} color="white" />} onPress={() => navigation.navigate('Home')} />


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
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor='#B9B3BD'
                        autoCorrect={false}
                        autoCapitalize='none'
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => { setPassword(text) }}
                    />
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
                </View>
                <Button type='clear' title='FORGOT PASSWORD' titleStyle={styles.buttonforget}
                    onPress={() => { }}
                />


            </View>
        </View>


    );

}


const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#F1F0F2',
        flex: 1
    },
    container: {
        backgroundColor: '#7598BA',
        flex: 0.34,
        borderBottomLeftRadius: 75
    },
    Rowbuttons: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        paddingBottom: 25
    },
    textSignIn: {
        color: 'white',
        fontSize: 12,
        color: '#C0CDDC',
        marginRight: 50

    },
    textSignUp: {
        color: 'white',
        fontSize: 12
    },
    form: {
        borderRadius: 35,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        height: hp('27%'),
        width: wp('90%'),
        marginLeft: 24,
        borderRadius: 35,
        justifyContent: 'center',
        marginRight: 24,

    },
    input: {
        height: hp('5%'),
        backgroundColor: '#ffffff00',
        marginHorizontal: 25,
        marginVertical: 15,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginBottom: 20,
        marginTop: 5,
        fontSize: 16,
        fontWeight: '500'

    },
    text: {
        color: '#DDDDDD',
        fontSize: 12,
        position: 'relative',
        alignItems: 'center',
    },
    Continuebutton: {
        backgroundColor: '#132641',
        height: hp('7%'),
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 20,
        width: wp('90%'),
    },
    TextCountine: {
        color: 'white',
        fontSize: 14
    },
    buttonforget: {
        color: '#132641',
        fontSize: 12,
        fontWeight: '500'
    }

});
export default SignInScreen;
