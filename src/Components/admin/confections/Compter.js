import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Animated,
} from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { BlurView } from "expo-blur";
const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);
const Compter = ({ total, taslEnd, task, style, translateY, opacity }) => {
  return (
    <AnimatedImageBackground
      source={require("../../../../assets/blurConfection.png")}
      style={[
        styles.contain,
        style,
        {
          transform: [{ translateY: translateY }],
          opacity,
        },
      ]}
      resizeMode="stretch"
    >
      <View style={{ flex: 2, padding: 10 }}>
        <Text style={{ fontSize: 70, color: Colors.white, fontWeight: "bold" }}>
          {total}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: Colors.white,
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 0.5,
            marginLeft: 10,
          }}
        >
          Total
        </Text>
      </View>
      <View style={{ flex: 1.2 }}>
        <View
          style={{
            flex: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../../assets/iconsGestion/Task.png")}
              style={{ height: 35, width: 35 }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
                color: Colors.white,
                fontWeight: "bold",
              }}
            >
              {taslEnd}
            </Text>
          </View>
          <Text
            style={{ fontSize: 15, color: Colors.white, fontWeight: "600" }}
          >
            Terminé
          </Text>
        </View>
        <View
          style={{
            flex: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../../assets/iconsGestion/progress.png")}
              style={{ height: 35, width: 35 }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
                color: Colors.white,
                fontWeight: "bold",
              }}
            >
              {task}
            </Text>
          </View>
          <Text
            style={{ fontSize: 15, color: Colors.white, fontWeight: "600" }}
          >
            En Cours
          </Text>
        </View>
      </View>
    </AnimatedImageBackground>
  );
};

export default Compter;

const styles = StyleSheet.create({
  contain: {
    height: 160,
    width: "96%",

    flexDirection: "row",

    alignSelf: "center",
    zIndex: 1,
  },
});
