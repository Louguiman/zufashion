import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Utils/Colors";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Ecran");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={{ color: Colors.white }}>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      // mode="margin"
      // edges={["right", "bottom", "left"]}
      style={[styles.container, StyleSheet.absoluteFillObject]}
    >
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 0 }}
        titleStyles={{
          fontSize:Platform.OS==="ios"? 18:20,
          fontWeight:Platform.OS==="ios"? "500":"900",
        }}
        pages={[
          {
            backgroundColor: Colors.white,

            image: (
              <View style={styles.lottie}>
                <Image
                  source={require("../../../assets/onboarding/agenda.png")}
                  style={{ height: 325, width: 325 }}
                  resizeMode="cover"
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle:
              "By boosting your productivity we help you to achieve higher goalsBy boosting your productivity we help you to achieve higher goalsBy boosting your productivity we help you to achieve higher goals",
          },
          {
            backgroundColor: Colors.white,

            image: (
              <View style={styles.lottie}>
                <Image
                  source={require("../../../assets/onboarding/agenda.png")}
                  style={{ height: 325, width: 325 }}
                  resizeMode="cover"
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle:
              "By boosting your productivity we help you to achieve higher goalsBy boosting your productivity we help you to achieve higher goalsBy boosting your productivity we help you to achieve higher goals",
          },
          {
            backgroundColor: Colors.white,

            image: (
              <View style={styles.lottie}>
                <Image
                  source={require("../../../assets/onboarding/agenda.png")}
                  style={{ height: 325, width: 325 }}
                  resizeMode="cover"
                />
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goalsBy boosting your productivity we help you to achieve higher goalsBy boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
  },
  lottie: {
    // width: width*0.9,
    // height: width
  },
  doneButton: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    color: "white",
  },
});
