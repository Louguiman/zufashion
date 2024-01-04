import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import * as Animatable from "react-native-animatable";

import { Box } from "../../../Components";
import { Agenda, Confections, Setting, Tailler } from "../..";
const { width, height } = Dimensions.get("screen");
const Atelier = () => {
  const navigation = useNavigation();
  const [currentLoader, setCurrentLoader] = useState(null);
  const handlePress = (loader): any => {
    setCurrentLoader(loader);
  };

  if (!currentLoader) {
    return (
      <Animatable.View  style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/atelier_banner.png")}
          style={styles.contain}
          resizeMode="cover"
        >
          <View style={{ position: "absolute" }}>
            <TouchableOpacity
              style={{ zIndex: 1 }}
              onPress={() => navigation.goBack()}
            >
              <Icon
                type={Icons.Ionicons}
                name="chevron-back"
                size={40}
                color={Colors.black}
                style={{ margin: 5 }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              letterSpacing: 1.5,
              color: Colors.black,
              marginLeft: 90,
              marginTop: 40,
            }}
          >
            Mon Atelier
          </Text>
        </ImageBackground>
        <ImageBackground source={require('../../../../assets/BackDrop.png')} style={styles.BlurView}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 10,
            left: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: Colors.white,
              textAlign: "left",
              width: 165,
            }}
          >
            Tout Concernant Votre Atelier
          </Text>
          <Image
            source={require("../../../../assets/iconsGestion/agenda.png")}
            style={{ height: 70, width: 70, marginLeft: 60 }}
            resizeMode="cover"
          />
        </View>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "space-around",
              // alignItems: "center",
              flexDirection: "row",
              marginTop: 90,
            }}
          >
            <View>
              <Box
                type="atelier"
                subTilte="Organiser Votre Equipe"
                bg={Colors.atelier_card}
                icone="Tailler"
                onPress={() => handlePress("Tailleur")}
                placeholder="Mes Tailleur"
                
              />
              <Box
                type="atelier"
                subTilte="Voir Tous Les Rendez-vous Des Clients"
                bg={Colors.atelier_card}
                icone="Agenda"
                onPress={() => handlePress("Agenda")}
                placeholder="Mon Agenda"
              />
            </View>

            <View style={{ marginTop: 35, marginLeft: 20 }}>
              <Box
                type="atelier"
                subTilte="Voir Les Commandes Realiser"
                bg={Colors.atelier_card}
                icone="Confections"
                onPress={() => handlePress("Confections")}
                placeholder="Mes Confections"
              />
              <Box
                type="atelier"
                subTilte="Information Suplementaire"
                bg={Colors.atelier_card}
                icone="Personnalisation"
                onPress={() => handlePress("Setting")}
                placeholder="Personnaliser"
              />
            </View>
          </View>
        </ImageBackground>
      </Animatable.View>
    );
  }
  if (currentLoader === "Tailleur") {
    return <Tailler setCurrentLoader={setCurrentLoader} />;
  }
  if (currentLoader === "Confections") {
    return <Confections setCurrentLoader={setCurrentLoader} />;
  }
  if (currentLoader === "Agenda") {
    return <Agenda setCurrentLoader={setCurrentLoader} />;
  }
  if (currentLoader === "Setting") {
    return <Setting setCurrentLoader={setCurrentLoader} />;
  }
};

export default Atelier;

const styles = StyleSheet.create({
  contain: {
    height: height / 5,
    width,
  },
  container: {
    backgroundColor: Colors.bottom,
    flex: 1,
  },
  BlurView: {
    position: "absolute",
    height: height / 1.3,
    width,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
  },
});
