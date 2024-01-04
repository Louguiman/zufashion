import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";
import { activity } from "../../../data/activity";
import CardActivity from "./CardActivity";

const Activite = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: "bold", letterSpacing: 1.5 }}>
        Activité
      </Text>
      <FlatList
        data={activity}
        renderItem={({ item, index }) => (
          <CardActivity item={item} index={index} />
        )}
      />
    </View>
  );
};

export default Activite;

const styles = StyleSheet.create({
  container: {
    flex: 1.6,
    marginTop: -5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
});
