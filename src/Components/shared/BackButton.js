import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon, { Icons } from "../../Utils/Icons";
import Colors from "../../Utils/Colors";

const BackButton = ({ onPres, style }) => {
  return (
    <TouchableOpacity style={[style, { zIndex: 1 }]} onPress={onPres}>
      <Icon
        type={Icons.Ionicons}
        name="chevron-back"
        size={40}
        color={Colors.black}
        style={{ margin: 5 }}
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
