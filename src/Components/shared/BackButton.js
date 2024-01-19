import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon, { Icons } from "../../Utils/Icons";
import Colors from "../../Utils/Colors";

const BackButton = ({ onPres, style }) => {
  return (
    <TouchableOpacity
      onPress={onPres}
      style={[
        {
          position: "absolute",
          zIndex: 10000,
          top: Platform.OS === "ios" ? 40 : 10,
          left: 10,
          height: 40,
          width: 40,
          backgroundColor: "rgba(0,0,0,0.4)",
          padding: 5,
          borderRadius: 20,
        },
        style,
      ]}
    >
      <Icon
        type={Icons.MaterialIcons}
        name="arrow-back-ios"
        size={35}
        color={Colors.white}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
