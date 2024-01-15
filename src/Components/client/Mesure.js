import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { Platform } from "expo-modules-core";
import Colors from "../../Utils/Colors";
const { height, width } = Dimensions.get("screen");
const isIphone = Platform.OS == "ios";
const Mesure = ({ item }) => {
  return (
    <ImageBackground
      source={require("../../../assets/bgClientRender3.png")}
      style={styles.background}
      imageStyle={{
        borderRadius: 10,
      }}
    >
      <View style={styles.header}>
        <View
          style={{
            flex: 4,
          }}
        >
          <Image
            source={item.echantillon}
            style={{
              height: 110,
              width: 110,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 6,
          }}
        >
          <View style={{}}>
            <View style={styles.divider}>
              <Text style={styles.txtHeader}>Prix</Text>
              <Text style={styles.txtBody}>{item.prix}</Text>
            </View>
            <View style={styles.divider}>
              <Text style={styles.txtHeader}>Modele</Text>
              <Text style={styles.txtBody}>{item.modele}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Dos</Text>
              <Text style={styles.containerTxtBody}>{item.dos}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Epaule</Text>
              <Text style={styles.containerTxtBody}>{item.epaul}</Text>
            </View>
          </View>

          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Coût</Text>
              <Text style={styles.containerTxtBody}>{item.cout}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Epaule Manche</Text>
              <Text style={styles.containerTxtBody}>{item.epaulManche}</Text>
            </View>
          </View>

          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Poitrine</Text>
              <Text style={styles.containerTxtBody}>{item.poitrine}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>T.Taille</Text>
              <Text style={styles.containerTxtBody}>{item.Ttaile}</Text>
            </View>
          </View>
          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>L.Taille</Text>
              <Text style={styles.containerTxtBody}>{item.longTaille}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Bassin</Text>
              <Text style={styles.containerTxtBody}>{item.bassin}</Text>
            </View>
          </View>
          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>T.Manche</Text>
              <Text style={styles.containerTxtBody}>{item.Tmanche}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>L.Manche</Text>
              <Text style={styles.containerTxtBody}>{item.longManche}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerRight}>
          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>L.Totale</Text>
              <Text style={styles.containerTxtBody}>{item.longTotale}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>L.Robe</Text>
              <Text style={styles.containerTxtBody}>{item.longRobe}</Text>
            </View>
          </View>

          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Ceinture</Text>
              <Text style={styles.containerTxtBody}>{item.ceinture}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>L.Pantalon</Text>
              <Text style={styles.containerTxtBody}>{item.longPantalo}</Text>
            </View>
          </View>

          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Frappe</Text>
              <Text style={styles.containerTxtBody}>{item.frappe}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Cuisse</Text>
              <Text style={styles.containerTxtBody}>{item.cuisse}</Text>
            </View>
          </View>
          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Genou</Text>
              <Text style={styles.containerTxtBody}>{item.genou}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>L.Jupe</Text>
              <Text style={styles.containerTxtBody}>{item.longJupe}</Text>
            </View>
          </View>
          <View style={styles.containers}>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Bas</Text>
              <Text style={styles.containerTxtBody}>{item.bas}</Text>
            </View>
            <View style={styles.containerDivider}>
              <Text style={styles.containerTxtHeader}>Pinces</Text>
              <Text style={styles.containerTxtBody}>{item.pinces}</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Mesure;

const styles = StyleSheet.create({
  background: {
    height: (height / 5) * 2 + 110,
    width: width - 12,
    alignSelf: "center",
    marginVertical: 10,
    elevation: 5,
  },
  header: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    padding: 10,
  },
  txtHeader: {
    fontSize: isIphone ? 12 : 15,
    fontWeight: isIphone ? "600" : "bold",
    letterSpacing: 0.5,
    color: Colors.white,
    textTransform: "uppercase",
  },
  txtBody: {
    fontSize: isIphone ? 11 : 14,
    fontWeight: isIphone ? "400" : "600",
    color: Colors.gray,
    letterSpacing: 1.5,
  },
  divider: {
    margin: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerLeft: {
    flex: 4,
  },
  containerRight: {
    flex: 4.2,
  },
  containerDivider: {
    marginTop: 0.9,

    padding: 2,

    alignItems: "center",
  },
  containerTxtBody: {
    fontSize: isIphone ? 14 : 15.8,
    fontWeight: isIphone ? "600" : "800",
    marginTop: 1,
    color: Colors.white,
    textAlign: "center",
    width: isIphone ? 160 : 150,
  },
  containerTxtHeader: {
    fontSize: isIphone ? 13 : 15.8,
    fontWeight: isIphone ? "600" : "900",
    marginLeft: -2,
    color: Colors.primary,
    letterSpacing: -1,
  },
  containers: {
    flexDirection: "row",
    justifyContent: "space-around",

    paddingVertical: isIphone ? 6 : 3.5,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
});
