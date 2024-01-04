import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";
import { Filter, Journal, JournalCompta, Tableau } from "../../../Components";
import { FlatList } from "react-native-gesture-handler";
import { journal } from "../../../data/journal";

const { height, width } = Dimensions.get("screen");

const Compta = () => {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(true);
  const onSwitch = () => {
    setIsActive(!isActive);
  };
  return (
    <ImageBackground
      source={require("../../../../assets/comptaBanner.png")}
      style={styles.contain}
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

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: 0.5,
            color: Colors.black,
            marginLeft: 90,
            marginTop: -30,
          }}
        >
          Compabilité
        </Text>
      </View>
        <Tableau />
   
        <Filter style={{ position: "absolute", top: 365, zIndex: 1 }} activeIndex={isActive} onSwitch={onSwitch} />
  
      <ImageBackground
        source={require("../../../../assets/comptaBlur1.png")}
        style={styles.bottom}
      >
        <FlatList
          data={journal}
          renderItem={({ item, index }) => (
            <JournalCompta item={item} index={index} />
          )}
          keyExtractor={(i): any => i.id}
          style={{
            marginTop: 135,
          }}
          contentContainerStyle={{
            paddingBottom: 90,
          }}
        />
      </ImageBackground>
    </ImageBackground>
  );
};

export default Compta;

const styles = StyleSheet.create({
  contain: {
    height,
    width,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    height: 490,
    width: "100%",
  },
});
