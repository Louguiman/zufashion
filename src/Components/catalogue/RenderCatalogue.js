import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Colors from "../../Utils/Colors";

const RenderCatalogue = ({ item, navigation }) => {
  return (
    <View style={styles.contain}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { id: item.id })}
        style={styles.card}
      >
        <Image source={item.cover} style={styles.avatar} resizeMode="cover" />
        <Text style={styles.txt}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderCatalogue;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  card: {
    height: 80,
    width: "90%",
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
    backgroundColor: Colors.renderCatlogue,
    padding: 5,
    borderRadius: 10,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 15,
    elevation: 5,
  },
  txt: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    letterSpacingm: 0.5,
    marginLeft: 20,
  },
});
