import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Image
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { Box, ScanQrCode, SearchBar } from "../../../Components";
import { FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { mesTailleur } from "../../../data/mesTailleur";
import Card from "../../../Components/admin/tailleurRender/Card";
const { width, height } = Dimensions.get("screen");
const Tailler = ({ setCurrentLoader }: any) => {
  const navigation = useNavigation();
  const [serachText, setserachText] = useState("");
  const [currentChange, setCurrentChange] = useState(null);
  const handlePress = (): any => {
    setCurrentLoader(null);
  };
  const handleChange = (loader: any) => {
    setCurrentChange(loader);
  };
  const headerHeight = 0;
  let scrollValue = 0;
  let headerVisible = true;
  let focused = false;

  const animation = useRef(new Animated.Value(1)).current;
  const TranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, headerHeight / 2 - 2],
  });

  const opacity = animation;
  const onScroll = (e) => {
    if (focused) return;
    const y = e.nativeEvent.contentOffset.y;
    if (y > scrollValue && headerVisible && y > headerHeight / 2) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = false;
    }
    if (y < scrollValue && !headerVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = true;
    }
    scrollValue = y;
  };
  if (!currentChange) {
    return (
      <Animatable.View style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/atelier_banner.png")}
          style={styles.contain}
          resizeMode="cover"
        >
          <View style={{ position: "absolute" }}>
            <TouchableOpacity
              style={{ zIndex: 1 }}
              onPress={() => handlePress()}
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
            Mes Tailleur
          </Text>
        </ImageBackground>
        <ImageBackground
          source={require("../../../../assets/BackDrop.png")}
          style={styles.BlurView}
        >
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
              width: 150,
            }}
          >
           Organisé Votre Equipe
          </Text>
          <Image
            source={require("../../../../assets/iconsGestion/mes_tailleur.png")}
            style={{ height: 70, width: 70, marginLeft: 60 }}
            resizeMode="cover"
          />
        </View>
        </ImageBackground>
        <SearchBar
          onChange={setserachText}
          onPress={() => handleChange("Scan")}
          value={serachText}
          type="Tailleur"
          translateY={TranslateY}
          opacity={opacity}
        />
        <FlatList
          data={mesTailleur}
          onScroll={onScroll}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(i):any => i.id}
          style={{
            // backgroundColor: Colors.bgTailleue,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flexGrow: 1,
            padding: 5,
            marginTop: 90,
          }}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
        />
      </Animatable.View>
    );
  }
  if (currentChange === "Scan") {
    return <ScanQrCode setCurrentLoader={setCurrentChange} />;
  }
};

export default Tailler;

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
