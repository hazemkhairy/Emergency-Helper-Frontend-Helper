import React ,{Component}from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import * as Font from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';



//actions
const Type_FirstName = 'Type_FirstName';
const Type_LastName = 'Type_LastName';
const Type_PhoneNumber = 'Type_PhoneNumber';
const Type_Email = 'Type_Email';
const Type_Password = 'Type_Password';
const Type_ConfirmPassword = 'Type_ConfirmPassword';



//action creator
const typefirstName = (text1) => ({
    type: Type_FirstName,
    text1

})

const typelastName = (text2) => ({
    type: Type_LastName,
    text2

})

const typephoneNumber = (text3) => ({
    type: Type_PhoneNumber,
    text3

})

const typeEmail = (text4) => ({
    type: Type_Email,
    text4

})

const typePassword = (text5) => ({
    type: Type_Password,
    text5

})

const typeconfirmPassword = (text6) => ({
    type: Type_ConfirmPassword,
    text6

})

const FirstName = connect((state) => ({
    value: state.Name//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typefirstName(text));
    }
}))(TextInput)

const LName = connect((state) => ({
    value: state.lastName//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typelastName(text));
    }
}))(TextInput)

const firstName = connect((state) => ({
    value: state.firstName//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typefirstName(text));
    }
}))(TextInput)

const PhoneNumber = connect((state) => ({
    value: state.phoneNumber//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typephoneNumber(text));
    }
}))(TextInput)

const Email = connect((state) => ({
    value: state.email//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typeEmail(text));
    }
}))(TextInput)


const Password = connect((state) => ({
    value: state.password//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typePassword(text));
    }
}))(TextInput)



const CPassword = connect((state) => ({
    value: state.confirmPassword//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typeconfirmPassword(text));
    }
}))(TextInput)


//const SignUp = () => {
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        //store
        this.store = createStore((state, action) => {
            console.log(JSON.stringify(action));
            return { ...state, firstName: action.text, lastName: action.text, phoneNumber: action.text, email: action.text, password: action.text, confirmPassword: action.text, }
        }, this.state);

    }
    render() {
        return (

            //<KeyboardAvoidingView behavior='position'  style={styles.Container} enabled>
            <Provider store={this.store}>
            <View style={styles.MainContainer}>
                <View style={styles.Container}>

                    <View >
                    <Button type="clear"
                        style={{ position: 'absolute', marginTop: 30, marginLeft: 20 }}
                        icon={<AntDesign name="arrowleft" size={20} color="white"  />}
                        onPress={()=>this.props.navigation.navigate('Home')}  />
                </View>


                    <View style={styles.line}>
                        <TouchableOpacity >
                            <Text style={{ color: 'white', fontSize: 12, color: '#C0CDDC', marginRight: 50 } }onPress={()=>this.props.navigation.navigate('Login')}>SIGN IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={{ color: 'white', fontSize: 12 }} >SIGN UP</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.form}>

                        <FirstName
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputs}
                            placeholder="First Name"
                        />
                        <LName
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputs}
                            placeholder="Last Name"
                        />
                        <PhoneNumber
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputs}
                            placeholder="Phone Number"
                            keyboardType={"numeric"}
                        />
                        <Email

                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputs}
                            placeholder="Email"
                            keyboardType={"email-address"}

                        />
                        <Password placeholder="Passwrod"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputs}
                            secureTextEntry={true}


                        />
                        <CPassword
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputs}
                            placeholder="Confrim Password"
                            secureTextEntry={true}


                        />

                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ color: '#grey' }, { marginLeft: 20 }, { paddingTop: 10 }, { textAlign: 'center' }}>  By clicking continue you are agreeing to our
                      </Text>
                            <TouchableOpacity >
                                <Text style={{ fontSize: 14, color: '#132641', textAlign: 'center', textDecorationLine: 'underline' }}>Terms and Conditions</Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                    <View >
                        <TouchableOpacity style={styles.Contunie}  >
                            <Text style={{ color: 'white', fontSize: 14 }} onPress={()=>this.props.navigation.navigate('SignUp2')}>CONTINUE</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            </Provider>
            // </KeyboardAvoidingView>
            
        )
    }
};

const styles = StyleSheet.create({

    MainContainer: {
        backgroundColor: '#F1F0F2',
        flex: 1,

    },

    Container: {
        backgroundColor: '#7598BA',
        flex: 0.35,
        borderBottomLeftRadius: 110,


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
    },
    form: {
        
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        height: hp('70%'),
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

    line: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
        paddingBottom: 15,

        /* flexDirection: 'row',
         paddingBottom: 15,
         paddingTop: 50,
         justifyContent: 'center'*/
    }


}


);

export default SignUp;

