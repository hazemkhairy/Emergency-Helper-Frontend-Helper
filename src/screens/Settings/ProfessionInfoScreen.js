import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import MainButton from "../../components/global/MainButton";
import NewInput from "../../components/global/NewInput";
import RNPickerSelect from "react-native-picker-select";
import {
  getProfileData,
  updateProfessionData,
} from "../../utils/getProfileData";
import SettingsModal from "../../components/Settings/SettingsModal";
import LoadingModal from "../../components/global/LoadingModal";
import Icon from "react-native-vector-icons/Ionicons";
import PhotoPicker from "../../components/global/PhotoPicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import normalize from "react-native-normalize";
import MainHeader from "../../components/global/MainHeader";
import { getAllCategories } from "../../utils/categories";

const ProfessionInfoScreen = ({ navigation }) => {
  const [frontID, setFrontID] = useState({});
  const [backID, setBackID] = useState({});
  const [certificate, setCertificate] = useState({});
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category_error, setCategory_error] = useState("");
  const [skills_error, setSkills_error] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [modalMessage, setModalMessage] = useState("");

  const updateProfile = () => {
    setLoading(true);
    updateProfessionData(frontID, backID, certificate, category, skills).then(
      (result) => {
        setModalMessage("Updated Successfully!");
        setLoading(false);
        setModalVisible(true);
      }
    );
  };

  const validate = () => {
    let error = true;
    if (skills == "") {
      setSkills_error("Please enter at least one skill");
      error = false;
    } else {
      var letters = /^[A-Za-z,',' ]+$/;
      if (letters.test(skills) === true) {
        setSkills_error("");
      } else {
        setSkills_error("Please enter letters only");
        error = false;
      }
    }
    return error;
  };

  const loadProfileData = () => {
    setLoading(true);
    getProfileData().then((result) => {
      setFrontID({ uri: result.frontID });
      setBackID({ uri: result.backID });
      setCertificate({ uri: result.certificate[0] });
      setCategory(result.category);
      setSkills(result.skills);
      setLoading(false);
    });
    getAllCategories().then((result) => {
      setAllCategories(
        result.map((item) => {
          return { label: item.name, value: item.name };
        })
      );
    });
  };
  useEffect(() => {
    loadProfileData();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView KeyboardAwareScrollView bounces={false}>
        <MainHeader headerText={"Profession Info"}></MainHeader>
        <LoadingModal modalVisible={loading} />
        <SettingsModal modalVisible={modalVisible} message={modalMessage} />
        <View style={styles.container}>
          <View>
            <PhotoPicker
              style={styles.picker}
              placeholder="Front ID"
              value={frontID}
              setValue={setFrontID}
            />
            <PhotoPicker
              style={styles.picker}
              placeholder="Back ID"
              value={backID}
              setValue={setBackID}
            />
            <PhotoPicker
              style={styles.picker}
              placeholder="Certificate"
              value={certificate}
              setValue={setCertificate}
            />
            <View style={styles.rnpicker}>
              {allCategories.length ? (
                <RNPickerSelect
                  placeholder={
                    category
                      ? {
                          label: category,
                          value: category,
                        }
                      : { label: "Category", value: "Category" }
                  }
                  value={category}
                  style={{
                    ...pickerSelectStyles,
                  }}
                  onValueChange={(value) => setCategory(value)}
                  useNativeAndroidPickerStyle={false}
                  items={allCategories}
                  Icon={() => {
                    return (
                      <Icon name="ios-arrow-down" size={25} color="#132641" />
                    );
                  }}
                />
              ) : null}
            </View>
            <View style={styles.skillView}>
              <NewInput
                style={styles.skillInput}
                placeholder={"Skills"}
                value={skills}
                onChangeText={(text) => setSkills(text)}
                errorText={skills_error}
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
ProfessionInfoScreen.navigationOptions = (props) => {
  return {
    headerStyle: {
      shadowColor: "transparent",
      elevation: 0,
      backgroundColor: "#7598BA",
    },
    headertransparent: true,
  };
};
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

  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  rnpicker: {
    fontSize: normalize(16),
    fontFamily: "Montserrat_Medium",
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignSelf: "center",
    width: "82%",
    marginTop: Dimensions.get("window").height > 800 ? "7%" : "5%",
  },
  updateBTN: {
    marginTop: "9%",
  },
  picker: {
    height: Dimensions.get("window").height > 800 ? 45 : 40,
    marginTop:
      Dimensions.get("window").height > 850
        ? "8%"
        : Dimensions.get("window").height < 600
        ? "1%"
        : "5%",
  },
  skillInput: {
    marginTop: "8%",
    alignItems: "center",
  },
  skillView:{
width:'115%',
right: normalize(25),
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: normalize(16),
    color: "#132641",
    fontFamily: "Montserrat_Medium",
  },
  inputAndroid: {
    fontSize: normalize(16),
    color: "#132641",
    fontFamily: "Montserrat_Medium",
  },
  placeholder: {
    fontSize: normalize(16),
    fontFamily: "Montserrat_Medium",
    color: "#132641",
  },
});

export default ProfessionInfoScreen;
