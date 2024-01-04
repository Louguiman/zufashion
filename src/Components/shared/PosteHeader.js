import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon, { Icons } from "../../Utils/Icons";
import Colors from "../../Utils/Colors";

const PosteHeader = ({ onPress, style, translateY, opacity }) => {
  return (
    <Animated.View
      style={[
        styles.contain,
        {
          transform: [{ translateY: translateY }],
          opacity,
        },
      ]}
    >
      <TouchableOpacity onPress={onPress} style={[styles.fab, style]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/profil.jpg")}
            style={styles.avatar}
            resideMode="cover"
          />
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: Colors.green,
              position: "absolute",
              bottom: 3,
              right: 0,
              zIndex: 10,
            }}
          />
        </View>
        <View
          style={{
            width: "70%",
            height: 40,
            backgroundColor: Colors.darkGray,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "800",
              letterSpacing: 0.5,
              color: Colors.white,
            }}
          >
            Plublier Maintenant
          </Text>
        </View>
        <Icon
          type={Icons.MaterialCommunityIcons}
          style={{ marginTop: 2, marginLeft: -2 }}
          name="book-plus-multiple-outline"
          size={35}
          color={Colors.darkGray}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PosteHeader;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    zIndex: 1,
  },
  fab: {
    zIndex: 1,
    height: 60,
    width: "100%",
    backgroundColor: Colors.lightOverlayColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.darkGray,
    elevation: 2.5,
  },
});
