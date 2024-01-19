import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import Icon, { Icons } from "../../Utils/Icons";

const SectionProfil = ({
  onPress,
  iconName,
  iconType,
  label,
  color,
  size,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
          elevation: 5,
          backgroundColor: Colors.primary,
          opacity: 0.7,
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Icon type={iconType} name={iconName} color={color} size={size} />
      </View>
      <Text style={styles.txt}>{label}</Text>
      <Icon
        type={Icons.MaterialIcons}
        name="arrow-forward-ios"
        size={27}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default SectionProfil;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: Colors.gray,
    marginBottom: 10,
    elevation: 1,
    borderRadius: 30,
  },
  txt: {
    fontSize: Platform.OS === "android" ? 18 : 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textAlign: "center",
    textTransform: "capitalize",
    margin: 5,
  },
});
