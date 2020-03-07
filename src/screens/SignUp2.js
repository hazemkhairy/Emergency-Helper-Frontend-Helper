import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import * as Font from "expo-font";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

 
const SignUp2 = ({ navigation }) => {
    
    return (
        <View style={styles.MainContainer}>
            <View style={styles.Container}>
{/* 
            <View>
                    <Button type="clear"
                        style={{ position: 'absolute', height: 50, width: 50, paddingTop: 20, fontWeight: '700' }}
                        icon={<AntDesign name="arrowleft" size={15} color="white" />}
                        onPress={() => {navigation.navigate('SignUpScreen')}} />
                </View> */}
                <View style={styles.line}>
                    <TouchableOpacity >
                        <Text style={{ color: 'white', fontSize: 12, color: '#C0CDDC', marginRight: 50 }}onPress={()=>navigation.navigate('Login')} >SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{ color: 'white', fontSize: 12 }} >SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.form}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Front ID "
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Back ID"
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Certificates"
                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Personal Photo"
                    />

                    <TextInput placeholder="Categories"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}

                    />

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputs}
                        placeholder="Skills"

                    />

                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#767676' }, { paddingTop: 50 }, { textAlign: 'center' }}>  By clicking continue you are confirming  </Text>
                        <Text style={{ color: '#767676' }, { marginLeft: 10 }, { textAlign: 'center' }}>  all details are correct </Text>
                    </View>

                </View>

                <View >
                    <TouchableOpacity style={styles.Contunie}>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    MainContainer: {
        backgroundColor: '#F1F0F2',
        flex: 1
    },
    Container: {
        backgroundColor: '#7598BA',
        flex: 0.35,
        borderBottomLeftRadius: 110

    },
    inputs: {

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
        // fontFamily: 'light'

    },
    form: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        height:hp('70%') ,
        marginLeft: 24,
        marginRight: 24,
        borderRadius: 35,
        justifyContent: 'center',


    },
    Contunie: {
        backgroundColor: '#132641',
        height: hp('7%'),
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20

    },
    Button: {
        backgroundColor: '#7598BA',
        flexDirection: 'row',
        marginLeft: 50,
        marginRight: 50

    },
    line: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        paddingBottom: 15,
    }


}


);

export default SignUp2;

