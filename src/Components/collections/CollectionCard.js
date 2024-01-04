import * as Animatable from "react-native-animatable";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform,
  Alert,
  TextInput,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

import { useState, useEffect } from "react";
import useFavorisCollections from "../../contextCollections/FavorisContextCollections";
const AnimatedTouch = Animatable.createAnimatableComponent(TouchableOpacity);

const CollectionCard = ({ item, type = "main" || "favoris" || "profil" }) => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");
  const [isFavoris, setIsFavoris] = useState(false);
  const { favorisListerCollections, addToFavoris, removeFromFavoris } =
    useFavorisCollections();

  useEffect(() => {
    const collectionsIsInFavoris = favorisListerCollections.find(
      (collection) => collection.id === item.id
    );
    if (collectionsIsInFavoris) {
      setIsFavoris(true);
    } else {
      setIsFavoris(false);
    }
    return () => {};
  }, [favorisListerCollections, item]);

  const handleClick = () => {
    if (isFavoris) {
      removeFromFavoris(item);
    } else {
      addToFavoris(item);
    }
  };
  switch (type) {
    case "main":
      return (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AppStack", {
                screen: "CollectionDetails",
                params: { item },
              })
            }
            activeOpacity={0.8}
            style={styles.contain}
          >
            <ImageBackground
              source={item.cover}
              style={styles.card}
              resizeMode="cover"
              imageStyle={{ width: "100%", borderRadius: 20 }}
            >
              <View style={styles.header}>
                <Text
                  style={{
                    fontSize: 18,
                    color: Colors.white,
                    letterSpacing: 1.5,
                    fontWeight: "900",
                    marginLeft: 10,
                  }}
                >
                  {item.title}
                </Text>
                <AnimatedTouch
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  onPress={handleClick}
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 30,
                    backgroundColor: "white",
                    elevation: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 15,
                    right: 10,
                  }}
                >
                  {isFavoris ? (
                    <MaterialCommunityIcons
                      name="bookmark"
                      size={24}
                      color="black"
                    />
                  ) : (
                    <Feather name="bookmark" size={24} color="black" />
                  )}
                </AnimatedTouch>
              </View>
              <View style={styles.footer}>
                <View style={{ flexDirection: "row" }}>
                  <Text>by</Text>
                  {""}
                  <Text
                    style={{ fontSize: 14, fontWeight: "800", marginLeft: 5 }}
                  >
                    {item.title}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={item.avatar}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 20,
                      margin: 5,
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </>
      );
      break;
    case "favoris":
      return (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AppStack", {
                screen: "CollectionDetails",
                params: { item },
              })
            }
            activeOpacity={0.8}
            style={styles.contain}
          >
            <ImageBackground
              source={item.cover}
              style={styles.cardFavoris}
              resizeMode="cover"
              imageStyle={{ width: "100%", borderRadius: 20 }}
            >
              <View style={styles.headerFavoris}>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.white,
                    // letterSpacing: 1.5,
                    fontWeight: "900",
                    // marginLeft: 10,
                  }}
                >
                  {item.title}
                </Text>
                <AnimatedTouch
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  onPress={handleClick}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 25,
                    backgroundColor: "white",
                    elevation: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 5,
                    right: 10,
                  }}
                >
                  {isFavoris ? (
                    <MaterialCommunityIcons
                      name="bookmark"
                      size={24}
                      color={Colors.primary}
                    />
                  ) : (
                    <Feather name="bookmark" size={24} color="black" />
                  )}
                </AnimatedTouch>
              </View>
              <View style={styles.footerfavoris}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>by</Text>
                  {""}
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "800",
                      marginLeft: 3,
                      minWidth: 15,
                      maxWidth: 100,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={item.avatar}
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 5,
                      // margin: 5,
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </>
      );
      break;
    case "profil":
      return (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AppStack", {
                screen: "CollectionDetails",
                params: { item },
              })
            }
            activeOpacity={0.8}
            style={styles.contain}
          >
            <ImageBackground
              source={item.cover}
              style={styles.cardProfil}
              resizeMode="cover"
              imageStyle={{ width: "100%", borderRadius: 20 }}
            >
              <View style={styles.headerProfil}>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.white,
                    // letterSpacing: 1.5,
                    fontWeight: "900",
                    // marginLeft: 10,
                  }}
                >
                  {item.title}
                </Text>
                <AnimatedTouch
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  onPress={handleClick}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 25,
                    backgroundColor: "white",
                    elevation: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 5,
                    right: 10,
                  }}
                >
                  {isFavoris ? (
                    <MaterialCommunityIcons
                      name="bookmark"
                      size={24}
                      color={Colors.primary}
                    />
                  ) : (
                    <Feather name="bookmark" size={24} color="black" />
                  )}
                </AnimatedTouch>
              </View>
              <View style={styles.footerProfil}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>by</Text>
                  {""}
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "800",
                      marginLeft: 3,
                      minWidth: 15,
                      maxWidth: 100,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={item.avatar}
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 5,
                      // margin: 5,
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </>
      );
      break;

    default:
      break;
  }
};

export default CollectionCard;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  card: {
    height: 370,
    width: "95%",
    // padding: 1.5,
    borderRadius: 20,
    elevation: 5,
    alignSelf: "center",
    margin: 5,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30,
    margin: 5,
  },
  header: {
    position: "relative",
    backgroundColor: Colors.darkOverlayColor,
    top: -1,
    zIndex: 1,
    height: 60,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    backgroundColor: Colors.white,
    bottom: 30,
    zIndex: 1,
    height: 40,
    minWidth: "40%",
    maxWidth: "100%",
    elevation: 5,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  cardFavoris: {
    height: 220,
    width: 150,
    // padding: 1.5,
    borderRadius: 20,
    elevation: 10,
    alignSelf: "center",
    margin: 5,
  },
  avatarFavoris: {
    height: 40,
    width: 40,
    borderRadius: 30,
    margin: 5,
  },
  headerFavoris: {
    position: "relative",
    backgroundColor: Colors.darkOverlayColor,
    top: 0,
    zIndex: 1,
    height: 40,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerfavoris: {
    position: "absolute",
    backgroundColor: Colors.white,
    bottom: 15,
    zIndex: 1,
    height: 35,
    minWidth: 120,
    maxWidth: 150,
    elevation: 5,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
  },
  ///Profile

  avatar: {
    height: 35,
    width: 35,
    borderRadius: 20,
    margin: 5,
  },

  cardProfil: {
    height: 160,
    width: 135,
    // padding: 1.5,
    borderRadius: 0,
    // elevation: 5,
    alignSelf: "center",
    marginHorizontal: 2,
  },
  avatarProfil: {
    height: 40,
    width: 40,
    borderRadius: 30,
    margin: 5,
  },
  headerProfil: {
    position: "relative",
    backgroundColor: Colors.darkOverlayColor,
    top: 0,
    zIndex: 1,
    height: 40,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerProfil: {
    position: "absolute",
    backgroundColor: Colors.white,
    bottom: 10,
    zIndex: 1,
    height: 35,
    minWidth: 120,
    maxWidth: 150,
    elevation: 5,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 2,
  },
});
