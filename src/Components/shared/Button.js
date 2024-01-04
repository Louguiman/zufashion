import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import Icon, { Icons } from "../../Utils/Icons";

const Button = ({
  onPress,
  placeholder,
  style,
  type = "primary" || "secondary" || "btnModal" || "btnRdv",
  disabled,
}) => {
  switch (type) {
    case "primary":
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.primary, style]}
          disabled={disabled}
        >
          <Text style={styles.BtnTxt}>{placeholder}</Text>
        </TouchableOpacity>
      );
      break;

    case "secondary":
      return (
        <TouchableOpacity onPress={onPress} style={[styles.secondary, style]}>
          <Text style={styles.BtnTxt}>{placeholder}</Text>
        </TouchableOpacity>
      );
      break;
    case "btnModal":
      return (
        <TouchableOpacity onPress={onPress} style={[styles.btnEnvoyer, style]}>
          <Text style={styles.btnTxt}>{placeholder}</Text>
        </TouchableOpacity>
      );
      break;
    case "btnRdv":
      return (
        <TouchableOpacity onPress={onPress} style={[styles.Btnrdv, style]}>
          <Text style={styles.btnTxt}>{placeholder}</Text>
        </TouchableOpacity>
      );
      break;
    case "btnRdvIcon":
      return (
        <TouchableOpacity onPress={onPress} style={[styles.Btnrdv, style]}>
          <Image
            source={require("../../../assets/rdv.png")}
            style={{ height: 25, width: 25 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      );
      break;

    default:
      break;
  }
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    width: 220,
    height: 50,
    backgroundColor: "#37AA9C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 5,
    alignSelf: "center",
    marginBottom: 10,
  },
  secondary: {
    width: 220,
    height: 50,
    borderColor: "#37AA9C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 5,
    alignSelf: "center",
    borderWidth: 1,
  },
  BtnTxt: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: Platform.OS === "ios" ? "400" : "900",
    letterSpacing: Platform.OS === "ios" ? 0 : 1.5,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: Platform.OS === "ios" ? 9 : 10,
    fontWeight: Platform.OS === "ios" ? "500" : "900",
    letterSpacing: 0.5,
  },
  btnEnvoyer: {
    height: 50,
    width: 150,
    borderRadius: 20,
    elevation: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bottom,
  },
  Btnrdv: {
    width: Platform.OS == "ios" ? 150 : 120,
    height: Platform.OS == "ios" ? 40 : 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 5,
    shadowColor: Colors.darkOverlayColor,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    alignSelf: "center",
  },
});
