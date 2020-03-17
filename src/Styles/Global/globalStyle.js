import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  SignIn_SignUp:
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'23%',
    marginRight:'20%',
    marginLeft:'20%',
    marginBottom:'5%'
  },
    white_background:{
        backgroundColor:'#F1F0F2',
        flex:1
      },
    
      blue_background:{
        backgroundColor:'#7598BA',
        height:'33%',
        borderBottomLeftRadius:70
      },
      backbutton:{
        position:'absolute',
        marginTop:'15%',
        marginLeft:'10%'
      },
      iconstyle:{
         color:'#fff',
         fontSize:20
      },
      Continuebutton: {
        backgroundColor: '#132641',
        height: '35%',
        width:'87%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'7%',
        marginRight:'7%',
        marginTop:'2%',
        marginBottom:'5%'
      },
      continueText:{
        color:'#fff',
        fontSize:14,
        fontFamily:'Montserrat_SemiBold'
      },
      texterror:{
        color:'#b30000',
        fontSize:14,
        position:'relative',
        alignItems:'center',
        marginLeft:30,
        marginRight:20,
        fontFamily:'Montserrat_Medium'
      },
      error:{
       
        borderBottomColor:'#b30000',
        borderBottomWidth:1
      }
});