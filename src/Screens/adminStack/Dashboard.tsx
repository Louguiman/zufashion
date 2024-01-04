import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Platform,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Box, Header, Journal } from "../../Components";
import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const Dashboard = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.contain}>
      <ImageBackground
        source={require("../../../assets/bgImage.png")}
        style={[styles.contain]}
        resizeMode="cover"
      >
        <Header useName="Abba" type="admin" />
        <BlurView intensity={70} tint="light" style={styles.journal}>
          <Journal />
        </BlurView>
        <BlurView tint="light" intensity={70} style={styles.controller} >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 30,
                width: 10,
                borderRadius: 10,
                backgroundColor: Colors.gestion,
                elevation: 5,
                //   marginTop: 2,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: Colors.grayLight,
                fontWeight: "bold",
                letterSpacing: 1.5,
                marginLeft: 10,
              }}
            >
              Gestion
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop:Platform.OS === "ios" ? 15 : 4,
            }}
          >
            <View>
              <Box
                icone="Compta"
                onPress={() => navigation.navigate("Compta")}
                placeholder="Comptabilite"
                bg={Colors.primary}
              />
              <Box
                icone="Catalogue"
                onPress={() => navigation.navigate("Catalogue")}
                placeholder="Catalogue"
                bg={Colors.catalogue}
              />
            </View>
            <View style={{ marginLeft:Platform.OS === "ios" ? 30 : 20 }}>
              <Box
                icone="Atelier"
                onPress={() => navigation.navigate("Atelier")}
                placeholder="Atelier"
                bg={Colors.atelier}
              />
              <Box
                icone="Client"
                onPress={() => navigation.navigate("Client")}
                placeholder="Client(e)"
                bg={Colors.client}
              />
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  contain: {
    width,
    height,
  },
  journal: {
    height:Platform.OS === "ios" ? 320 : 290,
    width:Platform.OS === "ios" ? 350 : 330,
    alignSelf: "center",
    // padding: 5,
    borderRadius: 10,
  },
  controller: {
    height:Platform.OS === "ios" ? 350 : 320,
    width:Platform.OS === "ios" ? 350 : 330,
    alignSelf: "center",
    marginVertical:Platform.OS === "ios" ? 20 : 10,
    borderRadius: 20,
    padding: 10,
  },
});
