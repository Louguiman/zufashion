import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Animated from "react-native-reanimated";
import IconGestions from "./IconGestion";
import Colors from "../../Utils/Colors";
const AnimatedTouch = Animatable.createAnimatableComponent(TouchableOpacity);

const Box = ({
  icone,
  onPress,
  placeholder,
  bg,
  type = "main" || "atelier",
  subTilte,
  style,
}) => {
  switch (type) {
    case "main":
      return (
        <AnimatedTouch
          delay={200}
          duration={300}
          style={[styles.container, style, { backgroundColor: bg }]}
          onPress={onPress}
        >
          <IconGestions
            icon={icone}
            size={75}
            style={{ marginBottom: 10, marginLeft: 25 }}
          />
          <Text
            style={{
              fontSize: 16,
              color: Colors.white,
              fontWeight: Platform.OS === "ios" ? "400" : "800",
              letterSpacing: 0.5,
            }}
          >
            {placeholder}
          </Text>
        </AnimatedTouch>
      );
      break;
    case "atelier":
      return (
        <AnimatedTouch
          delay={200}
          duration={300}
          style={[styles.container_atelier, style, { backgroundColor: bg }]}
          onPress={onPress}
        >
          <IconGestions
            icon={icone}
            size={30}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              fontWeight: Platform.OS === "ios" ? "400" : "800",
              letterSpacing: 0.5,
            }}
          >
            {placeholder}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.black,
              fontWeight: Platform.OS === "ios" ? "400" : "800",
              letterSpacing: 0.5,
              position: "absolute",
              bottom: 10,
              width: Platform.OS === "ios" ? 120 : 90,
            }}
          >
            {subTilte}
          </Text>
        </AnimatedTouch>
      );
      break;

    default:
      break;
  }
};

export default Box;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 127,

    width: 127,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    elevation: 5,
  },
  container_atelier: {
    // flex: 1,
    height: 190,

    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    elevation: 5,
  },
});
