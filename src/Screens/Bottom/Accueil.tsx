import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from "react-native";

import React, { useRef, useState } from "react";
import { CardPoste, Header, PosteHeader } from "../../Components";
import { Poste } from "../../data/poste";
import { useNavigation } from "@react-navigation/native";
import  {FloatingAction,} from "react-native-floating-action";
import Colors from "../../Utils/Colors";

const Accueil = ({ navigation }: any) => {
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
  const [user, setuser] = useState("User");
  const actions = [
    {
      text: "Gestion Client",
      icon: require("../../../assets/iconsGestion/client.png"),
      name: "Client",
      position: 1,
    },
  ];
  return (
    <SafeAreaView style={styles.contain}>
      <Header
        useName="Cheick Abba"
        type="main"
        onPress={() => navigation.navigate("AppStack", { screen: "Profil" })}
      />

      <PosteHeader
        onPress={() => navigation.navigate("AppStack", { screen: "Poste" })}
        style={{}}
        translateY={TranslateY}
        opacity={opacity}
      />
      <Animated.FlatList
        onScroll={onScroll}
        data={Poste}
        renderItem={({ item, index }) => (
          <CardPoste key={index} type="main" item={item} index={index} />
        )}
        keyExtractor={(item): any => item.id}
        // style=
        contentContainerStyle={{ paddingBottom: 120, marginTop: 60 }}
      />
      {user === "User" && (
        <Animated.View
          style={{
            position: "relative",
            zIndex: 100,
            top: Platform.OS === "ios" ? -45 : -60,

            transform: [{ translateY: TranslateY }],
            opacity,
          }}
        >
          <FloatingAction
            actions={actions}
            onPressItem={(name) => {
              navigation.navigate("AppStack", { screen: `${name}` });
            }}
            position="right"
            shadow={{
              shadowOpacity: 0.35,
              shadowOffset: { width: 0, height: 5 },
              shadowColor: "#000000",
              shadowRadius: 3,
            }}
            buttonSize={65}
            color={Colors.primary}
            distanceToEdge={10}
            showBackground={false}
            iconHeight={20}
            iconWidth={20}
            listenKeyboard={true}
            overlayColor="rgba(0, 0, 0, 0.9)"
            actionsPaddingTopBottom={8}
           
    

          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default Accueil;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
