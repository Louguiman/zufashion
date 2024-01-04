import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ImageView from "react-native-image-viewing";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../../Utils/Colors";
import { collectios } from "../../data/collections";
import CollectionCardLeteral from "../../Components/collections/CollectionCardLeteral";
import { CollectionCardBottom } from "../../Components";
import Icon, { Icons } from "../../Utils/Icons";

const CollectionDetails = ({ route, navigation }: any) => {
  const { item } = route.params;
  // console.log("item :", item);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    item.image[0]["content"][0]
  );
  const [isSelect, setIsSelect] = useState(0);
  const [isSelectBottom, setIsSelectBottom] = useState(0);
  // console.log("bottom index: ", isSelectBottom);
  // console.log("lateral index: ", isSelect);

  useEffect(() => {
    setCurrentImageIndex(item.image[activeIndex]["content"][0]);
    return () => {};
  }, [activeIndex]);

  const handleChangeIndex = (image: any) => {
    setCurrentImageIndex(image);
  };
  const handleChangeActive = (index: any) => {
    setActiveIndex(index);
    setIsSelectBottom(index);
  };
  return (
    <SafeAreaView style={styles.contain}>
      <ImageBackground
        source={currentImageIndex}
        style={styles.container}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 0, zIndex: 1 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              type={Icons.Ionicons}
              name="chevron-back-outline"
              color={Colors.white}
              size={40}
              style={{}}
            />

            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                letterSpacing: 0.5,
                // marginHorizontal: 20,
                color: Colors.white,
              }}
            >
              Collections
            </Text>
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              letterSpacing: 0.5,
              marginHorizontal: 30,
              color: Colors.white,
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={{
            position: "absolute",
            right: 0,
            top: 90,
            zIndex: 1,
            borderRadius: 10,
            backgroundColor: Colors.lightOverlayColor,
            flexGrow: 1,
          }}
          style={{
            height: "82%",
          }}
        >
          {item.image[activeIndex]["content"].map((item: any, index: any) => {
            return (
              <CollectionCardLeteral
                gallery={item}
                onPress={handleChangeIndex}
                isSelect={isSelect}
                setIsSelect={setIsSelect}
                index={index}
              />
            );
          })}
        </ScrollView>
      </ImageBackground>
      <FlatList
        data={item.image}
        horizontal
        renderItem={({ item, index }) => (
          <CollectionCardBottom
            content={item.content}
            itemIndex={index}
            onPress={handleChangeActive}
            isSelect={isSelectBottom}
          />
        )}
        contentContainerStyle={{ flexGrow: 1, marginVertical: 5 }}
      />
    </SafeAreaView>
  );
};

export default CollectionDetails;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
