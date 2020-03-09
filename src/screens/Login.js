import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect, Provider } from 'react-redux';
import { Button } from 'react-native-elements';
import { AntDesign ,Feather} from '@expo/vector-icons'
import { createStore } from 'redux';

const { width, height } = Dimensions.get('window');

// export const IMAGE_HEIGHT = window.width / 2;
// export const IMAGE_HEIGHT_SMALL = window.width /7;
console.log(height);


//actions
const Type_email = 'Type_email';
const Type_password = 'Type_password';
//action creator
const typeemail = (text1) => ({
    type: Type_email,
    text1

})
const typepassword = (text2) => ({
    type: Type_password,
    text2

})
//connect thake new state and maps this state to the properties of the contained component
const Loginform = connect((state) => ({
    value: state.email//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (text) => {
        dispatch(typeemail(text));
    }
}))(TextInput)
const LoginPassword = connect((state) => ({
    value: state.password//set the value props in the textinput
}), (dispatch) => ({
    onChangeText: (password) => {
        dispatch(typepassword(password));
    }
}))(TextInput)


//const login = ({ navigation }) => {
class login extends Component {
    //state 
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            pendingloginRequest: false
        };
        //store
        this.store = createStore((state, action) => {
            console.log(JSON.stringify(action));
            return { ...state, email: action.text, password: action.password }
        }, this.state);

    }

    render() {
        return (
            <Provider store={this.store}>
                <View style={{ backgroundColor: '#F1F0F2', flex: 1 }}>
                    <View style={{ backgroundColor: '#7598BA', flex: 0.34, borderBottomLeftRadius: 75 }}>
                        {/* <Button type="clear" style={{ position: 'absolute', marginTop: height * 0.0689, marginLeft: width * 0.064 }}
                            icon={<AntDesign name="arrowleft" size={20} color="white" />} onPress={() => this.props.navigation.navigate('Home')} /> */}
                        <Button type="clear" style={{ position: 'absolute', marginTop: height * 0.0689, marginLeft: width * 0.064 }}
                            icon={<Feather name="arrow-left" size={20} color="white" />} onPress={() => this.props.navigation.navigate('Home')} />

                        <View style={{ flexDirection: 'row', marginTop: height * 0.1009, justifyContent: 'center' }}>
                            <Button title='SIGN IN' titleStyle={{ color: 'white', fontSize: 12, marginRight: 50 }} type='clear' />
                            <Button title='SIGN UP' titleStyle={{ color: '#C0CDDC', fontSize: 12 }} type='clear' onPress={() => this.props.navigation.navigate('SignUpScreen')} />
                        </View>
                        <View style={styles.form}>
                            <Loginform
                                placeholder="Email"
                                placeholderTextColor='#B9B3BD'
                                autoCorrect={false}
                                style={styles.input}
                            //onChangeText={(value)=>this.setSate({username:value})}
                            />
                            <LoginPassword
                                secureTextEntry={true}
                                placeholder="Password"
                                placeholderTextColor='#B9B3BD'
                                autoCorrect={false}
                                style={styles.input}
                            // onChangeText={(value)=>this.setSate({password:value})}
                            />
                        </View>
                        <TouchableOpacity style={styles.Continuebutton}  >
                            <Text style={{ color: 'white', fontSize: 14 }} onPress={() => this.props}>CONTINUE</Text>
                        </TouchableOpacity>
                        <Button type='clear'  title='FORGOT PASSWORD' titleStyle={{ color: '#132641', fontSize: 12, fontWeight: '500' }} 
                            onPress={() => { }}
                        />
                    </View>
                </View>
            </Provider>

        );

    }
}

const styles = StyleSheet.create({
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
    }
   
});
export default login;
