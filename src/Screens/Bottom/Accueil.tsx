import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Platform,
} from "react-native";

import React, { useRef, useState } from "react";
import { CardPoste, Header, PosteHeader } from "../../Components";
import { Poste } from "../../data/poste";
import { SafeAreaView } from "react-native-safe-area-context";

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

  return (
    <SafeAreaView style={styles.contain}>
      <Header useName="Abba" type="main" />

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
        contentContainerStyle={{ paddingBottom: 120, marginTop:60 }}
      />
    </SafeAreaView>
  );
};

export default Accueil;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
