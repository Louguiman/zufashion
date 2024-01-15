import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { BackButton, Box, InputModal } from "../../..";
import * as ImagePicker from "expo-image-picker";

import Colors from "../../../../Utils/Colors";
import Icon, { Icons } from "../../../../Utils/Icons";

const StepBanner = ({
  prix,
  setPrix,

  model,
  setModel,
}) => {
  const [image, setImage] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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

    setIsCheck(true);
    setModalVisible(!modalVisible);
  };

  const launcnCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage([...image, { ...result }]);
      // console.log("image", image);
    }
    setModalVisible(!modalVisible);
  };

  return (
    <BlurView style={styles.container} tint="dark" intensity={80}>
      <View style={{ justifyContent: "center", paddingTop: 15 }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={
            {
              // height: 250,
              // justifyContent: "center",
              // width: 150,
            }
          }
        >
          {!isCheck ? (
            <View style={{ padding: 5, alignItems: "center" }}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="camera-party-mode"
                size={64}
                color={Colors.white}
              />

              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "800",
                  // letterSpacing: 0.5,
                  color: Colors.white,
                  textAlign: "center",
                }}
              >
                Echantillon du Tissus
              </Text>
            </View>
          ) : (
            image.map((item) => {
              return (
                <Image
                  source={{ uri: item }}
                  style={styles.photo}
                  resizeMode="cover"
                />
              );
            })
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <InputModal
            iconName="palette-advanced"
            placeholder="Prix"
            onChange={setPrix}
            value={prix}
            style={{ borderColor: Colors.primary, borderWidth: 2.5 }}
          />

          <InputModal
            iconName="globe-model"
            placeholder="Modele"
            onChange={setModel}
            value={model}
            style={{ borderColor: Colors.primary, borderWidth: 2.5 }}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <BackButton onPres={() => setModalVisible(!modalVisible)} />
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
                onPress={pickImage}
                placeholder="Galerie"
                bg={Colors.bottom}
                type="main"
                style={{ height: 110 }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </BlurView>
  );
};

export default StepBanner;

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
    borderRadius: 50,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  photo: {
    width: 160,
    height: 35,
    height: 160,

    marginTop: 5,

    borderRadius: 20,

    alignSelf: "center",
    elevation: 5,
    marginLeft: -30,
  },
  modalView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 280,
    width: 320,

    alignSelf: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
