import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

const LateralBar = ({ like, follower, note }) => {
  return (
    <View style={styles.contain}>
      <View style={styles.lateral}>
        <View style={{ alignSelf: "center" }}>
          <MaterialIcons
            name="follow-the-signs"
            size={24}
            color={Colors.darkGray}
          />
          <Text style={styles.txtLateral}>{follower}</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <AntDesign name="hearto" size={24} color={Colors.darkGray} />
          <Text style={styles.txtLateral}>{like}</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <AntDesign name="staro" size={24} color={Colors.darkGray} />
          <Text style={styles.txtLateral}>{note}</Text>
        </View>
      </View>
    </View>
  );
};

export default LateralBar;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    position: "absolute",
    top: 120,
    // padding: 10,

    backgroundColor: Colors.lightOverlayColor,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  lateral: {
    height: 145,
    justifyContent: "center",
    alignItems: "center",

    width: 55,
  },
  txtLateral: {
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
