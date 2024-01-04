import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Box, HeaderAgenda, RenderItem } from "../../../Components";
import { FlatList } from "react-native-gesture-handler";
import { agenda } from "../../../data/agenda";
const { width, height } = Dimensions.get("screen");
const Agenda = ({ setCurrentLoader }: any) => {
  const handlePress = (): any => {
    setCurrentLoader(null);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/atelier_banner.png")}
        style={styles.contain}
        resizeMode="cover"
      >
        <View style={{ position: "absolute" }}>
          <TouchableOpacity style={{ zIndex: 1 }} onPress={() => handlePress()}>
            <Icon
              type={Icons.Ionicons}
              name="chevron-back"
              size={40}
              color={Colors.black}
              style={{ margin: 5 }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: 1.5,
            color: Colors.black,
            marginLeft: 90,
            marginTop: 40,
          }}
        >
          Mon Agenda
        </Text>
      </ImageBackground>
      <ImageBackground
        source={require("../../../../assets/BackDrop.png")}
        style={styles.BlurView}
      >
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 10,
            left: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: Colors.white,
              textAlign: "left",
              width: 150,
            }}
          >
            Les Rendez-Vous Client
          </Text>
          <Image
            source={require("../../../../assets/iconsGestion/agenda.png")}
            style={{ height: 70, width: 70, marginLeft: 60 }}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
      <HeaderAgenda label={"Aujourd'hui"} date="01 janvier 2023" />
      <FlatList
        data={agenda}
        renderItem={({ item }) => <RenderItem item={item} />}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default Agenda;

const styles = StyleSheet.create({
  contain: {
    height: height / 5,
    width,
  },
  container: {
    backgroundColor: Colors.bottom,
    flex: 1,
  },
  BlurView: {
    position: "absolute",
    height: height / 1.3,
    width,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
  },
});
