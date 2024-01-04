import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

const inputModal = ({
  iconName,
  placeholder,
  onChange,
  value,
  style,
  type = "main" || "poste",
  styleInput,
  title,
}) => {
  switch (type) {
    case "main":
      return (
        <View style={styles.contain}>
          <View style={[styles.inputView, style]}>
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={Colors.bottom}
            />
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </View>
        </View>
      );
      break;
    case "poste":
      return (
        <View style={styles.contain}>
          <View style={[styles.inputView, style]}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: Colors.primary,
                padding: 2,
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name={iconName} size={30} color={Colors.white} />
            </View>
            <TextInput
              style={[styles.input, styleInput]}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </View>
        </View>
      );
      break;

    default:
      break;
  }
};

export default inputModal;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  inputView: {
    width: "85%",
    height: 50,
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
