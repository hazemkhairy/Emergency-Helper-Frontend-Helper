import React,{useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-navigation-hooks'

const supportCard = ({ item }) => {

    var day = new Date(item.date).getDate();
    var monthNames = [ 'January', 'February', 'March', 'April', 'May','June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    var month =  monthNames[new Date(item.date).getMonth()];
    var date= day +' '+ month

    const [open,setOpen]=useState(false)
    const { navigate } = useNavigation();
   
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate('TicketScreen',{props:{id:item._id,category:item.category}})} >
            <View style={styles.buttonContainer}>
                <View>
                <Text  style={styles.ticketSubject}>{item.category}</Text>
                <Text style={styles.date}>{date}</Text>
                </View>
                <TouchableOpacity onPress={()=>setOpen(!open)}>
                    <Icon name={'angle-down'} color={'#78849E'} size={25}/>
                </TouchableOpacity>
            </View>
                {
                  open==true?<Text style={styles.details}>{item.description}</Text>:null
                }
            </TouchableOpacity>
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
        padding: '4%',
        flex: 1
    },
    ticketSubject:
    {
        fontSize: 13,
        fontFamily: 'Montserrat_Bold', 
        color:'#132641'
    },
    date: {
        fontSize: 12,
        fontFamily: 'Montserrat', 
        color:'#132641',
        marginBottom:'4%'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'85%',
        alignSelf: 'center'
    },
    details:{
        fontSize: 13,
        fontFamily: 'Montserrat',
        color: '#B1B7C0',
        marginLeft:'7.5%'
    },
})

export default supportCard