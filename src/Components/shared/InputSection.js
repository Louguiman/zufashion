import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

const InputSection = ({
  label,
  value,
  onChange,
  Placeholder,
  type = "main",
  style,
  color,
}) => {
  // console.log(value);
  const [isVerif, setIsVerif] = useState(true);
  if (type) {
    return (
      <View style={[styles.contain, style]}>
        <Text style={styles.title}>{label}</Text>
        <View>
          <TextInput
            placeholder={Placeholder}
            value={value}
            onChange={onChange}
            style={styles.Input}
            placeholderTextColor={[Colors.lightOverlayColor, color]}
          />
          <View style={styles.divider} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.contain}>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.container}>
          <TextInput
            placeholder={Placeholder}
            value={value}
            onChange={onChange}
            style={styles.Input}
            placeholderTextColor={Colors.lightOverlayColor}
            secureTextEntry={isVerif}
          />
          <TouchableOpacity onPress={() => setIsVerif(!isVerif)}>
            <EvilIcons name="lock" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: Platform.OS === "ios" ? "500" : "900",
    lineHeight: 19,
  },
  Input: {
    height: 50,
    // width: "100%",
    marginLeft: Platform.OS === "ios" ? 16 : 16,
    fontSize: 16,
    fontWeight: "600",
    color: Colors.white,
  },
  divider: {
    height: 1,
    width: "100%",
    alignSelf: "center",

    backgroundColor: "#37AA9C",
    marginLeft: 15,
  },
});
export default InputSection;
