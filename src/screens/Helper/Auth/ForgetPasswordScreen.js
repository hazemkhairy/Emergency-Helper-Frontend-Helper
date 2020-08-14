import React, { useState } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Input from "../../../components/global/Input";
import signInStyle from "../../../Styles/signInStyle";
import ErrorModal from "../../../components/global/ErrorModal";
import { resetPassword } from "../../../utils/getPassword";
import LoadingModal from "../../../components/global/LoadingModal";
import SuccessModal from "../../../components/global/SuccessModal";
import normalize from "react-native-normalize";
import MainButton from "../../../components/global/MainButton";
import Icon from 'react-native-vector-icons/AntDesign';
const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [email_error, setemail_error] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setmodalMessage] = useState("");
  const [successModal, setsuccessModal] = useState(false);
  const [errorModal, seterrorModal] = useState(false);

  const forgetPassword = () => {
    setLoading(true);
    resetPassword(email).then((result) => {
      if (result.status == "404") {
        setmodalMessage("Email Not Found!");
        seterrorModal(true);
      } else {
        setmodalMessage("Email for Password Reset Sent Successfully!");
        setsuccessModal(true);
      }

      setLoading(false);
      setModalVisible(true);
    });
  };
  const validate = () => {
    let error = true;
    if (email == "") {
      setemail_error("Please Enter Your Email");
      error = false;
    } else {
      const valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (valid.test(email) === true) {
        setemail_error("");
      } else {
        setemail_error("Invalid Email");
        error = false;
      }
    }
    return error;
  };

  return (
    <View>
      <View style={styles.whiteBackground}>
        <ErrorModal
          modalVisible={errorModal}
          closeModal={() => {
            seterrorModal(false);
          }}
          message={modalMessage}
        />
        <SuccessModal
          modalVisible={successModal}
          closeModal={() => {
            setsuccessModal(false);
          }}
          message={modalMessage}
        />
        <LoadingModal modalVisible={loading} />
        <View style={styles.blueBackground}>

        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('SignInScreen') }}
          style={styles.backButton} >
          <Text>
            <Icon name="arrowleft" style={styles.backIcon} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.header}>Forget Password</Text>
        <View style={styles.form}>
          <Input
            placeholder="Email"
            placeholderTextColor="#B9B3BD"
            keyboardType={"email-address"}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.emailinput}
            error={email_error != ""}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoFocus={true}
          />
          <Text style={signInStyle.textError}>{email_error}</Text>
        </View>
        <MainButton
          style={styles.resetButton}
          onPress={() => {
            if (validate()) {
              forgetPassword();
            }
            setModalVisible(false);
          }}
        >
          Reset Password{" "}
        </MainButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    borderColor: "#d6d7da",
    backgroundColor: "#fff",
    width: "87%",
    marginLeft: "7%",
    marginRight: "7%",
    marginBottom: Dimensions.get("window").height < 600 ? "3%" : "7%",
    marginTop: Dimensions.get("window").height > 800 ? "10%" : "5%",
    borderRadius: 35,
    height: "20%",
    top: normalize(45),
  },
  container: {
    position: "absolute",
    marginTop: Dimensions.get("window").height > 850 ? "18%" : "10%",
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: normalize(28),
    color: "white",
    fontFamily: "Montserrat_Bold",
    alignSelf: "center",
    top: normalize(35),
  },
  whiteBackground: {
    backgroundColor: "#F1F0F2",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  blueBackground: {
    backgroundColor: "#7598BA",
    height: Dimensions.get("window").height * 0.33,
    borderBottomLeftRadius: 70,
  },
  emailinput: {
    marginTop:
      Dimensions.get("window").height > 850
        ? "15%"
        : Dimensions.get("window").height < 600
          ? "18%"
          : "14%",
    height: Dimensions.get("window").height > 800 ? 30 : 30,
  },
  resetButton: {
    backgroundColor: "#132641",
    width: "80%",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "8%",
    top: normalize(50),
  },
  resetText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
  },
  backButton: {
    marginLeft: '10%',
    width: 25,
    overflow: 'hidden'

  },
  backIcon: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ForgetPasswordScreen;
