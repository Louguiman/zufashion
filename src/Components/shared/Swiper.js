import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ImageView from "react-native-image-viewing";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Swiper from "react-native-swiper";
import Colors from "../../Utils/Colors";

const { height, width } = Dimensions.get("screen");
const Swipers = (props) => {
  const { image, type = "main" || "details" || "card" } = props;
  const nombre2photo = image.length;
  const [currentImageIndex, setImageIndex] = useState(0);
  const [visible, setIsVisible] = useState(false);
  const onSelect = (index) => {
    setImageIndex(index);
    setIsVisible(true);
  };
  switch (type) {
    case "main":
      return (
        <View
          style={[
            {
              height: props.height,
              width: props.width,
              borderRadius: props.raduius,
            },
            { ...props },
          ]}
        >
          <Swiper
            activeDotColor={Colors.primary}
            dotStyle={{
              marginBottom: 0,
            }}
            dotColor="white"
            activeDotStyle={{
              marginBottom: 0,
            }}
          >
            {image.map((item, index, key) => {
              // console.log("ok");
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  delayLongPress={5000}
                  style={{ flex: 1, zIndex: 1000 }}
                  onPress={() => onSelect(index)}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              );
            })}
          </Swiper>

          <View style={styles.iconPhoto}>
            <MaterialCommunityIcons
              name="camera"
              size={12}
              color="white"
              style={{ marginRight: 2 }}
            />
            <Text style={{ color: "white", fontSize: 12 }}>{nombre2photo}</Text>
          </View>
          <ImageView
            images={image.map((image) => image.image)}
            imageIndex={currentImageIndex}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
            animationType="fade"
            presentationStyle="fullScreen"
            doubleTapToZoomEnabled
          />
        </View>
      );
      break;
    case "details":
      return (
        <View
          style={[
            {
              height: props.height,
              width: props.width,
              borderRadius: props.raduius,
            },
            { ...props },
          ]}
        >
          <Swiper
            activeDotColor={Colors.primary}
            dotStyle={{
              marginBottom: 0,
              position: "relative",
              top: 0,
            }}
            dotColor="white"
            activeDotStyle={{
              marginBottom: 0,
            }}
            nextButton
          >
            {image.map((item, index, key) => {
              // console.log("ok");
              return (
                <View
                  activeOpacity={0.8}
                  delayLongPress={5000}
                  style={{ flex: 1, zIndex: 1000 }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode="cover"
                  />
                </View>
              );
            })}
          </Swiper>
        </View>
      );
      break;
    case "card":
      return (
        <View
          style={[
            {
              height: props.height,
              width: props.width,
              borderRadius: props.raduius,
            },
            { ...props },
          ]}
        >
          <Swiper
            loop={true}
            activeDotColor={Colors.primary}
            dotStyle={{
              marginBottom: 0,
            }}
            dotColor="white"
            activeDotStyle={{
              marginBottom: 0,
            }}
            // autoplay
          >
            {image.map((item, index, key) => {
              // console.log("ok");
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  delayLongPress={5000}
                  style={{ flex: 1, zIndex: 1000 }}
                  onPress={() => onSelect(index)}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              );
            })}
          </Swiper>

          <View style={styles.iconPhoto}>
            <MaterialCommunityIcons
              name="camera"
              size={12}
              color="white"
              style={{ marginRight: 2 }}
            />
            <Text style={{ color: "white", fontSize: 12 }}>{nombre2photo}</Text>
          </View>
          <ImageView
            images={image.map((image) => image.image)}
            imageIndex={currentImageIndex}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
            animationType="fade"
            presentationStyle="fullScreen"
            doubleTapToZoomEnabled
          />
        </View>
      );
      break;

    default:
      break;
  }
};

export default Swipers;

const styles = StyleSheet.create({
  iconPhoto: {
    position: "absolute",
    bottom: 5,
    left: 10,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
