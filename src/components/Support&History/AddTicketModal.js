import React, { useState , useEffect } from 'react';
import { Text,View,StyleSheet, TouchableOpacity, TextInput,KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import normalize from "react-native-normalize";
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from "react-native-picker-select";
import ReusableButton from '../global/reusableButton'
import {getAllCategories,NewSupportSupportTicket} from '../../utils/SupportTickets'
const AddTicketModal = ({ modalVisible,newItem ,close}) => {
   
  if (!modalVisible) return null;
  
  const [visible, setVisible] = useState(modalVisible);
  const [subject,setSubject] = useState('');
  const [description,setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [validSubject, setvalidSubject] = useState(true);
  const [validDescription,setvalidDescription] = useState(true);
 
  useEffect(
    () => {
      getAllCategories().then(
            (result) => {
              setCategories(result.map(o => { return { label: o.name, value: o.name } }))
            }
        )
      
    }, []) 
    const validData=()=>
    {
      let valid=true
      if(subject==''||subject=='Subject'){
        setvalidSubject(false)
        valid=false
      }
      else { 
        setvalidSubject(true)
      }
      if (!/\S/.test(description)) {
        setvalidDescription(false)
        valid =false
      }
      else { 
        setvalidDescription(true)
      }
      return valid
    }
    const AddElement = async () => {
     if(validData())
     {
      NewSupportSupportTicket(description,subject).then((result) => {
      newItem()
      close()
    });
    }
  }
   const closeModal=  ()=>{
    close()
    setVisible(false)
   }
   
    return (
        <Modal isVisible={visible}  >
            <KeyboardAvoidingView behavior={Platform.OS == "ios"?'position':null} keyboardVerticalOffset={Platform.OS == "ios"?normalize(20):0}>
            <View style={styles.container}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => closeModal()}>
                       <Icon name={'ios-close'} size={30} color={'#454F63'}/>
                    </TouchableOpacity>
                </View>
                    <Text style={styles.creatText}>Create new ticket</Text>
              <View  style={validSubject?styles.subjectsContainer:[styles.subjectsContainer,styles.errorStyle]}>
              <RNPickerSelect
                placeholder={
                     { label: "Subject", value: "Subject" }
                }
                useNativeAndroidPickerStyle={false}
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    fontSize: 14,
                    fontFamily: "Montserrat_SemiBold",
                    color: "#78849E",
                  },
                }}
                value={subject}
                onValueChange={(value) => {setSubject(value)}}
                items={categories}
                Icon={() => {
                  return (
                    <Icon name="ios-arrow-down" style={{color:"#132641",fontSize:20,opacity:0.4}}  />
                  );
                }}
              />
              </View> 
                <View style={validDescription?styles.descriptionContainer:[styles.descriptionContainer,styles.errorStyle]}>
                    <TextInput
                        placeholder="Description"
                        placeholderTextColor='#78849E'
                        style={styles.descriptionText}
                        multiline
                        value={description}
                        onChangeText={(text) => {setDescription(text)}}
                    />
                </View>
                <ReusableButton style={styles.buttonStyle}
                      onPress={()=>AddElement()}>
                  <Text style={styles.addButton}>Create</Text>
               </ReusableButton>
            </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: normalize(250),
        backgroundColor: '#FFFFFF',
        borderRadius:50,
        alignSelf:'center', 
    },
    closeContainer: {
        alignSelf: 'flex-end',
        top: 10,
        right:'14%',
        position: 'absolute', 
    },
    creatText: {
        fontSize: 20,
        fontFamily: "Montserrat_SemiBold",
        color:'#132641',
        textAlign:'center',
        marginTop:'8%',
        marginBottom:'3%'
    },
    subjectsContainer:{
        borderWidth:0.5,
        borderRadius: 12,
        borderColor:'#D5D6D6',
        width:'60%',
        marginBottom: '4%',
        alignSelf: 'center',
        paddingHorizontal:'3%',
        padding:12,
    },
    descriptionContainer: {
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor:'#D5D6D6',
        width: '60%',
        height: '30%',
        marginBottom: '2%',
        textAlignVertical: 'top',
        alignSelf: 'center',
        padding:10,
        paddingTop:12,
    },
    descriptionText: {
        fontSize: 14,
        fontFamily: "Montserrat_SemiBold",
        color:'#78849E'
    },
    errorStyle:{
      borderColor:'#b30000'
    },
    buttonStyle: {
        alignSelf: 'center',
    },
    addButton:{
      fontSize: 18,
      fontFamily: "Montserrat",
      color: "white",
    },
   
})
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
    color:'#78849E'
  },
  inputAndroid: {
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
    color:'#78849E'
  },
});
export default AddTicketModal;