import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Calendrie, Activite } from "../..";

const Journal = () => {
  return (
    <View style={styles.contain}>
      <Calendrie />
      <Activite />
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
