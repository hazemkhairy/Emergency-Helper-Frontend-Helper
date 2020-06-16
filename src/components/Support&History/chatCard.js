import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

const ChatCard = ({ item }) => {
   
    var day = new Date(item.date).getDate();
    var monthNames = [ 'January', 'February', 'March', 'April', 'May','June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    var month =  monthNames[new Date(item.date).getMonth()];
    var hours = new Date(item.date).getHours(); 
    var min = new Date(item.date).getMinutes(); 
    var date= day +' '+ month + ' '+ hours + ':'+ min

    let bubbleStyle = item.senderRole=='Helper' ? styles.rightStyle : styles.leftStyle;
    let rowStyle =item.senderRole=='Helper' ? styles.rowRight:styles.rowLeft

      if(item.senderRole=='Helper'){
       return(
           <View>
                <View style={rowStyle}>
                    <View style={[styles.container, bubbleStyle]}>
                    <View style={[styles.balloon]}>
                    <Text style={styles.rightmessageStyle} >{item.message}</Text>
                    </View>
                    </View>
                    <Icon name={'triangle-right'} color={ '#132641'} style={styles.icon} /> 
                </View>
                <Text style={[styles.date,styles.rightdate]}>{date}</Text>
           </View>
   )
       }
    return(
        <View> 
             <Text style={styles.nameStyle}> {item.senderName} ({item.senderRole})</Text>
             <View style={rowStyle}> 
                <Icon name={'triangle-left'} color={'#E2E8ED'} style={styles.icon} /> 
                <View style={[styles.container, bubbleStyle]}>
                <View style={[styles.balloon]}>
                <Text style={styles.leftmessageStyle}>{item.message}</Text>
                </View>
                </View>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>  
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius:10,
        maxWidth:'94%',
    },
    leftStyle: {
        borderWidth:0.8,
        borderColor:'#E2E8ED',
    },
    rightStyle: {
        backgroundColor:'#132641',
    },
      balloon: {
        padding: 15,
        height: 'auto',
        width:'auto',
      },
      rowLeft:{
        alignSelf: 'flex-start',
        flexDirection: 'row',
      },
      rowRight:{
        alignSelf: 'flex-end',
        flexDirection: 'row'
      },
      nameStyle:{
          marginLeft:'5%',
          fontFamily: "Montserrat_SemiBold",
          fontSize: 14,
          color:'#132641',
          opacity:0.6
      },
      leftmessageStyle:{
        fontFamily: "Montserrat",
        fontSize: 14,
        color:'#4C5264'
      },
      rightmessageStyle:{
        fontFamily: "Montserrat",
        fontSize: 14,
        color:'#FFFFFF',
      },
      date:{
        fontSize: 12,
        color: '#BCC5D3',
        fontFamily: 'Montserrat',
        marginLeft:'5%',
        marginBottom:'3%',
      },
      rightdate:{
        marginRight:'5%',
        alignSelf: "flex-end",
      },
      icon:
      {
        fontSize:30,
        marginTop:'1%'
      },
      
})

export default ChatCard

