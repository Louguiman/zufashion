import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton, ButtonIcon, Gallery } from "../../../Components";
import getCatalogueById from "../../../Utils/getCatalogueById";
import { collectios } from "../../../data/collections";
import Colors from "../../../Utils/Colors";
import { Icons } from "../../../Utils/Icons";

const Details = ({ route }: any) => {
  const { id } = route.params;
  const navigation = useNavigation();
  // console.log('abba',catalogueData.image);
  const [catalogueData, setDatalogueData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const data = getCatalogueById(id, collectios);

    setDatalogueData(data);
    setIsLoading(false);
    return () => {
      setDatalogueData({});
      setIsLoading(false);
    };
  }, [id]);

  // console.log("catalogue", catalogueData);
  if (isLoading) {
    return <Text>Is Loading</Text>;
  }
  return (
    <View style={styles.contain}>
      <ImageBackground
        source={catalogueData?.cover}
        style={{ height: 340, width: "100%" }}
        resizeMode="cover"
        imageStyle={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
           
          }}
        >
          <BackButton
            onPres={() => navigation.goBack()}
            style={{ position: "relative" }}
          />

          {/* <Text
            style={{
              fontSize: Platform.OS === "ios" ? 15 : 18,
              fontWeight:Platform.OS === "ios" ? "500":"800",
              color: Colors.darkOverlayColor2,
              // marginLeft: 15,
            }}
          >
            {catalogueData?.title}
          </Text> */}
        </View>
        <Text style={styles.desc}>{catalogueData?.description}</Text>
      </ImageBackground>
      <ImageBackground
        source={require("../../../../assets/banner.png")}
        style={[styles.banner]}
        resizeMode="cover"
      >
        <ImageBackground
          source={require("../../../../assets/Container.png")}
          style={styles.blurView}
          resizeMode="cover"
        >
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Collection</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: -50,
                marginRight: -10,
              }}
            >
              <ButtonIcon
                placeholder="Ajouter"
                color={Colors.black}
                iconSize={Platform.OS === "ios" ? 15 : 24}
                iconeName="pluscircle"
                onPress={() => {}}
                type={Icons.AntDesign}
                style={{
                  height: 35,
                  width: 100,
                  alignSelf: "center",
                  borderColor: Colors.green,
                  marginTop: 50,
                }}
              />
              <ButtonIcon
                placeholder="Supprimer"
                color={Colors.black}
                iconSize={20}
                onPress={() => {}}
                style={{
                  height: 35,
                  width: 110,

                  alignSelf: "center",
                  borderColor: Colors.red,
                  marginTop: 50,
                  backgroudColor: null,
                  marginLeft: 10,
                }}
                type={Icons.MaterialIcons}
                iconeName="delete"
              />
            </View>
          </View>

          <FlatList
            data={catalogueData?.image}
            numColumns={2}
            renderItem={({ item: catalogue }: any) => {
              // console.log("detailCatalogue :", catalogue);

              return <Gallery content={catalogue.content} />;
            }}
            style={{ alignSelf: "center", paddingTop: 15 }}
            contentContainerStyle={{ width: 350 }}
          />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  desc: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    color: Colors.darkOverlayColor2,
    fontSize: Platform.OS === "ios" ? 12 : 15,

    width: 350,
    fontWeight: "500",
  },
  banner: {
    height: Platform.OS === "ios" ? 435 : 410,

    width: "100%",
    position: Platform.OS === "ios" ? "absolute" : "relative",
    bottom: Platform.OS === "ios" ? 0 : -20,
    zIndex: 100,
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    aligncatalogueDatas: "center",
    padding: 10,
    marginTop: 2,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: Colors.white,
  },
  blurView: {
    height: Platform.OS === "ios" ? 435 : 410,

    width: "98.5%",
    // marginTop:10
    zIndex: 100,
  },
});
