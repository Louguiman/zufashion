import React, { useCallback, useMemo, useRef, useState } from "react";

import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  Box,
  Buttom,
  Header,
  InputModal,
  InputSection,
} from "../../Components";
import Icon, { Icons } from "../../Utils/Icons";
import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomSheet from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import { launchCamera, launchImagePicker } from "../../Utils/ImagePicker";

const Poste = ({ navigation }: any) => {
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();

  const launcnCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result =await launchCamera()

    if (!result) {
      setImage([...result, { ...result }]);
      // console.log("image", image);
    }
  };
  const pickImages = async () => {
    // No permissions request is necessary for launching the image library

    let result =await launchImagePicker()

    if (!result) {
      setImages(result.uri ? [...result.uri] : result.selected);
    }
  };
  const onRemove = (index: any) => {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  };
  const onRemove1 = (index: any) => {
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  };
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = ["25%", "25%"];

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            type={Icons.Ionicons}
            name="chevron-back-outline"
            color={Colors.black}
            size={40}
            style={{ marginBottom: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            letterSpacing: 0.5,
            minWidth: 50,
            maxWidth: 220,
          }}
        >
          Publication
        </Text>
        {desc && (
          <Buttom
            onPress={() => {}}
            placeholder="Posté"
            type="primary"
            style={{ height: 40, width: 80 }}
          />
        )}
      </View>

      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 60,
          }}
        >
          <View>
            <Image
              source={require("../../../assets/profil.jpg")}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: Colors.green,
                position: "absolute",
                bottom: 3,
                right: 0,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "800",
              letterSpacing: 1.5,
              marginTop: -30,
              marginLeft: 10,
            }}
          >
            Zoumana Kane
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setDesc}
          value={desc}
          placeholder="Que Pensez-Vous?..."
          placeholderTextColor={Colors.gray}
          multiline
        />
      </View>
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
      {image && (
        <FlatList
          data={image}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => onRemove1(index)}
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
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Box
            icone="Camera"
            onPress={launcnCamera}
            placeholder="Camera"
            bg={Colors.primary}
            type="main"
            style={{ height: 110 }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>OU</Text>
          <Box
            icone="Gallery"
            onPress={pickImages}
            placeholder="Galerie"
            bg={Colors.bottom}
            type="main"
            style={{ height: 110 }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default Poste;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    paddingTop: 25,
  },
  logoPoste: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginLeft: 85,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    alignItems: "center",
    minWidth: 350,
    maxWidth: 420,
    // padding: 10,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  input: {
    height: 90,
    margin: 12,
    // borderWidth: 0.5,
    padding: 10,
    borderRadius: 8,
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1.5,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 40,
  },
});
