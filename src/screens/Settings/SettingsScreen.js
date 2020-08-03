import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from 'react-native-normalize';
import MainHeader from '../../components/global/MainHeader';
import SubHeaderText from '../../components/global/SubHeaderText';


const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <KeyboardAwareScrollView KeyboardAwareScrollView bounces={false}>
        <MainHeader headerText={'Settings'} name={'cog'}></MainHeader>
        <SubHeaderText SubHeaderText={'Settings'}></SubHeaderText>
        <TouchableOpacity
          style={styles.optionsContainer}
          onPress={() => {
            navigation.navigate("AccountInfoScreen");
          }}
        >
          <Text style={styles.settingsTXT}>Account Info</Text>
          <Icon
            name="ios-arrow-forward"
            size={25}
            style={styles.icon}
            marginLeft="55%"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsContainer}
          onPress={() => {
            navigation.navigate("ProfessionInfoScreen");
          }}>
          <Text style={styles.settingsTXT}>Profession Info</Text>
          <Icon name="ios-arrow-forward" size={25} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionsContainer}
          onPress={() => {
            navigation.navigate("ChangePasswordScreen");
          }}
        >
          <Text style={styles.settingsTXT}>Change Password</Text>
          <Icon name="ios-arrow-forward" size={25} style={styles.icon} />
        </TouchableOpacity>
          
     
      </KeyboardAwareScrollView>
    </View >
  );
};
SettingsScreen.navigationOptions = (props) => {
  return {
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      backgroundColor: '#7598BA'

    },
    headertransparent: true,
  }
}
const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: "#7598BA",
    height: normalize(200),
    borderBottomLeftRadius: 70,
  },
  hText: {
    fontSize:
      normalize(40) *
      Math.min(
        Dimensions.get("window").height / 800.0,
        Dimensions.get("window").width / 380.0
      ), color: "white",
    fontFamily: "Montserrat",
    top: normalize(90),
    alignSelf: "center",
  },
  subHeader: {
    fontSize: normalize(24),
    color: "#132641",
    bottom: normalize(5),
    fontFamily: "Montserrat_SemiBold",
    marginLeft: "12%",
    marginTop: "10%",
  },

  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  settingsTXT: {
    fontSize: normalize(18),
    color: "#132641",
    fontFamily: "Montserrat_Medium",
    width: normalize(250),
  },
  optionsContainer: {
    flexDirection: "row",
    marginLeft: "12%",
    marginTop: "7%",
  },
  icon: {
    marginLeft: "12%",
    color: "#132641",
  },
});

export default SettingsScreen;
