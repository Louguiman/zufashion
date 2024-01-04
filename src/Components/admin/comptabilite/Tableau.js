import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import Circular from "./circular";
import Colors from "../../../Utils/Colors";
const { height, width } = Dimensions.get("screen");

const Tableau = () => {
  return (
    <ImageBackground
      source={require("../../../../assets/comptaBlur.png")}
      style={styles.contain}
      resizeMode="cover"
    >
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            letterSpacing: 0.5,
            color: Colors.white,
            textTransform: "uppercase",
          }}
        >
          Votre Solde
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            letterSpacing: 0.5,
            color: Colors.white,
            textTransform: "uppercase",
            marginLeft: 25,
            marginTop: 10,
          }}
        >
          15500055550 cfa
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            letterSpacing: 0.5,
            color: Colors.white,
            textTransform: "uppercase",

            margin: 10,
            marginTop: 15,
          }}
        >
          Dépense
        </Text>
        <View style={styles.box}>
          <View>
            <Circular somme={"25800000"} percentage={25} size={120} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                letterSpacing: 0.5,
                color: Colors.white,
                textTransform: "capitalize",
                marginTop: 2,
                textAlign: "center",
              }}
            >
              Mois Précedente
            </Text>
          </View>
          <View>
            <Circular percentage={55} size={120} somme={"125800000"} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                letterSpacing: 0.5,
                color: Colors.white,
                textTransform: "capitalize",
                marginTop: 2,
                textAlign: "center",
                marginRight: 15,
              }}
            >
              Mois Actuel
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Tableau;

const styles = StyleSheet.create({
  contain: {
    height: 270,
    width: 345,
    marginTop: 90,
    zIndex: 1,
    padding: 10,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
