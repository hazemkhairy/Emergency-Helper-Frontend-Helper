import { StyleSheet ,Dimensions} from 'react-native';


export default StyleSheet.create({
  SignIn_SignUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
    marginRight: '20%',
    marginLeft: '20%',
    marginBottom: '5%'
  },
  white_background: {
    backgroundColor: '#F1F0F2',
    flex: 1
  },

  blue_background: {
    zIndex: -1,
    backgroundColor: '#7598BA',
    height: '33%',
    borderBottomLeftRadius: 70
  },
  backbutton: {
    position: 'absolute',
    marginTop: '15%',
    marginLeft: '10%',
    backgroundColor: 'red'
  },
  iconstyle: {
    color: '#fff',
    fontSize: 20
  },
  Continuebutton: {
    backgroundColor: '#132641',
    height: Dimensions.get('window').height*0.25,
    width: '87%',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '7%',
    marginRight: '7%',

  },
  continueText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat_SemiBold'
  },
  texterror: {
    color: '#b30000',
    fontSize: 12,
    marginLeft: '7%',
    fontFamily: 'Montserrat_Medium'
  },
  error: {
    borderBottomColor: '#b30000',
    borderBottomWidth: 1
  },
  oneLineInput: {
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '0%',
    marginTop: '5%',
  },
  RNPickerSelect:{
    fontFamily:'Montserrat'
  }
});