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
import { ButtonIcon, InputSection } from "../../../Components";

const Creation = ({ setCurrentLoader }: any) => {
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
        style={styles.bannere}
        resizeMode="cover"
        imageStyle={{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <View style={{ position: "absolute" }}>
          <TouchableOpacity
            style={{ zIndex: 1,marginTop:15 }}
            onPress={() => setCurrentLoader(null)}
          >
            <Icon
              type={Icons.Ionicons}
              name="chevron-back"
              size={40}
              color={Colors.black}
              style={{ margin: 5 }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 0.5,
              color: Colors.black,
              marginLeft: 15,
            }}
          >
            Nouvelle Catalogue
          </Text>
        </View>
        <ImageBackground
          source={require("../../../../assets/blur.png")}
          resizeMode="cover"
          style={styles.blur}
          imageStyle={{
            height: 170,
            borderRadius: 10,
          }}
        >
          <InputSection
            label="Nom de la Catalogue"
            Placeholder="ex: Catalogue Mondiale"
            onChange={setTitle}
            value={title}
            type="main"
            color={{}}
            style={{}}
          />
          <InputSection
            label="Description de la Catalogue"
            Placeholder="Decrire la catalogur (facultatif)"
            onChange={setDescription}
            value={description}
            type="main"
            color={{}}
            style={{}}
          />
        </ImageBackground>
      </ImageBackground>
      <ImageBackground
        source={require("../../../../assets/banner.png")}
        style={[styles.banner]}
        resizeMode="cover"
      >
        <ImageBackground
          source={require("../../../../assets/Container.png")}
          style={styles.blurView}
          resizeMode="cover"
        >
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Collection</Text>
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
              top: 185,
            }}
          >
            Médias
          </Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                // height:195
              }}
            >
         
                <>
                  <ButtonIcon
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
                  <Text style={styles.txt}>Une Photo de Couverture</Text>
                </>
    

              {image.map((item) => {
                return (
                  <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => pickImage()}
                  >
                    <Image
                      source={{ uri: item }}
                      style={styles.photo}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                // height:290,

              }}
            >
              <ButtonIcon
                placeholder="Ajouter"
                color={Colors.black}
                iconSize={24}
                iconeName="pluscircle"
                onPress={() => pickImages()}
                type={Icons.AntDesign}
                style={{
                  height: 45,
                  width: 150,
                  alignSelf: "center",
                  borderColor: Colors.green,
                  marginTop:50
                }}
              />
              <Text style={styles.txt}>Des Photo a la collection</Text>
              {images && (
              <FlatList
                data={images}
                horizontal
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <TouchableOpacity
                        onPress={() => onRemove(index)}
                        style={{
                          position: "absolute",
                          top: 5,
                          elevation: 5,
                          right: 5,
                          bottom: 0,
                          zIndex: 100,
                          backgroundColor: "white",
                          height: 30,
                          width: 30,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                        }}
                      >
                        <Icon
                          type={Icons.Entypo}
                          name="circle-with-cross"
                          size={27}
                          color="red"
                        />
                      </TouchableOpacity>
                      <Image
                        source={{ uri: item.uri }}
                        style={{ width: 150, height: 150, margin: 5 }}
                        resizeMode="cover"
                      />
                    </>
                  );
                }}
                keyExtractor={(item) => item.uri}
                // style={{ marginVertical: 50, paddingBottom: 100 }}
              />
            )}
            </View>
           
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default Creation;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  bannere: {
    height: 310,
    width: "100%",
  },
  blur: {
    height: 175,
    width: 330,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    padding: 10,
  },
  blurView: {
    height: 385,
    width: "98%",
    // marginTop:10
    zIndex: 100,
  },
  banner: {
    height: 385,
    width: "100%",
    position: "relative",
    bottom: -20,
    zIndex: 100,
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 2,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: Colors.white,
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
