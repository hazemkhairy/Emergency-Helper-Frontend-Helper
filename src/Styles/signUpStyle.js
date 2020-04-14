import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    container: {
        position: 'absolute',
        height: '100%'
    },
    inputs: {
        height: '5%',
        backgroundColor: '#ffffff00',
        marginLeft: '7%',
        marginRight: '7%',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginBottom: '2%',
        marginTop: '2%',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Montserrat_Medium'

    },
    form: {
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        width: '87%',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '5%',
        borderRadius: 35,
        justifyContent: 'center'

    },
    signInText: {
        fontSize: 12,
        color: '#C0CDDC',
        marginRight: 50,
        fontFamily: 'Montserrat_SemiBold'
    },
    signUptext: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    ClickingText: {
        color: 'grey',
        marginLeft: 10,
        paddingTop: 15,
        fontSize: 14,
        marginRight: 10,
        textAlign: 'center',
        fontFamily: 'Montserrat'
    },
    termsAndConditionsText: {
        fontSize: 14,
        color: '#132641',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: 'Montserrat'

    },
    globalInput: {

        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '0%',
        marginTop: '10%',
    },
    globalPhotoPicker:{
        
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '0%',
        marginTop: '5%',
    }

});