import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
const levels = [
  {
    label: 'Too Short',
    labelColor: '#ff3e00',
    activeBarColor: '#ff3e00',
  },
  {
    label: 'Weak',
    labelColor: '#ff6900',
    activeBarColor: '#ff6900',
  },

  {
    label: 'Average',
    labelColor: '#f3d331',
    activeBarColor: '#f3d331',
  },
  {
    label: 'Strong',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e',
  },
  {
    label: 'Secure',
    labelColor: '#0af56d',
    activeBarColor: '#0af56d',
  },
]

const PasswordStrengthBar = (props) => {

  return (
    <View style={styles.passwordLength}>
      <BarPasswordStrengthDisplay 
        password={props.password}
        meterType='bar'
        levels={levels}
        minLength={1}
        width={Dimensions.get("window").width * 0.72}
        barColor={"white"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  passwordLength: {
    width: "72%",
    marginTop: '0%',
    marginBottom: '0%',
    height: '2%',
    alignSelf: "center",
    alignItems: "center",
  },
});

export default PasswordStrengthBar;