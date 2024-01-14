import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
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
  Button,
} from "react-native";
import {
  SimpleLineIcons,
  EvilIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import DatePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import Swiper from "../shared/Swiper";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Utils/Colors";
import InputModal from "./inputModal";
import useFavoris from "../../Context/FavorisContext";
import { SlideModal } from "react-native-slide-modal";
import { Buttom } from "..";
import { BlurView } from "expo-blur";
import Icon, { Icons } from "../../Utils/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
// import { SharedElement } from "react-navigation-shared-element";
const AnimatedTouch = Animatable.createAnimatableComponent(TouchableOpacity);

const CardPoste = ({ item, index, type = "main" || "favoris" || "profil" }) => {
  // console.log(index);
  const [Like, setLike] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");

  const [isFavoris, setIsFavoris] = useState(false);
  const { favorisLister, addToFavoris, removeFromFavoris } = useFavoris();

  useEffect(() => {
    const posteIsInFavoris = favorisLister.find(
      (poste) => poste.id === item.id
    );
    if (posteIsInFavoris) {
      setIsFavoris(true);
    } else {
      setIsFavoris(false);
    }
    return () => {};
  }, [favorisLister, item]);

  const handleClick = () => {
    if (isFavoris) {
      removeFromFavoris(item);
    } else {
      addToFavoris(item);
    }
  };

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["50%", "75%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  switch (type) {
    case "main":
      return (
        <View style={{ flex: 1 }}>
          <AnimatedTouch
            // animation="fadeInUp"
            // delay={index * 100}
            // duration={300}
            // useNativeDriver
            activeOpacity={0.8}
            style={styles.contain}
            onPress={() =>
              navigation.navigate("AppStack", {
                screen: "Publication",
                params: { item },
              })
            }
          >
            <Animated.View style={styles.container} key={item.id}>
              <View style={styles.header}>
                <Swiper
                  height={300}
                  width={Platform.OS === "ios" ? "100%" : 350}
                  image={item.img}
                  borderRadius={150}
                  type="main"
                />

                <AnimatedTouch
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  onPress={() => {
                    handleClick();
                  }}
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
              <View style={styles.desc}>
                <Text style={styles.descTxt} multiline>
                  {item.desc}
                </Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.left}>
                  <Image
                    source={item.avatar}
                    style={styles.avatar}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      marginLeft: Platform.OS === "ios" ? -20 : 0,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: Platform.OS === "ios" ? 12 : 15,
                        fontWeight: Platform.OS === "ios" ? "400" : "800",
                        letterSpacing: 0.5,
                        marginBottom: 1.5,
                      }}
                    >
                      {item.nom}
                    </Text>

                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: Platform.OS === "ios" ? "400" : "600",
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.createAt}
                    </Text>
                  </View>
                </View>
                <View style={styles.right}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      type={Icons.Ionicons}
                      name="heart-outline"
                      size={24}
                      color={Colors.primary}
                    />
                    <Text style={styles.rightText}>{item.likeCount}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      type={Icons.Feather}
                      name="share"
                      size={24}
                      color={Colors.primary}
                    />
                    <Text style={styles.rightText}>{item.shareCount}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setShowComment(!showComment)}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      type={Icons.Ionicons}
                      name="chatbubble-outline"
                      size={24}
                      color={Colors.primary}
                    />

                    <Text style={styles.rightText}>{item.shareCount}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {showComment ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    // marginTop: 10,
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <TextInput style={styles.input} />
                  <TouchableOpacity style={styles.button}>
                    <Icon
                      type={Icons.MaterialCommunityIcons}
                      name="send-circle-outline"
                      size={24}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
            </Animated.View>
          </AnimatedTouch>
        </View>
      );
      break;

    case "favoris":
      return (
        <AnimatedTouch
          // animation="fadeInUp"
          // delay={index * 100}
          // duration={300}
          // useNativeDriver
          activeOpacity={0.8}
          style={styles.contain}
          onPress={() =>
            navigation.navigate("AppStack", {
              screen: "Publication",
              params: { item },
            })
          }
        >
          <Animated.View style={styles.containerFavoris} key={item.id}>
            <View style={styles.headerFavoris}>
              <Swiper
                height={150}
                width={Platform.OS === "ios" ? "100%" : "100%"}
                image={item.img}
                // borderRadius={150}
                type="main"
              />

              <AnimatedTouch
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                onPress={() => {
                  handleClick();
                }}
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
                    color={Colors.primary}
                  />
                ) : (
                  <Feather name="bookmark" size={24} color="black" />
                )}
              </AnimatedTouch>
            </View>
            <View style={styles.descFavoris}>
              <Text style={styles.descTxtFavoris} multiline>
                {item.desc.substring(0, 90).padEnd(96, "...")}
              </Text>
            </View>

            <View style={styles.leftFavoris}>
              <Image
                source={item.avatar}
                style={styles.avatarFavoris}
                resizeMode="cover"
              />
              <View>
                <Text
                  style={{
                    fontSize: Platform.OS === "ios" ? 11 : 12,
                    fontWeight: Platform.OS === "ios" ? "300" : "800",
                    letterSpacing: 0.5,
                    marginBottom: 1.5,
                    marginLeft: 5,
                    minWidth: 75,
                    maxWidth: 100,
                  }}
                >
                  {item.nom}
                </Text>

                <Text
                  style={{
                    fontSize: 10,
                    letterSpacing: 0.5,
                    marginLeft: 1,
                    fontWeight: Platform.OS == "ios" ? "200" : "500",
                    color: Colors.darkGray,
                  }}
                >
                  {item.createAt}
                </Text>
              </View>
            </View>
          </Animated.View>
        </AnimatedTouch>
      );
      break;
    case "profil":
      return (
        <SafeAreaView style={{}}>
          {visible && (
            <BlurView tint="dark" intensity={150} style={styles.blurViewProfil}>
              <View style={styles.modalHeaderProfil}>
                <Image
                  source={item.avatar}
                  style={styles.avatar}
                  resizeMode="cover"
                />
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "800",
                      letterSpacing: 0.5,
                      marginBottom: 1,
                      color: Colors.white,
                    }}
                  >
                    {item.nom}
                  </Text>

                  <Text
                    style={{
                      fontSize: 8,
                      letterSpacing: 0.5,
                      color: Colors.darkGray,
                    }}
                  >
                    {item.createAt}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setVisible(!visible)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 5,
                    height: 25,
                    width: 25,
                    backgroundColor: Colors.white,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={Icons.AntDesign}
                    color={Colors.red}
                    name="closecircle"
                    size={20}
                  />
                </TouchableOpacity>
              </View>

              <InputModal
                iconName={"account"}
                onChange={setFullName}
                placeholder={"Notre nom Complete"}
                value={fullName}
              />
              <InputModal
                iconName={"phone"}
                onChange={setTel}
                placeholder={"Numero Telephone"}
                value={tel}
                style={{ marginTop: -10 }}
              />

              <Buttom
                onPress={() => {}}
                placeholder="Envoyer"
                type="btnModal"
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 30,
                  width: 75,
                }}
              />
            </BlurView>
          )}
          <AnimatedTouch
            // animation="fadeInUp"
            // delay={index * 100}
            // duration={300}
            // useNativeDriver
            activeOpacity={0.8}
            style={styles.contain}
            onPress={() =>
              navigation.navigate("AppStack", {
                screen: "Publication",
                params: { item },
              })
            }
          >
            <Animated.View style={styles.containerProfil} key={item.id}>
              <View style={styles.headerProfil}>
                <Swiper
                  height={150}
                  width={Platform.OS === "ios" ? "100%" : "100%"}
                  image={item.img}
                  // borderRadius={150}
                  type="main"
                />

                <AnimatedTouch
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  onPress={() => {
                    handleClick();
                  }}
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
                      color={Colors.primary}
                    />
                  ) : (
                    <Feather name="bookmark" size={24} color="black" />
                  )}
                </AnimatedTouch>
              </View>
              <View style={styles.descProfil}>
                <Text style={styles.descTxtProfil} multiline>
                  {item.desc.substring(0, 90).padEnd(96, "...")}
                </Text>
              </View>

              <View style={styles.leftProfil}>
                <Image
                  source={item.avatar}
                  style={styles.avatarFavoris}
                  resizeMode="cover"
                />
                <View>
                  <Text
                    style={{
                      fontSize: Platform.OS === "ios" ? 11 : 12,
                      fontWeight: Platform.OS === "ios" ? "300" : "800",
                      letterSpacing: 0.5,
                      marginBottom: 1.5,
                      marginLeft: 5,
                      minWidth: 75,
                      maxWidth: 100,
                    }}
                  >
                    {item.nom}
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                      letterSpacing: 0.5,
                      marginLeft: 1,
                      fontWeight: Platform.OS == "ios" ? "200" : "500",
                      color: Colors.darkGray,
                    }}
                  >
                    {item.createAt}
                  </Text>
                </View>
                <Buttom
                  type="btnRdvIcon"
                  onPress={() => setVisible(!visible)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRaduis: 15,
                    position: "absolute",
                    right: -45,
                    elevation: 5,
                  }}
                />
              </View>
            </Animated.View>
          </AnimatedTouch>
        </SafeAreaView>
      );
      break;

    default:
      break;
  }
};

export default CardPoste;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,

    elevation: 5,
  },
  blurView: {
    backgroundColor: Colors.background,
    height: Platform.OS == "ios" ? 310 : 300,
    width: Platform.OS == "ios" ? 370 : 352,
    position: "absolute",
    alignSelf: "center",
    right: Platform.OS == "ios" ? 1.5 : 3,
    top: 8,
    borderRadius: Platform.OS == "ios" ? 50 : 10,
    zIndex: 1,
  },
  container: {
    // padding: 8,
    marginVertical: Platform.OS === "ios" ? 8 : 8,
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.6,

    elevation: 5,
    minHeight: Platform.OS == "ios" ? 0 : 420,
    maxHeight: Platform.OS == "ios" ? 450 : 490,

    backgroundColor: "#f8f9fa",
    borderColor: "gray",
    borderwidth: 0.8,
    minWidth: "95%",
    alignSelf: "center",

    maxWidth: "98%",
    overflow: "hidden",
  },
  desc: {
    // flex: 2,
    padding: 5,
    height: Platform.OS === "ios" ? 90 : 75,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // flex: 3,
    // alignSelf: "center",
    paddingHorizontal: 10,
  },
  header: {
    alignSelf: "center",

    // flex: 5,
  },
  right: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    width: 145,
    marginLeft: Platform.OS === "ios" ? 0 : 10,
    position: "relative",
    right: -10,
  },
  rightText: {
    fontSize: Platform.OS === "ios" ? 10.5 : 13,
    fontWeight: "400",
    marginLeft: 1.5,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 30,
    margin: 5,
  },
  left: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: Platform.OS === "ios" ? 210 : 180,
    alignItems: "center",
    height: 50,
    marginLeft: Platform.OS === "ios" ? -10 : -10,
  },
  descTxt: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 4,
    padding: 4,
    fontSize: 12,
    fontWeight: "400",
  },
  input: {
    height: 35,
    width: 280,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: Colors.bottom,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.bottom,
    borderRadius: 60,

    height: 35,
    elevation: 5,

    padding: 5,
  },
  //CardPoste Favoris
  containerFavoris: {
    // padding: 2,
    margin: Platform.OS == "ios" ? 0 : 5,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: Platform.OS == "ios" ? 295 : 255,

    backgroundColor: "#f8f9fa",
    borderColor: "gray",
    borderwidth: 0.8,
    width: Platform.OS == "ios" ? 185 : 174,
    alignSelf: "center",

    // maxWidth: "98%",
    overflow: "hidden",
  },

  headerFavoris: {
    alignSelf: "center",

    // flex: 5,
  },

  avatarFavoris: {
    height: 35,
    width: 35,
    borderRadius: 15,
    // margin: 5,
  },

  descTxtFavoris: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 1,
    padding: 2,
    fontWeight: "400",
  },
  leftFavoris: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
    // height: 50,
    paddingVertical: 2,
    position: "absolute",
    bottom: 3,
    paddingHorizontal: 10,
  },

  //CardPoste Profil
  containerProfil: {
    // padding: 2,
    margin: Platform.OS == "ios" ? 0 : 3,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: Platform.OS == "ios" ? 295 : 255,

    backgroundColor: "#f8f9fa",
    borderColor: "gray",
    borderwidth: 0.8,
    width: Platform.OS == "ios" ? 185 : 170,
    alignSelf: "center",

    // maxWidth: "98%",
    overflow: "hidden",
  },

  headerProfil: {
    alignSelf: "center",

    // flex: 5,
  },

  avatarProfil: {
    height: 30,
    width: 30,
    borderRadius: 15,
    // margin: 5,
  },

  descTxtProfil: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 1,
    padding: 2,
    fontWeight: "400",
  },
  leftProfil: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // height: 50,
    marginLeft: Platform.OS === "ios" ? 0 : 0,
    paddingVertical: 2,
    position: "absolute",
    bottom: 3,
  },
  modalHeaderProfil: {
    flexDirection: "row",
    // justifyContent: "space-around",
    width: 180,
    alignItems: "center",
    height: 50,
  },
});
