import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import * as Animatable from "react-native-animatable";

import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
const AnimatedTouch = Animatable.createAnimatableComponent(TouchableOpacity);

const CardCatalogue = ({ item }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {isVisible && (
        <BlurView tint="dark" intensity={120} style={styles.blurView}>
          <TouchableOpacity
            onPress={() => setIsVisible(!isVisible)}
            style={{
              position: "absolute",
              right: 10,
              top: 5,
              height: 25,
              width: 25,
              backgroundColor: Colors.white,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              type={Icons.AntDesign}
              color={Colors.red}
              name="closecircle"
              size={20}
            />
          </TouchableOpacity>
          <View style={styles.BlurContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.BlurBtn}>
              <Icon
                type={Icons.FontAwesome5}
                color={Colors.green}
                name="edit"
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.BlurBtn}>
              <Icon
                type={Icons.MaterialIcons}
                color={Colors.red}
                name="delete-forever"
                size={24}
              />
            </TouchableOpacity>
          </View>
        </BlurView>
      )}
      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate("AppStack", {
        //     screen: "CollectionDetails",
        //     params: { item },
        //   })
        // }
        onPress={() => setIsVisible(!isVisible)}
        activeOpacity={0.8}
        style={styles.contain}
      >
        <ImageBackground
          source={item.cover}
          style={styles.card}
          resizeMode="cover"
          imageStyle={{ width: "100%", borderRadius: 20 }}
        >
          <View style={styles.header}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.white,
                // letterSpacing: 1.5,
                fontWeight: "900",
                // marginLeft: 10,
              }}
            >
              {item.title}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>by</Text>
              {""}
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "800",
                  marginLeft: 3,
                  minWidth: 15,
                  maxWidth: 100,
                }}
              >
                {item.title}
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={item.avatar}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 5,
                  // margin: 5,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CardCatalogue;

const styles = StyleSheet.create({
  card: {
    height: 190,
    width: 175,
    // padding: 1.5,
    borderRadius: 0,
    // elevation: 5,
    alignSelf: "center",
    marginHorizontal: 3,
    marginLeft: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30,
    margin: 5,
  },
  header: {
    position: "relative",
    backgroundColor: Colors.darkOverlayColor,
    top: 0,
    zIndex: 1,
    height: 40,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    backgroundColor: Colors.white,
    bottom: 10,
    zIndex: 1,
    height: 35,
    minWidth: 120,
    maxWidth: 150,
    elevation: 5,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
  },
  blurView: {
    height: 190,
    width: 175,
    position: "absolute",
    alignSelf: "center",
    marginHorizontal: 3,
    right: 0,
    zIndex: 1,
    borderRadius: 20,
  },
  BlurContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    top: 90,
    // right: 50,
  },
  BlurBtn: {
    height: 50,
    width: 50,
    backgroundColor: Colors.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
