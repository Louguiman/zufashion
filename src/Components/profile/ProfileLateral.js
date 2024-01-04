import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../Utils/Colors";
import * as Animatable from "react-native-animatable";

import { createAnimatableComponent } from "react-native-animatable";
import CollectionCard from "../collections/CollectionCard";
import CardPoste from "../shared/CardPoste";
import { Buttom } from "..";
// import { collections, medias, profile } from "../../data/profile";
const AnimatedTouch = Animatable.createAnimatableComponent(TouchableOpacity);

const ProfileLateral = ({ collections, medias, navigation }) => {
  console.log(collections);
  const condition = collections.length === 0 && medias.length === 0;
  return (
    <View style={styles.container}>
      {condition ? (
        <View style={{ flex: 1, zIndex: 1 }}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../../../assets/empty1.png")}
          />

          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              color: Colors.darkGray,
              textAlign: "center",
            }}
          >
            Vous n'avez pas encore de modele favoris
          </Text>

          <View style={{ padding: 5, marginVertical: 8 }}>
            <Text
              style={{
                color: "black",
                fontSize: 17,
                textAlign: "center",
                color: Colors.darkGray,
              }}
            >
              Lorsque vous effectuer une recherche,appuyer sue le coeur pour
              ajouter une annonce aux favoris
            </Text>
          </View>

          <Buttom
            onPress={() => {
              navigation.navigate("Accueil");
            }}
            style={styles.Btn}
            placeholder="
            Parcourir les postes
            "
          />
        </View>
      ) : (
        <>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                transform: [{ rotate: "-90deg" }],
                fontSize: Platform.OS === "ios" ? 14 : 16,
                fontWeight: Platform.OS === "ios" ? "600" : "bold",
                marginRight: Platform.OS === "ios" ? -80 : -60,
                marginLeft: Platform.OS === "ios" ? -1 : 5,
                zIndex: 1,
                position: "relative",
                left: 30,
              }}
            >
              Collections
            </Text>
            <>
              {/* {collections.length === 0 ||
              collections.length ===
                0(
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "900",
                      letterSpacing: 0.5,
                      color: Colors.white,
                      // margin: 2,
                      textAlign: "center",
                      marginTop: 80,
                    }}
                  >
                    Pas encore de Collections au favoris
                  </Text>
                )} */}
              <ScrollView
                horizontal
                contentContainerStyle={{
                  height: 170,
                }}
              >
                {collections.map((element, i) => (
                  <CollectionCard type="profil" item={element} />
                ))}
              </ScrollView>
            </>
          </View>

          <View
            style={{
              height: Platform.OS === "ios" ? 115 : 110,
              width: 3,
              backgroundColor: Colors.black,
              transform: [{ rotateX: "45deg" }],
              position: "relative",
              bottom: 50,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: Platform.OS === "ios" ? -75 : -88,
              position: "relative",
            }}
          >
            <Text
              style={{
                transform: [{ rotate: "-90deg" }],

                fontSize: 16,
                fontWeight: "bold",

                left: Platform.OS === "ios" ? -35 : -25,
                position: "absolute",
                top: 60,
                marginBottom: 20,
              }}
            >
              Médias
            </Text>
            {/* {medias.length === 0 && (
          <Text
            style={{
              fontSize: 18,
              fontWeight: "900",
              letterSpacing: 0.5,
              color: Colors.white,
              margin: 2,
              textAlign: "center",
              marginTop: 70,
              marginLeft: 20,
            }}
          >
            Pas encore de Medias au favoris
          </Text>
        )} */}
            <FlatList
              data={medias}
              numColumns={2}
              contentContainerStyle={{
                marginLeft: Platform.OS === "ios" ? 20 : 8,
                paddingBottom: 270,
              }}
              renderItem={({ item, i }) => (
                <CardPoste type="profil" item={item} />
              )}
            />
          </View>

          <View
            style={{
              height: Platform.OS === "ios" ? 170 : 150,
              width: 3,
              backgroundColor: Colors.black,
              transform: [{ rotateX: "45deg" }],
              left: 3,
              position: "absolute",
              bottom: -10,
            }}
          />
        </>
      )}
    </View>
  );
};

export default ProfileLateral;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 5,
    marginTop: 8,
  },
  image: {
    height: 200,

    marginTop: 10,
    width: 270,
    marginLeft: 0,
    alignSelf: "center",
  },
  title: {
    marginLeft: 40,
    fontWeight: "bold",
  },
});
