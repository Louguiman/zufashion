import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputModal, InputSection, Buttom } from "../../Components";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { launchImagePicker } from "../../Utils/ImagePicker";

const { width, height } = Dimensions.get("screen");
const EditProfil = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  console.log(item);

  const [name, setName] = useState("" || item.name);
  const [telephone, setTelephone] = useState("" || item.telephone);
  const [prenom, setPrenom] = useState("" || item.prenom);
  const [email, setEmail] = useState("" || item.email);
  const [adress, setAdress] = useState("" || item.adress);
  const [image, setImage] = useState();
  const [avatar, setAvatar] = useState(item.avatar);
  const [isCheck, setIsCheck] = useState(false);

  const condition =
    !name && !prenom && !telephone && !email && !avatar && !adress;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await launchImagePicker();

    if (result) {
      setImage(result);
      setIsCheck(true);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.bgLineaire, Colors.bgLineaire1]}
      style={{ height, width }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 70,

            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginHorizontal: 10,
            }}
          >
            <Ionicons
              name="chevron-back-sharp"
              size={35}
              color={Colors.white}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginHorizontal: 50,
              fontSize: 18,
              fontWeight: "bold",
              color: Colors.white,
            }}
          >
            Modification du compte
          </Text>
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {!isCheck ? (
            <Image source={avatar} style={styles.photo} resizeMode="cover" />
          ) : (
            <Image
              source={{ uri: image }}
              style={styles.photo}
              resizeMode="cover"
            />
          )}

          <View style={styles.button}>
            <TouchableOpacity
              style={{
                paddingVertical: 2,
                height: 30,
                width: 30,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 20,
              }}
              onPress={pickImage}
            >
              <MaterialCommunityIcons
                name="camera-plus-outline"
                size={20}
                color={Colors.white}
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 15 }}>
            <InputModal
              iconName="account"
              placeholder="Nom"
              onChange={setName}
              value={name}
            />
            <InputModal
              iconName="account"
              placeholder="Prenom"
              onChange={setPrenom}
              value={prenom}
            />
            <InputModal
              iconName="phone"
              placeholder="Telephone"
              onChange={setTelephone}
              value={telephone}

            />
            <InputModal
              iconName="email"
              placeholder="Email"
              onChange={setEmail}
              value={email}
            />
            <InputModal
              iconName="map-marker"
              placeholder="Adrrese"
              onChange={setAdress}
              value={adress}
            />
          </View>
          {condition ? (
            <Buttom
              onPress={() => {}}
              placeholder="Enregistre"
              type="primary"
              style={{}}
              disabled={true}
            />
          ) :null}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EditProfil;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  container: {
    // backgroundColor: Colors.accent,
  },
  photo: {
    width: 150,
    height: 150,

    marginTop: 5,

    borderRadius: 90,

    alignSelf: "center",
    elevation: 5,
    borderWidth: 2.5,
    borderColor: Colors.primary,
  },
  button: {
    position: "absolute",
    top: 125,
    right: 115,
    zIndex: 1,
  },
});
