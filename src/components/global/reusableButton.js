import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const ReusableButton = (props) => {
  let buttonStyle = { ...styles.buttonStyle ,...props.style};
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
             {props.children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 30,
    width: "40%",
    backgroundColor:'#132641',
    alignItems:'center', 
    paddingVertical:10,
  }
});

export default ReusableButton;
