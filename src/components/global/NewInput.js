import React from "react";

import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";

const Input = (props) => {
  let errorMSG = props.errorText;
  let myStyle = styles.input;
  if (props.style) myStyle = { ...myStyle, ...props.style };
  if (!props.errorText == "") myStyle = { ...myStyle, ...styles.errorBorder };
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        {...props}
        style={myStyle}
      />

      {errorMSG != "" ? (
        <Text style={styles.errorTXT}>{errorMSG}</Text>
      ) : (
          <Text style={styles.errorTXT}> </Text>
        )}


    </View>
  );
};
const styles = StyleSheet.create({
  errorBorder: {
    borderBottomColor: "#b30000",
  },
  container: {
    flexDirection: 'column',
    marginLeft: '14%',
    marginTop: Dimensions.get("window").height > 800 ? "2.5%" : "0.5%",
  },
  input: {
    fontSize: 16,
    fontFamily: "Montserrat_Medium",
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingVertical: 5,
    width: "83%",
  },
  errorTXT: {
    color: "#b30000",
    fontFamily: "Montserrat_Medium",
    fontSize: 12,
  },
});

export default Input;
