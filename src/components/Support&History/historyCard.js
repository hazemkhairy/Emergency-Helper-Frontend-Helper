import React,{useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const historyCard = ({ item }) => {
  
    var day = new Date(item.date).getDate(); 
    var month = new Date(item.date).getMonth() + 1; 
    var year = new Date(item.date).getFullYear(); 
    var hours = new Date(item.date).getHours(); 
    var min = new Date(item.date).getMinutes(); 
    let a='PM'
    if(hours<11)
    {
        a='AM'
    }
    if( hours > 12 )
    {
      hours = hours - 12;
    }
    if( hours == 0 )
    {
        hours = 12;
    } 
    let date= day+  '/' + month + '/' + year + ' ' + hours + ':' + min +' '+  a

    const [open,setOpen]=useState(false)
    return (
        <View  style={styles.container}>
            <View style={styles.buttonContainer}>
                <View>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.helperName}>{item.name}</Text>
                <Text style={styles.categoryName}>{item.category}</Text>
                </View>
                <TouchableOpacity onPress={()=>setOpen(!open)}>
                    <Icon name={'angle-down'} color={'#78849E'} size={25}/>
                </TouchableOpacity>
            </View>
                {
                  open==true?<Text style={styles.details}>{item.description}</Text>:null
                }
                <Text style={styles.price}>{item.price}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        width: '87%',
        alignSelf:'center',
        borderRadius: 40,
        shadowOffset: {
            width: 6,
            height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 10,
        backgroundColor: '#FFFFFF',
        marginBottom:'3%',
        marginTop:'3%',
        padding: '2%',
        flex: 1,
    },
    date: {
        fontSize: 13,
        fontFamily: 'Montserrat_Bold', 
        color:'#132641'
    },
    helperName:
    {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#132641',
        opacity:0.5,
      
    },
    categoryName:
    {
        fontSize: 13,
        fontFamily: 'Montserrat',
        color: '#B1B7C0',
        marginBottom:'6%'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'85%',
        alignSelf: 'center',
        marginTop:'5%',
    },
    price:{
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#132641',
        opacity:0.6,
        right:'6%',
        bottom: '5%', 
        alignSelf: "flex-end",
    },
    details:{
        fontSize: 13,
        fontFamily: 'Montserrat',
        color: '#B1B7C0',
        marginLeft:'7.5%',
        marginBottom:'4%'
    }
})

export default historyCard