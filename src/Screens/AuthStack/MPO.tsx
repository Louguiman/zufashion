import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Buttom, InputSection } from "../../Components";
import Icon, { Icons } from "../../Utils/Icons";
import Colors from "../../Utils/Colors";
const { width, height } = Dimensions.get("screen");

const MPO = ({navigation}:any) => {
  const [tel, setTel] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/Auth/bg-login.png")}
        style={styles.contain}
        resizeMode="cover"
      >
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{ position: "absolute" }}>
          <Icon
            type={Icons.Ionicons}
            name="chevron-back-outline"
            color={Colors.black}
            size={50}
            style={{}}
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/Auth/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <ImageBackground
          source={require("../../../assets/Auth/blur-login.png")}
          style={{
            height: 150,
            width: Platform.OS === "ios" ? 375 : 360,
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: 30,
            borderRadius: 10,
            top: Platform.OS === "ios" ? 260 : 295,
            marginBottom: 50,
          }}
        >
          <InputSection
            Placeholder="Saisir Votre de Telephone..."
            label="Telephone"
            onChange={setTel}
            value={tel}
            type="main"
          />
        </ImageBackground>
        <View
          style={{
            position: "absolute",
            bottom: 190,
            alignSelf: "center",
          }}
        >
          <Buttom
            onPress={() => {}}
            placeholder="Récuperation"
            type={"primary"}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MPO;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain: {
    height,
    width,
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  title: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.5,
    textAlign: "center",
  },
  divider: {
    width: "80%",
    height: 2,
    backgroundColor: "white",
    marginLeft: 40,
    margin: 2,
  },
  desc: {
    width: 160,
    // height: 150,
    color: "white",
    fontSize: 18,
    letterSpacing: 1.1,
    // fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    marginVertical: 5,
    alignSelf: "center",
  },
});
