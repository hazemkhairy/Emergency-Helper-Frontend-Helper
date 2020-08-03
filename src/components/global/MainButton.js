import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const MainButton = (props) => {
  let buttonStyle = { ...styles.buttonStyle, ...props.style };
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#132641",
    width: "85%",
    borderRadius: 35,
    alignItems: "center",
    paddingVertical: "4%",
    paddingHorizontal: "20%",
    alignSelf: 'center',
    marginBottom: "5%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
  },
});

export default MainButton;
