import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StatusBar,
  BackHandler,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon, { Icons } from "../../../Utils/Icons";
import Colors from "../../../Utils/Colors";
import {
  ButtonIcon,
  CardClient,
  ScanQrCode,
  SearchBar,
} from "../../../Components";
import { client } from "../../../data/client";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddClient from "./AddClient";

const { width, height } = Dimensions.get("screen");
const Cliente = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const navigation = useNavigation();

  const [currentLoder, setCurrentLoder] = useState(null);
  const handlePress = (loader) => {
    setCurrentLoder(loader);
  };

  if (!currentLoder) {
    return (
      <View style={[styles.contain]}>

        <ImageBackground
          source={require("../../../../assets/bannerClient.png")}
          style={[styles.banner]}
          resizeMode="cover"
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              zIndex: 1,
              paddingTop: 50,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                letterSpacing: 0.5,
                color: Colors.white,
                marginLeft: 15,
              }}
            >
              Liste Client
            </Text>
            <ButtonIcon
              placeholder="Ajouter"
              color={Colors.black}
              iconSize={24}
              iconeName="person-add"
              onPress={() => handlePress("AddClient")}
              type={Icons.MaterialIcons}
              style={{ width: 95, height: 35, zIndex: 1 }}
            />
          </View>
          <SearchBar
            onChange={setSearchTxt}
            value={searchTxt}
            onPress={() => handlePress("Scan")}
            placeholder="Recherche"
            type="client"
            style={{ marginTop: -25 }}
          />
        </ImageBackground>

        <FlatList
          data={client}
          renderItem={({ item }) => <CardClient item={item} />}
        />
      </View>
    );
  }
  if (currentLoder == "Scan") {
    return <ScanQrCode setCurrentLoader={setCurrentLoder} />;
  }
  if (currentLoder == "AddClient") {
    return <AddClient setCurrentLoader={setCurrentLoder} />;
  }
};

export default Cliente;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  banner: {
    height: height / 3.5,
    width,
  },
});
