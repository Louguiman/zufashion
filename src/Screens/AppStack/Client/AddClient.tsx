import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

import { BackButton, Buttom, Steps1, Steps2 } from "../../../Components";
import Icon, { Icons } from "../../../Utils/Icons";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import Colors from "../../../Utils/Colors";
const { height, width } = Dimensions.get("screen");
const isIphone = Platform.OS == "ios";

const AddClient = ({ setCurrentLoader }) => {
  const [singleIndex, setsingleIndex] = useState(0);
  const onIndexChanged = (index) => {
    setsingleIndex(index);
  };

  return (
    <>
      <ImageBackground
        style={{ height: height / 5, width, paddingTop: 50 }}
        source={require("../../../../assets/mesureBanner3.jpg")}
        resizeMode="cover"
        // imageStyle={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            // position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <BackButton onPres={() => setCurrentLoader(null)} />

          <Text
            style={{
              fontSize: isIphone ? 20 : 25,
              fontWeight: isIphone ? "600" : "bold",
              letterSpacing: 0.5,
              color: Colors.white,
              // marginTop: 30,
            }}
          >
            Inscription
          </Text>
        </View>
      </ImageBackground>
      <View style={{ alignSelf: "center" }}>
        <SegmentedControlTab
          values={["Information Personnelle", "Mesure et Prix"]}
          selectedIndex={singleIndex}
          tabStyle={{
            borderColor: "transparent",
            backgroundColor: Colors.primary,
            // elevation: 5,
          }}
          tabsContainerStyle={{
            height: 40,
          }}
          activeTabStyle={{
            borderBottomWidth: 3,
            borderBottomColor: Colors.primary,
            backgroundColor: "transparent",
            borderRadius: 5,
          }}
          activeTabTextStyle={{
            fontSize: 18,
            fontWeight: "bold",
            color: Colors.primary,
          }}
          tabTextStyle={{
            fontWeight: "500",
            fontSize: 18,
            color: Colors.white,
          }}
          onTabPress={onIndexChanged}
        />

        <Swiper
          index={singleIndex}
          onIndexChanged={onIndexChanged}
          loop={false}
          showsPagination={false}
          style={{}}
        >
          <Steps1 />
          <Steps2 />
        </Swiper>
  
      </View>
      <Buttom
          onPress={() => {}}
          placeholder="Enregistre"
          type="primary"
          style={{
            zIndex: 1,
            width: 110,
            height: 30,
            padding: 2,
            // marginTop: 10,
            position: "absolute",
            top:0
          }}
        />
    </>
  );
};

export default AddClient;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
