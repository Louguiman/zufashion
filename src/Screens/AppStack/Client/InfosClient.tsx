import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
  Image,
  Linking,
  FlatList,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon, { Icons } from "../../../Utils/Icons";
import Colors from "../../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
const isIphone = Platform.OS == "ios";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BackButton, Mesure } from "../../../Components";
const { width, height } = Dimensions.get("screen");
const InfosClient = ({ route }: any) => {
  const { item } = route.params;
  console.log("ABBA", item);

  const navigation = useNavigation();

  return (
    <View style={styles.contain}>
      <ImageBackground
        source={require("../../../../assets/bannerClient.png")}
        style={[styles.banner]}
        resizeMode="cover"
      >
          <BackButton onPres={() => navigation.goBack()} style={{paddingTop:20}}  />
        <View style={{ paddingTop: 30,alignItems:'center',justifyContent:'center' }}>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 0.5,
              color: Colors.white,

              textTransform: "uppercase",
            }}
          >
            Information Du Client(e)
          </Text>
        </View>
        
      </ImageBackground>
      <View style={styles.item}>
        <View style={styles.row}>
     
          <Image
            source={item.avatar}
            style={styles.avatar}
            resizeMode="cover"
            // tintColor={Colors.primary}
          />

       
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.txt}>{item.nom}</Text>
              <Text style={styles.txt}>{item.prenom}</Text>
            </View>
            <Text style={[styles.txt, { marginLeft: 0, margin: 2 }]}>
              {item.telephone}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                type={Icons.Ionicons}
                name="chevron-forward"
                size={24}
                color={Colors.green}
              />
              <Text style={styles.txt}>Confection en Cours</Text>
            </View>
          
            <FlatList
              style={{ height: 80 }}
              data={item.task}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{ flexDirection: "row", alignItems: "center" }}
                    key={item.id}
                  >
                    <Text style={styles.task}>{item.modele}</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "600",
                          letterSpacing: 0.5,
                          marginLeft: 5,
                          color: Colors.gray,
                        }}
                      >
                        {item.prix}
                      </Text>
                      <View
                        style={{
                          height: 15,
                          width: 5,
                          backgroundColor: item.depence
                            ? Colors.green
                            : Colors.red,
                          borderRadius: 30,
                          marginLeft: 5,
                          // alignSelf:'center'
                        }}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 3.5,
            width: 50,
            borderRadius: 8,
            backgroundColor: Colors.primary,
            elevation: 5,
            margin: 2,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            fontSize:isIphone?15: 20,
            textAlign: "center",
            fontWeight: "700",
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Cahier de Mesure
        </Text>
        <FlatList
          style={{ flexGrow: 1 }}
          data={item.mesure}
          renderItem={({ item }) => <Mesure item={item} />}
        />
      </View>
    </View>
  );
};

export default InfosClient;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  banner: {
    height: height / 5,
    width,
  },
  contact: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    elevation: 5,
    top: 5,
    height: 40,
    width: "40%",
    //bottom: 5,
  },

  item: {
    paddingHorizontal: 5,
    overflow: "hidden",
    // paddingVertical: 10,

    // margin: 5,
    flex: 1,
    alignSelf: "center",
  },
  subItem: {
    padding: 5,
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 350,
  },
  txt: {
    fontSize: 16,
    fontWeight: isIphone ? "600" : "800",

    letterSpacing: 0.5,
    color: Colors.black,
    marginRight: 10,
  },
  task: {
    fontSize: 13,
    fontWeight: isIphone ? "600" : "800",
    letterSpacing: 0.5,
    color: Colors.black,
    marginLeft: 15,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 8,

    elevation: 5,
    marginTop: 25,
  },
});
