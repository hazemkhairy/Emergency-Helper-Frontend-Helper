import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  ClickingText: {

    color: '#767676',
    fontSize: Dimensions.get('window').height < 600 ? 12 : 14,
    marginBottom: '0%',
    marginTop: Dimensions.get('window').height > 800 ? '3%' : Dimensions.get('window').height < 600 ? '1%' : '1%',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    marginLeft:'1%',
    marginRight:'1%'

  },
  termsAndConditionsText: {

    color: '#132641',
    textDecorationLine: 'underline',
    fontSize: Dimensions.get('window').height < 600 ? 12 : 14,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    marginBottom: '0%',
    marginBottom: '5%',

  },
  input: {
    height: Dimensions.get('window').height > 800 ? 30 : 30,
    marginBottom: '0%',
    marginTop: Dimensions.get('window').height > 850 ? '8%' : Dimensions.get('window').height < 600 ? '2%' : '5%',

  },
  firstnameinput: {
    height: Dimensions.get('window').height > 800 ? 30 : 30,
    marginTop: Dimensions.get('window').height > 850 ? '15%' : Dimensions.get('window').height < 600 ? '8%' : '12%',
    marginBottom: '0%'
  },
  form: {
   height:'82%',
  },
  textError: {
    color: '#b30000',
    fontSize: 12,
    position: 'relative',
    alignItems: 'center',
    marginRight: '9%',
    marginLeft: '9%',
    marginTop: '0%',
    marginBottom: '0%',
   // height:'4%',
    fontFamily: 'Montserrat_Medium',

  },

  globalPhotoPicker1: {
    height: Dimensions.get('window').height > 800 ? 30 : 30,
    marginLeft: '0%',
    marginRight:'0%',
    marginBottom: '0%',
    marginTop: '5%',
    marginTop: Dimensions.get('window').height > 850 ? '15%' : Dimensions.get('window').height < 600 ? '8%' : '12%',

  },
  globalPhotoPicker: {
    height: Dimensions.get('window').height > 800 ? 30 : 30,
    marginLeft: '0%',
    marginRight:'0%',
    marginBottom: '0%',
    marginTop: Dimensions.get('window').height > 850 ? '8%' : Dimensions.get('window').height < 600 ? '2%' : '5%',

  }

});