import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  
   
    signInUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:Dimensions.get('window').height>850?'36%':Dimensions.get('window').height<600?'40%':'36%',
        alignSelf: 'center'
    },

    activeText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    inActiveText: {
        color: '#C0CDDC',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    form: {
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        width: '87%',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '7%',
        marginTop: '5%',
        borderRadius: 35,

    },
    
})