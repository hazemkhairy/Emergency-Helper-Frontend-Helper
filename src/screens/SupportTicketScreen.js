import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import SupportCard from '../components/Support&History/supportTicketCard';
import Button from '../components/global/reusableButton';
import AddModal from '../components/Support&History/AddTicketModal';
import MainHeader from '../components/global/MainHeader'
import Icon from 'react-native-vector-icons/Entypo';
import { getAllTickets } from '../utils/SupportTickets';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'

const SupportTicket = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [isloading, setLoading] = useState(false);

  const getTickets = async () => {
    setLoading(true);
    setTickets([]);
    await getAllTickets().then((result) => {
      setLoading(false);
      setTickets(result);
    });

  };
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <View style={styles.container}>
      <AddModal modalVisible={modalVisible} newItem={() => getTickets()} close={() => setModalVisible(!modalVisible)} />
      <View style={{ marginBottom: '3%' }}>
        <MainHeader headerText='Support' name={'users'} />
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.supportText}>Support</Text>
        <Button onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.buttonContainer}>
            <Icon name={'plus'} size={20} color={'#FFFFFF'} />
            <Text style={styles.newText}>New</Text>
          </View>
        </Button>
      </View>
      {tickets.length ? (
        <View style={{ flex: 1 }}>
          <FlatList
            data={tickets}
            extraData={tickets}
            keyExtractor={(item, index) => 'key' + index}
            showsVerticalScrollIndicator={false}
            refreshing={isloading}
            onRefresh={() => getTickets()}
            renderItem={({ item }) => (
              <View >
                <SupportCard item={item} />
              </View>
            )}
          />
        </View>
      ) : (<Text style={styles.emptyList}>No previous support tickets till now</Text>
        )}
    </View>
  );
}
SupportTicket.navigationOptions = (props) => {
  return {
    title: '',
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}   >
          <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
        </HeaderButtons>
      )
    },

  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
  },
  supportText: {
    fontSize: 24,
    fontFamily: "Montserrat_SemiBold",
    color: '#132641',
    marginTop: '2%',
    marginLeft: '7%'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  newText: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: "#FFFFFF",
  },
  emptyList: {
    fontSize: 16,
    fontFamily: "Montserrat_SemiBold",
    color: "#132641",
    alignSelf: 'center',
    marginTop: "5%",
  }
})
export default SupportTicket;

