import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import Icon, { Icons } from "../../Utils/Icons";

const searchBar = ({
  value,
  placeholder,
  onChange,
  onPress,
  type = "main" || "client" || "Tailleur",
  translateY,
  opacity,
}) => {
  switch (type) {
    case "main":
      return (
        <View style={styles.contain}>
          <View style={styles.inputView}>
            <TextInput
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              style={styles.input}
            />
            <TouchableOpacity style={styles.touch} onPress={onPress}>
              <Icon
                type={Icons.FontAwesome}
                name="search"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case "client":
      return (
        <Animated.View style={[styles.contain]}>
          <View style={styles.inputViewClient}>
            <Icon
              type={Icons.FontAwesome}
              name="search"
              size={24}
              color={Colors.grayLight}
              style={{ marginRight: 10 }}
            />

            <TextInput
              value={value}
              onChange={onChange}
              // placeholder={placeholder}
              style={styles.inputClient}
            />
            <TouchableOpacity style={styles.touchClient} onPress={onPress}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="qrcode-scan"
                size={27}
                color={Colors.grayLight}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      );
      break;
    case "Tailleur":
      return (
        <Animated.View
          style={[
            styles.contain,
            {
              transform: [{ translateY: translateY }],
              opacity,
            },
          ]}
        >
          <View style={styles.inputViewClient}>
            <Icon
              type={Icons.FontAwesome}
              name="search"
              size={24}
              color={Colors.grayLight}
              style={{ marginRight: 10 }}
            />

            <TextInput
              value={value}
              onChange={onChange}
              // placeholder={placeholder}
              style={styles.inputClient}
            />
            <TouchableOpacity style={styles.touchClient} onPress={onPress}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="qrcode-scan"
                size={27}
                color={Colors.grayLight}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      );
      break;

    default:
      break;
  }
  return (
    <View style={styles.contain}>
      <View style={styles.inputView}>
        <TextInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={styles.input}
        />
        <TouchableOpacity style={styles.touch} onPress={onPress}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default searchBar;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    zIndex: 1,
  },
  inputView: {
    width: "100%",
    height: 55,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: Colors.grayLight,
    height: 35,
    borderRadius: 250,
  },
  touch: {
    marginLeft: 10,
  },
  inputViewClient: {
    width: "95%",
    height: 55,
    backgroundColor: Colors.background,
    borderRadius: 20,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 40,
    elevation: 5,
  },
  inputClient: {
    flex: 1,
    paddingHorizontal: 8,
    // backgroundColor: Colors.background,
    height: 35,
    borderRadius: 250,
  },
  touchClient: {
    marginLeft: 10,
  },
});
