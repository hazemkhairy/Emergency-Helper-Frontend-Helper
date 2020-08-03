import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import normalize from "react-native-normalize";
import ChatCard from '../components/Support&History/chatCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { getTicketsMessages, addMessage } from '../utils/SupportTickets'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton';

const TicketScreen = ({ navigation }) => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setnewMessage] = useState('');
  const [active, setActive] = useState(false);

  const category = navigation.state.params.props.category
  const ticketID = navigation.state.params.props.id

  const addNewMessage = async () => {
    if (active == true) {
      addMessage(ticketID, newMessage)
      setnewMessage('')
      setActive(false)
      getMessages()
    }
  }

  const getMessages = async () => {
    setMessages([]);
    await getTicketsMessages(ticketID).then((result) => {
      setMessages(result);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);


  return (

    <View style={styles.container}>
      <View style={{ height: Dimensions.get('window').height < 600 ? Dimensions.get("window").height * 0.75 : Dimensions.get("window").height * 0.82 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> {category} </Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            inverted
            keyboardShouldPersistTaps="handled"
            style={{ flex: 1 }}
            data={messages}
            keyExtractor={(item, index) => "key" + index}
            showsVerticalScrollIndicator={true}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <ChatCard item={item} />
                </View>
              );
            }}
          />
          <KeyboardSpacer
          />
        </View>
      </View>

      <KeyboardAvoidingView
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
        behavior={Platform.OS == "ios" ? 'position' : null}
        keyboardVerticalOffset={Platform.OS == "ios" ? normalize(60) : 0}
      >
        <View style={styles.footer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Write your reply.."
                autoCorrect={false}
                placeholderTextColor='#BCC5D3'
                underlineColorAndroid='transparent'
                onChangeText={(text) => {
                  setnewMessage(text)
                  {
                    if (/\S/.test(text)) {
                      setActive(true)

                    } else setActive(false)
                  }
                }}
                style={styles.input}
                value={newMessage}
                multiline
              />
            </View>
          </TouchableWithoutFeedback>
          {!active ? <Icon name={'arrow-right-circle'} color={'#BCC5D3'} size={30} /> :
            <TouchableOpacity onPress={() => addNewMessage()}>
              <Icon name={'arrow-right-circle'} color={'#132641'} size={30} />
            </TouchableOpacity>}
        </View>
      </KeyboardAvoidingView>
    </View>
  );


}
TicketScreen.navigationOptions = (props) => {
  return {
    title: '',
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
          <Item title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
        </HeaderButtons>
      )
    },

  }
}
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#7598BA',
    height: Dimensions.get('window').height * 0.20,
    borderBottomLeftRadius: 70,
    alignItems: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: normalize(40) *
      Math.min(
        Dimensions.get("window").height / 900.0,
        Dimensions.get("window").width / 500.0
      ),
    paddingTop: '15%',
    fontFamily: 'Montserrat_Bold'
  },

  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  footer: {
    borderWidth: 1,
    borderTopColor: '#E9EEF1',
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: normalize(60),
    paddingHorizontal: '5%',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#BCC5D3',
    paddingHorizontal: '5%',
  },

})

export default TicketScreen;