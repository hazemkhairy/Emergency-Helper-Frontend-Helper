import React,{useEffect,useState} from 'react';
import {  Text,View,StyleSheet,FlatList,Dimensions } from 'react-native';
import HistoryCard from '../components/Support&History/historyCard'
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import {viewHistory} from '../utils/History'

const History = () => {

  const [history, setHistory] = useState([]);
  const [reloading, setReloading] = useState(false);

  const getHistory = async () => {
      setReloading(true);
      setHistory([]);
    await viewHistory().then((result) => {
      setHistory(result);
      setReloading(false);
    });
  };
 
  useEffect(() => {
    getHistory();
  }, []);
  
  

  return (
    
    <View style={styles.container}>
          <MainHeader headerText='History' name='calendar-o'/>
           <SubHeaderText SubHeaderText='Your History'/>
           {history.length==0?<Text style={styles.nodataText}>No previous requests till now</Text>:
           <FlatList
             data={history}
             keyExtractor={(item,index) => 'key'+index}
             showsVerticalScrollIndicator={false}
             refreshing={reloading}
             onRefresh={() => getHistory()}
             renderItem={({ item, index }) => {
            return (
              <View >
                <HistoryCard item={item} />
              </View>
            )
          }}
         />
        }
     </View >
  );


}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF', 
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex:1
  },
  nodataText:{
    fontSize:   16,
    fontFamily: "Montserrat_SemiBold",
    color: "#132641",
    alignSelf:'center',
    marginTop: "5%",
  }
})

export default History;