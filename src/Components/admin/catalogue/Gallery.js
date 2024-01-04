import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";

const Gallery = ({ content }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Modify", { item: content })}
      style={styles.contain}
    >
      <Image source={content[0]} style={styles.img} resizeMode="cover" />
      <View style={styles.container}>
        <Icon
          type={Icons.FontAwesome}
          name="camera"
          color={Colors.white}
          size={15}
        />
        <Text style={styles.txt}>{content.length}</Text>
      </View>
    </TouchableOpacity>
  );
  // content.map((element) => {
  //   console.log("img", element);

  // });
};

export default Gallery;

const styles = StyleSheet.create({
  img: {
    height: 160,
    width: 160,
    margin: 3,
    borderRadius: 10,

    // alignSelf: "center",
  },
  txt: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.white,
  },
  container: {
    width: 35,
    height: 25,
    backgroundColor: Colors.black,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 2,
    position: "absolute",
    bottom: 10,
    left: 5,
  },
});
