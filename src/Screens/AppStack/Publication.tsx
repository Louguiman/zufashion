import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useRef, useMemo, useCallback } from "react";
import Swipers from "../../Components/shared/Swiper";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import {
  SimpleLineIcons,
  EvilIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Comments from "../../Components/shared/Comments";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
const Publication = ({ route }: any) => {
  const { item } = route.params;
  console.log(item.comments);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();

  // variables
  const snapPoints = ["42%", "90%"];

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          zIndex: 10000,
          top: 30,
          left: 10,
          height: 40,
          width: 40,
          backgroundColor: "rgba(0,0,0,0.4)",
          padding: 5,
          borderRadius: 20,
        }}
      >
        <MaterialIcons name="arrow-back-ios" size={35} color={Colors.white} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Swipers
          height={420}
          width={Platform.OS === "ios" ? 0 : "99.4%"}
          image={item.img}
          borderRadius={0}
          alignSelf="center"
          type="details"
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        style={{ flex: 1 }}
      >
        <View style={styles.headerBottom}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: 170,
            }}
          >
            <Image
              source={item.avatar}
              style={{ height: 45, width: 45, borderRadius: 35 }}
              resizeMode="cover"
            />
            <View>
              <Text
                style={{
                  fontSize: Platform.OS === "android" ? 14.5 : 13,
                  fontWeight: Platform.OS === "android" ? "500" : "400",
                }}
              >
                {item.nom}
              </Text>
              <Text style={{ fontSize: 12.5, fontWeight: "300" }}>
                {item.createAt}
              </Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>{item.likeCount}</Text>
              <Ionicons name="heart-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>{item.shareCount}</Text>

              <EvilIcons name="share-apple" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>{item.shareCount}</Text>
              <Ionicons name="chatbubble-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.desc}>
          <Text
            style={{ fontSize: 12, fontWeight:Platform.OS === "android" ? "600" : "400", textAlign: "center" }}
          >
            {item.desc}
          </Text>
        </View>
        <View style={styles.comment}>
          <View style={{ flexDirection: "row",marginLeft:25 }}>
            <Image
              source={require("../../../assets/profil.jpg")}
              style={{
                height: 35,
                width: 35,
                borderRadius: 30,
                position: "relative",
                right: 15,
              }}
              resizeMode="cover"
            />
            <Image
              source={require("../../../assets/profil.jpg")}
              style={{
                height: 35,
                width: 35,
                borderRadius: 30,
                position: "relative",
                right: 30,
              }}
              resizeMode="cover"
            />
            <Image
              source={require("../../../assets/profil.jpg")}
              style={{
                height: 35,
                width: 35,
                borderRadius: 30,
                position: "relative",
                right: 45,
              }}
              resizeMode="cover"
            />
          </View>

          <Text style={{ fontSize: 12, fontWeight:Platform.OS === "android" ? "500" : "400" }}>
            Aiment par Moussa Zonko et 458autres personne
          </Text>
        </View>
        <View />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="send-circle-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item) => item.id}
          data={item.comments}
          renderItem={({ item }) => <Comments data={item} />}
        />
      </BottomSheet>
    </>
  );
};

export default Publication;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  header: {
    // position: "relative",
    top: 0,
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 5,
  },
  rightHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
    width: 150,
  },
  desc: { alignItems: "center", padding: 10 },

  comment: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
    // width: 350,
    paddingHorizontal:10
  },
  input: {
    height: 35,
    width: 280,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: Colors.bottom,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.bottom,
    borderRadius: 60,

    height: 35,
    elevation: 5,

    padding: 5,
  },
});
