import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "../../Utils/Icons";
import Colors from "../../Utils/Colors";

const ButtonIcon = ({
  type,
  iconeName,
  onPress,
  placeholder,
  style,
  color,
  iconSize,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.contain, style]}>
      <Icon type={type} name={iconeName} color={color} size={24 || iconSize} />
      <Text style={{ fontSize: 15, fontWeight: "900", letterSpacing: 0.5 }}>
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  contain: {
    height: 65,
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    flexDirection: "row",
    padding: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 5,
  },
});
