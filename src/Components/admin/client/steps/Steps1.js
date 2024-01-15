import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Buttom, InputModal } from "../../..";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../../Utils/Colors";
import Icon, { Icons } from "../../../../Utils/Icons";
const Steps1 = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [image, setImage] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const condition = !name && !prenom && !telephone && !email && !adress;
  return (
    <View style={styles.contain}>
      <View style={{ paddingVertical: 20 }}>
        <View style={styles.button}>
          <Image source={avatar} style={styles.photo} resizeMode="cover" />
          <TouchableOpacity
            style={{
              paddingVertical: 2,
              height: 30,
              width: 30,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 20,
              position: "absolute",
              right: 120,
              top: 120,
            }}
            onPress={() => {}}
          >
            <Icon
              type={Icons.MaterialCommunityIcons}
              name="camera-plus-outline"
              size={20}
              color={Colors.white}
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputModal
            iconName="account"
            placeholder="Nom"
            onChange={setName}
            style={styles.input}
            value={name}
          />
          <InputModal
            iconName="account"
            placeholder="Prenom"
            onChange={setPrenom}
            style={styles.input}
            value={prenom}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputModal
            iconName="phone"
            placeholder="Telephone"
            onChange={setTelephone}
            style={styles.input}
            value={telephone}
          />

          <InputModal
            iconName="map-marker"
            placeholder="Adrrese"
            onChange={setAdress}
            style={styles.input}
            value={adress}
          />
        </View>
      </View>
    </View>
  );
};

export default Steps1;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  photo: {
    width: 150,
    height: 150,

    borderRadius: 90,

    alignSelf: "center",
    elevation: 5,
    borderWidth: 1.5,
    borderColor: Colors.black,
  },
  input: {
    width: 157,
    height: 47,
    borderColor: Colors.primary,
    borderWidth: 2.5,
  },
});
