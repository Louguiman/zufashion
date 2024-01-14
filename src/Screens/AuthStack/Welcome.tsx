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
import React from "react";
import { Buttom } from "../../Components";
const { width, height } = Dimensions.get("screen");
const Welcome = ({ navigation }: any) => {
  const HandleClient = () => {
    navigation.navigate("Auth");
  };
  const HandleTailleur = () => {
    navigation.navigate("Auth");
  };
  return (
    <ImageBackground
      source={require("../../../assets/Auth/bg-welcome.png")}
      style={styles.contain}
      resizeMode="cover"
    >
      <Image
        source={require("../../../assets/Auth/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ImageBackground
        source={require("../../../assets/Auth/blur-welcome.png")}
        style={{
          height: Platform.OS === "ios" ? 400 : 380,
          width: 250,
          position: "absolute",
          bottom: Platform.OS === "ios" ? -70 : -15,
          right: 0,
          padding: 10,
          marginBottom: 60,
        }}
      >
        <Text style={styles.title}>Bienvenue</Text>
        <View style={styles.divider} />
        <Text style={styles.desc}>
          Zulenko Fashion est une nouvelle Start-Up permettant au Tailleur Ou
          les Proprietaire des Atelier de modele a gagner des Visibilité sur
          toille
        </Text>
        <View style={{ marginTop: Platform.OS === "ios" ? 15 : 15 }}>
          <Buttom
            style={{}}
            onPress={HandleClient}
            placeholder="Je suis Client"
            type={"primary"}
          />
          <Buttom
            style={{}}
            onPress={HandleTailleur}
            placeholder="Je suis Tailleur"
            type={"secondary"}
          />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
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
    fontSize: 30,
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
    width: 180,
    // height: 150,
    color: "white",
    fontSize: Platform.OS === "ios" ? 14 : 16,
    letterSpacing: 1,
    fontWeight: Platform.OS === "ios" ? "400" : "600",
    textAlign: "center",
    margin: Platform.OS === "ios" ? 0 : 20,
    // marginVertical: 5,
    alignSelf: "center",
    marginBottom: 5,
    marginTop: Platform.OS === "ios" ? 10 : 30,
  },
});
