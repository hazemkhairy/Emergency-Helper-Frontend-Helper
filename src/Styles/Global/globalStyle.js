import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  texterror: {
 
    color: '#b30000',
    fontSize: 14,
    position: 'relative',
    alignItems: 'center',
    marginRight:'9%',
    marginLeft: '9%',
    marginTop: '0%',
    marginBottom:'0%',
    fontFamily: 'Montserrat_Medium',
   

  },
  error: {
    borderBottomColor: '#b30000',
    borderBottomWidth: 1
  },

  whiteBackground: {
    backgroundColor: '#F1F0F2',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
},
  blueBackground: {
    backgroundColor: '#7598BA',
    height:Dimensions.get('window').height*0.33,
    borderBottomLeftRadius: 70
},
container: {
  position: 'absolute',
  marginTop: Dimensions.get('window').height>850?'18%':'10%',
  width: '100%',
  height: '100%'
},
backButton: {
  marginLeft: '10%',
  width: 25,
  marginBottom:'2%'
},
backIcon: {
  color: '#fff',
  fontSize: 20
},

  oneLineInput: {
    marginLeft: '9%',
    marginRight: '9%',
    marginBottom: '0%',
    marginTop: '3%',
    height:30,
    fontFamily: 'Montserrat_Medium',
  },
  continueButton: {
    backgroundColor: '#132641',
    height:Dimensions.get('window').height>850?'25%':'28%',
    width: '85%',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '8%',
    marginRight: '8%',
},
continueText: {
  color: '#fff',
  fontSize: 14,
  fontFamily: 'Montserrat_SemiBold'
},

  RNPickerSelect: {
    fontFamily: 'Montserrat_Medium',
    
  }
});