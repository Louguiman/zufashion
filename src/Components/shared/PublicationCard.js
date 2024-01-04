import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import * as Animatable from "react-native-animatable";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform,
  Alert,
  TextInput,
  Modal,
  Pressable,
  Button,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import Swiper from "../shared/Swiper";
import { useNavigation } from "@react-navigation/native";

import useFavoris from "../../Context/FavorisContext";
const AnimatedTouch = Animatable.createAnimatableComponent(TouchableOpacity);
import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Swipers from "./Swiper";

const PublicationCard = ({ item }) => {
  //   console.log("item: ", item);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.contain}>
      <Animated.View style={styles.container} key={item.id}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AppStack", {
              screen: "Publication",
              params: { item },
            })
          }
        >
          <View style={styles.header}>
            <Swipers
              height={100}
              width={Platform.OS === "ios" ? "100%" : "100%"}
              image={item.img}
              borderRadius={150}
              type="card"
            />
          </View>
          <View style={styles.desc}>
            <Text style={styles.descTxt} multiline>
              {item.desc}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default PublicationCard;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    // height: 70,
  },
  container: {
    // padding: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    backgroundColor: Colors.white,
    borderColor: "gray",
    borderwidth: 0.8,
    width: 170,
    alignSelf: "center",
    height: 150,
    // maxWidth: "98%",
    overflow: "hidden",
  },
  desc: {
    padding: 2,
  },
  header: {
    alignSelf: "center",
  },

  descTxt: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "400",
  },
});
