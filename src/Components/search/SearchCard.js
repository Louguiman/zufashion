import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LateralBar from "./lateralBar";
import Colors from "../../Utils/Colors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import ImageView from "react-native-image-viewing";

const { width, height } = Dimensions.get("screen");
const SearchCard = ({ item }) => {
  return (
    <ImageBackground source={item.avatar} style={styles.contain} on>
      <LateralBar like={item.like} follower={item.follower} note={item.note} />
      <View style={styles.container}>
        <Text style={styles.fullname}>{item.fullname}</Text>
        <Text style={styles.bio}>{item.bio.substring(0, 220)}</Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 50,
            height: 30,
            width: 90,
            bottom: 5,
            backgroundColor: Colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600" }}>SUIVRE</Text>
          <Entypo name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  contain: {
    height: height - 200,
    width,
  },

  container: {
    backgroundColor: Colors.lightOverlayColor,
    height: 130,
    width: 280,
    position: "absolute",
    bottom: 50,
    right: 45,
    padding: 10,
    borderRadius: 30,
  },
  fullname: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: Colors.dark,
    marginLeft: 20,
    // padding: 5,
  },
  bio: {
    margin: 10,
    minWidth: 270,
    maxWidth: 550,
  },
});
