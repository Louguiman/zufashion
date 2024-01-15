import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  ScrollView,
  Image,
  FlatList,
  UIManager,
  LayoutAnimation,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

import { TouchableOpacity } from "react-native-gesture-handler";
import Icon, { Icons } from "../../../Utils/Icons";
import Colors from "../../../Utils/Colors";
import { BackButton, ButtonIcon, InputSection } from "../../../Components";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Creation = ({ setCurrentLoader }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [isVisible, setisVisible] = useState(true);
  const [Visible, setVisible] = useState(true);
  const [isCheck, setisCheck] = useState(false)

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
    setisCheck(true)
    opacity();
  };
  const pickImage2 = async () => {
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
    // opacity();
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
    if (Visible) {
      opacity2();
    }
  };

  const onRemove = (index: any) => {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
    console.log(images.length);
    if (images.length === 1) {
      opacity2();
    }
  };
  const opacity = () => {
    LayoutAnimation.easeInEaseOut();
    setisVisible(!isVisible);
  };
  const opacity2 = () => {
    LayoutAnimation.easeInEaseOut();
    setVisible(!Visible);
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
        <View style={{ position: "absolute", top: 25,flexDirection:'row',justifyContent:'space-around',alignItems:'center' }}>
        <BackButton onPres={()=>setCurrentLoader(null)}/>


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
        {
          isCheck&&<ButtonIcon
          placeholder="Valider"
          color={Colors.green}
          iconSize={24}
          iconeName="checkcircle"
          onPress={() => {}}
          type={Icons.AntDesign}
          txtColor={Colors.green}
          style={{
            height: 35,
            width: 120,
            alignSelf: "center",
            borderColor: Colors.green,
            marginTop: 20,
            position:"absolute",
            right:Platform.OS === "ios"?-45:-110
          }}
        />
        }
            
 
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
          <Text style={styles.headerTxt}>Collection</Text>

          <Text
            style={{
              transform: [{ rotate: "-90deg" }],
              fontSize: Platform.OS === "ios" ? 14 : 18,
              fontWeight: Platform.OS === "ios" ? "600" : "bold",
              letterSpacing: 0.5,

              zIndex: 1,
              position: "absolute",
              left: -25,
              top: 210,
            }}
          >
            Médias
          </Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1.5,
                justifyContent: "center",

                padding: 10,
              }}
            >
              {isVisible ? (
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
                      marginTop: -20,
                    }}
                  />
                  <Text style={styles.txt}>Une Photo de Couverture</Text>
                </>
              ) : (
                image.map((item) => {
                  return (
                    <TouchableOpacity
                      style={{ alignSelf: "center" }}
                      onPress={() => (isVisible ? pickImage() : pickImage2())}
                    >
                      <Image
                        source={{ uri: item }}
                        style={styles.photo}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                  );
                })
              )}
            </View>
            <View
              style={{
                flex: 2.8,
                justifyContent: "center",
              }}
            >
              {Visible ? (
                <>
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
                      marginTop: 20,
                    }}
                  />
                  <Text style={styles.txt}>Des Photos a la collection</Text>
                </>
              ) : (
                <FlatList
                  data={images}
                  horizontal
                  contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5,
                    marginLeft: 10,
                    paddingRight: 20,
                  }}
                  renderItem={({ item, index }) => {
                    return (
                      <>
                        <Pressable
                          onPress={() => onRemove(index)}
                          style={{
                            position: "absolute",
                            zIndex: 1,
                            right: 10,
                            top: 10,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.white,
                            padding: 2,
                          }}
                        >
                          <Icon
                            type={Icons.Entypo}
                            name="circle-with-cross"
                            size={27}
                            color="red"
                          />
                        </Pressable>
                        <Image
                          source={{ uri: item.uri }}
                          style={{
                            width: 170,
                            height: 180,
                            margin: 5,
                            borderRadius: 10,
                          }}
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
    height: 275,
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
    height: Platform.OS === "ios" ? 460 : 460,

    width: "98%",
    // marginTop:10
    zIndex: 100,
  },
  banner: {
    width: "100%",
    position: Platform.OS === "ios" ? "absolute" : "relative",
    bottom: Platform.OS === "ios" ? 0 : -10,
    zIndex: 100,
    height: Platform.OS === "ios" ? 460 : 460,
  },

  headerTxt: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
    color: Colors.white,
    padding: 5,
    marginLeft: 8,
    marginTop: 5,
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
    width: 140,
    height: 140,
    borderRadius: 15,
  },
});
