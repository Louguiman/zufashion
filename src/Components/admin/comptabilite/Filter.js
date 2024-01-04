import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";

const Filter = ({ activeIndex, onSwitch, style }) => {
  return (
    <View style={[styles.contain, style]}>
      <Controlleur
        label="TOUT"
        activeIndex={activeIndex}
        handleSwicth={onSwitch}
      />
      <Controlleur
        label="Depences"
        activeIndex={activeIndex}
        handleSwicth={onSwitch}
      />
      <Controlleur
        label="Benefices"
        activeIndex={activeIndex}
        handleSwicth={onSwitch}
      />
    </View>
  );
};

const Controlleur = ({ label, activeIndex, handleSwicth }) => {
  return (
    <View>
      <TouchableOpacity onPress={handleSwicth} style={styles.contain}>
        <Text style={styles.txt}>{label}</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.dot,
          { backgroundColor: activeIndex ? Colors.white : "transparent" },
        ]}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  contain: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  dot: {
    width: "40%",
    height: 4,
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 2,
    marginTop: 2,
  },
  txt: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.white,
    textTransform: "capitalize",
  },
});
