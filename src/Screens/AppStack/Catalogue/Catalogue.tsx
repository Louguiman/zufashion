import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  ButtonIcon,
  CardCatalogue,
  RenderCatalogue,
} from "../../../Components";

import { collectios } from "../../../data/collections";
import Creation from "./Creation";
import Details from "./Details";

const { width, height } = Dimensions.get("screen");
const Catalogue = () => {
  const navigation = useNavigation();
  const [currentLoader, setCurrentLoader] = useState(null);

  const handlePress = (loader: any) => {
    setCurrentLoader(loader);
  };
  if (!currentLoader) {
    return (
      <View style={styles.contain}>
        <View>
          <Image
            source={require("../../../../assets/banner.png")}
            style={[styles.banner]}
            resizeMode="cover"
          />
          <View style={{ position: "absolute",top:35 }}>
          <BackButton onPres={()=>navigation.goBack()}/>


   
          </View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              letterSpacing: 1.5,
              color: Colors.white,
              marginLeft: 30,
              position: "absolute",
              top: 100,
            }}
          >
            Récent
          </Text>

          <FlatList
            style={{
              position: "absolute",
              zIndex: 1,
              top:Platform.OS === "ios"?170: 150,
              paddingRight: 100,
            }}
            horizontal
            showsVerticalScrollIndicator={true}
            data={collectios}
            renderItem={({ item }) => <CardCatalogue item={item} />}
          />
        </View>
        <ImageBackground
          source={require("../../../../assets/banner.png")}
          style={[styles.bannere]}
          resizeMode="cover"
        >
          <ImageBackground
            source={require("../../../../assets/Container.png")}
            style={styles.blur}
            resizeMode="cover"
          >
            <View style={styles.header}>
              <Text style={styles.headerTxt}>Mes Catalogues</Text>
            
                <ButtonIcon
                  placeholder="Créer"
                  color={Colors.black}
                  iconSize={24}
                  iconeName="pluscircle"
                  onPress={() =>handlePress('Creation')}
                  type={Icons.AntDesign}
                  style={{ width: 95, marginRight: 50, height: 35 }}
                />
            </View>
            <FlatList
              data={collectios}
              renderItem={({ item }) => <RenderCatalogue item={item}  navigation={navigation} />}
              keyExtractor={(i:any) => i.id}
            />
          </ImageBackground> 
        </ImageBackground>
      </View>
    );
  }
  if (currentLoader === "Creation") {
    return <Creation setCurrentLoader={setCurrentLoader}/>;
  }
};

export default Catalogue;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  banner: {
    height: height / 3.8,
    width: "100%",
    borderBottomLeftRadius: 70,
  },
  bannere: {
    height:Platform.OS === "ios"?390:325,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  blur: {
    height:Platform.OS === "ios"?390:390,
    width: "98%",
    // marginTop:10
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 2,
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: Colors.white,
  },
});
