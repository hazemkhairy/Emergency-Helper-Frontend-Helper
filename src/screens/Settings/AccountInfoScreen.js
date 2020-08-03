import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MainButton from "../../components/global/MainButton";
import NewInput from "../../components/global/NewInput";
import RNPickerSelect from "react-native-picker-select";
import { getProfileData, updateProfileData } from "../../utils/getProfileData";
import SettingsModal from "../../components/Settings/SettingsModal";
import LoadingModal from "../../components/global/LoadingModal";
import Icon from "react-native-vector-icons/Ionicons";
import AccountPicker from '../../components/global/AccountPicker';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import normalize from 'react-native-normalize';
import MainHeader from '../../components/global/MainHeader';

const AccountInfoScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [profilePic, setProfilePic] = useState({});
  const [gender, setGender] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName_error, setFirstName_error] = useState("");
  const [lastName_error, setLastName_error] = useState("");
  const [emailAddress_error, setEmailAddress_error] = useState("");
  const [phoneNumber_error, setPhonenumber_error] = useState("");
  const updateProfile = () => {
    setLoading(true);
    updateProfileData(
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      gender,
      dateofBirth,
      profilePic
    ).then((result) => {
      setLoading(false);
      setModalVisible(true);
    });
  };
  var numbers = /^[0-9\b]+$/;
  const validate = () => {
    let error = true;
    if (firstName == "") {
      setFirstName_error("Please enter your First Name ");
      error = false;
    } else {
      var letters = /^[A-Za-z, ]+$/;
      if (letters.test(firstName) === true) {
        setFirstName_error("");
      } else {
        setFirstName_error("Please enter letters only");
        error = false;
      }
    }

    if (lastName == "") {
      setLastName_error("Please enter your Last Name");
      error = false;
    } else {
      var letters = /^[A-Za-z, ]+$/;
      if (letters.test(lastName) === true) {
        setLastName_error("");
      } else {
        setLastName_error("Please enter letters only");
        error = false;
      }
    }

    if (!phoneNumber || phoneNumber == "") {
      error = false;
      setPhonenumber_error("Please enter your Phone Number ");
    } else if (
      (phoneNumber.length < 6 || phoneNumber.length > 15) &&
      numbers.test(phoneNumber) === true
    ) {
      error = false;
      setPhonenumber_error("Number must be between [6-15] digits");
    } else {
      if (numbers.test(phoneNumber) === true) {
        setPhonenumber_error("");
      } else {
        error = false;
        setPhonenumber_error("Please enter numbers only");
      }
    }

    if (emailAddress == "") {
      setEmailAddress_error("Please enter your email");
      error = false;
    } else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(emailAddress) === true) {
        setEmailAddress_error("");
      } else {
        setEmailAddress_error("Invalid email");
        error = false;
      }
    }
    return error;
  };

  const loadProfileData = () => {
    setLoading(true);
    getProfileData().then((result) => {
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setEmailAddress(result.email);
      setPhonenumber(result.mobile);
      setProfilePic({ uri: result.profilePicture });
      if (result.birthDate) setDateofBirth(result.birthDate.split("T")[0]);
      setGender(result.gender);
      setLoading(false);
    });
  };
  useEffect(() => {
    loadProfileData();
  }, []);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    let birthDate = date;
    let monthFormat = birthDate.getMonth() + 1;
    if (monthFormat < 10) {
      monthFormat = "0" + monthFormat;
    }
    let formatted_date =
      birthDate.getFullYear() + "-" + monthFormat + "-" + birthDate.getDate();
    setDateofBirth(formatted_date);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView KeyboardAwareScrollView bounces={false}>
      <MainHeader headerText={'Account Info'}></MainHeader>
        <LoadingModal modalVisible={loading} />
        <SettingsModal
          modalVisible={modalVisible}
          message={"Updated Successfully!"}
        />
        <View style={styles.container}>
          <View style={styles.photoPicker}>
            <Image
              source={profilePic.uri ? { uri: profilePic.uri } : null}
              style={styles.profilePic}
            />
          </View>
          <AccountPicker
            text={"Update Picture"}
            value={profilePic}
            setValue={setProfilePic}
          />

          <View>
            <NewInput
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              errorText={firstName_error}
            />

            <NewInput
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              errorText={lastName_error}
            />

            <NewInput
              value={phoneNumber}
              onChangeText={(text) => setPhonenumber(text)}
              errorText={phoneNumber_error}
            />
            <NewInput
              value={emailAddress}
              onChangeText={(text) => setEmailAddress(text)}
              errorText={emailAddress_error}
            />
            <TouchableOpacity
              style={styles.datePicker}
              onPress={showDatePicker}
            >
              <Text style={styles.datePickerText}>
                {dateofBirth ? dateofBirth : "Date of birth (Optional)"}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View style={styles.rnpicker}>
              <RNPickerSelect
                placeholder={
                  gender
                    ? {
                        label: gender,
                        value: gender,
                        color: "red",
                      }
                    : { label: "Gender", value: "Gender", color: "red" }
                }
                value={gender}
                style={{
                  ...pickerSelectStyles,
                }}
                onValueChange={(value) => setGender(value)}
                useNativeAndroidPickerStyle={false}
                items={[
                  { label: "Female", value: "Female" },
                  { label: "Male", value: "Male" },
                  { label: "Other", value: "Other" },
                ]}
                Icon={() => {
                  return (
                    <Icon name="ios-arrow-down" size={25} color="#132641" />
                  );
                }}
              />
            </View>
          </View>
          <MainButton
            style={styles.updateBTN}
            onPress={() => {
              if (validate()) {
                updateProfile();
              }
              setModalVisible(false);
            }}
          >
            Update profile
          </MainButton>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
AccountInfoScreen.navigationOptions = (props) => {
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
        Dimensions.get("window").height / 820.0,
        Dimensions.get("window").width / 380.0
      ),
    color: "white",
    fontFamily: "Montserrat_Bold",
    top: normalize(90),
    alignSelf: "center",
  },
  
  photoPicker: {
    alignSelf: "center",
  },
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  profilePic: {
    resizeMode: "cover",
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    marginTop: "5%",
    borderColor:'#132641',
    borderWidth: 0.2,
  },
  datePicker: {
    alignSelf: "center",
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: "72%",
  },
  datePickerText: {
    fontSize: normalize(16),
    fontFamily: "Montserrat_Medium",
  },
  rnpicker: {
    fontSize: normalize(16),
    fontFamily: "Montserrat_Medium",
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignSelf: "center",
    width: "72%",
    marginTop: Dimensions.get("window").height > 800 ? "5%" : "3%",
  },
  updateBTN: {
    marginTop: "9%",
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: normalize(16),
    color: "black",
    fontFamily: "Montserrat_Medium",
  },
  inputAndroid: {
    fontSize: normalize(16),
    color: "black",
    fontFamily: "Montserrat_Medium",
  },
  placeholder: {
    fontSize: normalize(16),
    fontFamily: "Montserrat_Medium",
    color: "black",
  },
});

export default AccountInfoScreen;
