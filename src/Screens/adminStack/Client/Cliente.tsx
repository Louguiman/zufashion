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
import { CardClient, ScanQrCode, SearchBar } from "../../../Components";
import { client } from "../../../data/client";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");
const Cliente = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const navigation = useNavigation();

  const [currentLoder, setCurrentLoder] = useState(null)
  const handlePres=(loader)=>{
    setCurrentLoder(loader)
  }

 
 
  if (!currentLoder) {
    return (
      <View style={styles.contain}>
        <ImageBackground
          source={require("../../../../assets/bannerClient.png")}
          style={[styles.banner]}
          resizeMode="cover"
        >
          <View>
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
  
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                letterSpacing: 0.5,
                color: Colors.black,
                marginLeft: 15,
              }}
            >
              Cliente
            </Text>
          </View>
          <SearchBar
            onChange={setSearchTxt}
            value={searchTxt}
            onPress={() => handlePres("Scan")}
            placeholder="Recherche"
            type="client"
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
    return(
    <ScanQrCode setCurrentLoader={setCurrentLoder}/>

    )
    
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
