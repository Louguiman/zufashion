import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Box, Compter, Filter } from "../../../Components";
import { FlatList } from "react-native-gesture-handler";
import { confection } from "../../../data/confections";
const { width, height } = Dimensions.get("screen");
const Confections = ({ setCurrentLoader }: any) => {
  const navigation = useNavigation();
  const handlePress = (): any => {
    setCurrentLoader(null);
  };

  const headerHeight = 0;
  let scrollValue = 0;
  let headerVisible = true;
  let focused = false;

  const animation = useRef(new Animated.Value(1)).current;
  const TranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, headerHeight / 2 - 2],
  });

  const opacity = animation;
  const onScroll = (e) => {
    if (focused) return;
    const y = e.nativeEvent.contentOffset.y;
    if (y > scrollValue && headerVisible && y > headerHeight / 2) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = false;
    }
    if (y < scrollValue && !headerVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = true;
    }
    scrollValue = y;
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
            marginLeft: 50,
            marginTop: 40,
          }}
        >
          Mes Confections
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
              width: 140,
              
            }}
          >
          Les Commandes Réalisées
          </Text>
          <Image
            source={require("../../../../assets/iconsGestion/confection.png")}
            style={{ height: 70, width: 70, marginLeft: 60 }}
            resizeMode="cover"
          />
        </View>
        <Compter
         translateY={TranslateY}
         opacity={opacity}
          task={500}
          taslEnd={50}
          total={550}
          style={{ position: "absolute", top: 98, }}
        />
        <Animated.FlatList
          data={confection}
          onScroll={onScroll}
          numColumns={2}
          showsVerticalScrollIndicator={true}
          ListHeaderComponent={
            <View
              style={{
                marginBottom: 20,
                paddingTop: 30,
                width: "50%",
              }}
            >
              <Filter activeIndex={{}} onSwitch={{}} style={{}} />
            </View>
          }
          renderItem={({ item }) => (
            <Image
              source={item}
              style={{
                height: 160,
                width: 160,
                margin: 3,
                borderRadius: 10,

              }}
              resizeMode="cover"
            />
          )}
          style={{
            backgroundColor: "#F7F7F752",
            width: "98%",

            alignSelf: "center",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,

            paddingTop: 20,
            // marginTop:110,
            position: "relative",
            top: 220,
            flexGrow: 1,
            padding:5,

          }}
          contentContainerStyle={{
            paddingBottom:250

          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Confections;

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
