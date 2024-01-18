import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  CardPoste,
  Header,
  CollectionCard,
  CardCollections,
} from "../../Components";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import useFavoris from "../../Context/FavorisContext";
import useFavorisCollection from "../../contextCollections/FavorisContextCollections";
import Colors from "../../Utils/Colors";
import Icon, { Icons } from "../../Utils/Icons";

const Favoris = ({ navigation }: any) => {
  const { favorisLister } = useFavoris();
  const { favorisListerCollections } = useFavorisCollection();
  // console.log("Favoris Collections :", favorisListerCollections);

  return (
    <View style={{ flex: 1 }}>
      {favorisLister.length === 0 && favorisListerCollections.length === 0 ? (
        <View style={{ flex: 1, zIndex: 1 }}>
          <Header useName="ABBA" type="main" />
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../../../assets/empty1.png")}
          />

          <Text
            style={{
              fontSize: 18,
              fontWeight: Platform.OS === "android" ? "bold" : "500",
              color: "black",
              textAlign: "center",
            }}
          >
            Vous n'avez pas encore de modele favoris
          </Text>

          <View style={{ padding: 10, marginVertical: 20 }}>
            <Text style={{ color: "black", fontSize: 15, textAlign: "center" }}>
              Lorsque vous effectuer une recherche,appuyer sue le coeur pour
              ajouter une annonce aux favoris
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Accueil");
            }}
            style={styles.Btn}
          >
            <Text
              style={{
                color: "white",
                fontWeight: Platform.OS === "android" ? "bold" : "500",
              }}
            >
              Parcourir les postes
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../assets/banner.png")}
            style={{
              height: 180,
              width: "100%",
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            }}
          />
          <View
            style={{
              zIndex: 1,
              position: "relative",
              top: Platform.OS === "android" ? -150 : -120,
            }}
          >
            <Text
              style={{
                fontSize: Platform.OS === "android" ? 25 : 18,
                fontWeight: "900",
                letterSpacing: 1.5,
                color: Colors.white,
                marginLeft: 2,
                marginBottom: 15,
              }}
            >
              Collections
            </Text>

            <ScrollView horizontal contentContainerStyle={{ marginLeft: 20 }}>
              {favorisListerCollections.length === 0 && (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "900",
                    letterSpacing: 0.5,
                    color: Colors.black,
                    margin: 2,
                    textAlign: "center",
                    marginTop: 80,
                  }}
                >
                  Pas encore de Collections au favoris
                </Text>
              )}
              {favorisListerCollections.map((item, i) => (
                <CollectionCard type="favoris" key={i} item={item} />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              marginVertical: Platform.OS === "android" ? -150 : -120,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "900",
                letterSpacing: 1.5,
                color: Colors.black,
                margin: 2,
              }}
            >
              MEDIAS
            </Text>
            {favorisLister.length === 0 && (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "900",
                  letterSpacing: 1.5,
                  color: Colors.black,
                  margin: 2,
                  textAlign: "center",
                  // marginTop: 80,
                  position: "absolute",
                  top: 150,
                  zIndex: 1,
                  left: 30,
                }}
              >
                Pas encore de Poste au favoris
              </Text>
            )}
            <FlatList
              data={favorisLister}
              // horizontal
              numColumns={2}
              columnWrapperStyle={
                {
                  // flex: 1,
                  // justifyContent: "flex-start",
                  // alignItems: "flex-start",
                }
              }
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 190,
              }}
              renderItem={({ item, index }) => (
                <CardPoste
                  type="favoris"
                  key={index}
                  item={item}
                  navigation={navigation}
                />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Favoris;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
    // padding: 5,
  },
  modalText: {
    // marginBottom: 15,
    // marginTop: -20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },

  image: {
    height: 270,

    marginTop: 50,
    width: 270,
    marginLeft: 0,
    alignSelf: "center",
  },
  title: {
    marginLeft: 40,
    fontWeight: "bold",
  },
  text: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    height: 40,
    width: "70%",
    elevation: 5,
    // shadowOpacity: 0.6,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    position: "relative",
    top: 250,
    zIndex: 1000,
  },
  header: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "tomato",
    alignItems: "center",
    // borderWidth: 1,
    elevation: 5,
    // width,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 50,
    },
  },
  Btn: {
    width: 220,
    height: 50,
    backgroundColor: "#37AA9C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 5,
    alignSelf: "center",
    marginVertical: 20,
  },
});
