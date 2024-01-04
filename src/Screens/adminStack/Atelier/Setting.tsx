import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Box } from "../../../Components";
const { width, height } = Dimensions.get("screen");
const Setting = ({ setCurrentLoader }) => {
  const navigation = useNavigation();
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

          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 0.5,
              color: Colors.black,
              marginLeft: 15,
            }}
          >
            Atelier
          </Text>
        </View>
      </ImageBackground>
      <BlurView tint="light" intensity={40} style={styles.BlurView}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: Colors.white,
            textAlign: "center",
            position: "absolute",
            top: 10,
            left: 50,
          }}
        >
          Tout Concernant Votre Atelier
        </Text>
      </BlurView>
    </View>
  );
};

export default Setting;

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
