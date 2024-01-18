import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { TouchableOpacity } from "react-native-gesture-handler";
import Icon, { Icons } from "../../../Utils/Icons";
import Colors from "../../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton, ButtonIcon } from "../../../Components";

const Modify = ({ route }) => {
  const { item } = route.params;

  // console.log("abba",item);
 

  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [isCheck, setIsCheck] = useState(true);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [10, 13],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage([result.uri]);
      console.log(image);
    }
  };
  const pickImages = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 10,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages(result.uri ? [...result.uri] : result.selected);
    }
    setIsCheck(false);
  };
  const onRemove = (index: any) => {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  };
  return (
    <View style={styles.contain}>
      <ImageBackground
        source={require("../../../../assets/banner.png")}
        style={[styles.banner]}
        resizeMode="cover"
      >
        <ImageBackground
          source={require("../../../../assets/Container.png")}
          style={styles.blurView}
          resizeMode="cover"
          imageStyle={{
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <View style={{ padding: 5 }}>
                   <BackButton onPres={()=>navigation.goBack()}/>

            <Text style={styles.headerTxt}>
              Ajouter un Modele a la Collections
            </Text>
          </View>

          <Text
            style={{
              transform: [{ rotate: "-90deg" }],
              fontSize: Platform.OS === "ios" ? 14 : 18,
              fontWeight: Platform.OS === "ios" ? "600" : "bold",
              letterSpacing: 0.5,

              zIndex: 1,
              position: "absolute",
              left: -20,
              top: 165,
            }}
          >
            Modele
          </Text>
          <Text
            style={{
              transform: [{ rotate: "-90deg" }],
              fontSize: Platform.OS === "ios" ? 14 : 18,
              fontWeight: Platform.OS === "ios" ? "600" : "bold",
              letterSpacing: 0.5,

              zIndex: 1,
              position: "absolute",
              left: -20,
              bottom: 230,
            }}
          >
            Variant
          </Text>
          <View
            style={{
              justifyContent: "center",
              height: 150,
              alignItems: "center",
            }}
          >
            {item.length === 0 ? (
              <Text>ABBA</Text>
            ) : (
              <Image
                source={item[0]}
                style={{ height: 130, width: 130 }}
                borderRadius={10}
                resizeMode="cover"
              />
            )}
            {/* <ButtonIcon
              placeholder="Ajouter"
              color={Colors.black}
              iconSize={24}
              iconeName="pluscircle"
              onPress={() => pickImage()}
              type={Icons.AntDesign}
              style={{
                height: 45,
                width: 150,
                alignSelf: "center",
                borderColor: Colors.green,
              }}
            />
            <Text style={styles.txt}>Une Photo de Couverture</Text> */}
          </View>
          <View style={{ height: 350, marginTop: 10 }}>
            <FlatList
              data={item}
              numColumns={2}
              ListEmptyComponent={
                <View>
                  <Text>ABBA</Text>
                </View>
              }
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={item}
                    style={{
                      height: 135,
                      width: 135,
                      margin: 2,
                      borderRadius: 10,
                      alignSelf: "center",
                    }}
                    resizeMode="cover"
                  />
                </View>
              )}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{
                flexGrow: 1,
              }}
            />
          </View>

          <ButtonIcon
            placeholder="Ajouter"
            color={Colors.black}
            iconSize={24}
            iconeName="pluscircle"
            onPress={() => pickImages()}
            type={Icons.AntDesign}
            style={{
              height: 35,
              width: 120,
              alignSelf: "center",
              borderColor: Colors.green,
              // marginTop: 10,
              position: "absolute",
              bottom:Platform.OS === "ios" ? 50 : 25,
            }}
          />
        </ImageBackground>
        <ButtonIcon
          placeholder="Valider"
          color={Colors.green}
          iconSize={24}
          iconeName="checkcircle"
          onPress={() => {}}
          type={Icons.AntDesign}
          txtColor={Colors.green}
          style={{
            height: 35,
            width: 130,
            alignSelf: "center",
            borderColor: Colors.green,
            // marginTop: 40,
            color: Colors.green,
            zIndex: 1,
            position: "absolute",
            bottom:Platform.OS === "ios" ? 10 : 0,
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Modify;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },

  blurView: {
    height:Platform.OS === "ios" ? "93%" : "95.9%",
    width: "96.5%",
    marginTop:Platform.OS === "ios" ? 50 : 10,
    // flex:2,
    // position: "absolute",
    marginLeft: 8,
  },
  banner: {
    height: "100%",
    width: "100%",
  },

  headerTxt: {
    fontSize:Platform.OS === "ios" ? 11 : 15,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: Colors.black,
    textTransform: "uppercase",
  },
  txt: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: Colors.white,
    textAlign: "center",
    margin: 2,
  },
  photo: {
    width: 150,
    height: 150,
  },
});
