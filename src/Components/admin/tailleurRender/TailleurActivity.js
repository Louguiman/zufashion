import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import * as Animatable from "react-native-animatable";
const TailleurActivity = ({ item, index }) => {
  return (
    <Animatable.View
      style={styles.container}
      delay={index * 50}
      animation="fadeInDown"
    >
      {item.condition === "CLIENT" && (
        <View
          style={{
            backgroundColor: Colors.gold,
            height: 35,
            width: 35,
            borderRadius: 15,
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
          }}
        >
          <Icon
            type={Icons.FontAwesome}
            name="address-book-o"
            size={20}
            color={Colors.white}
          />
        </View>
      )}
      {item.condition === "GAIN" && (
        <View
          style={{
            backgroundColor: Colors.green,
            height: 35,
            width: 35,
            borderRadius: 15,
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
          }}
        >
          <Icon
            type={Icons.FontAwesome5}
            name="money-bill-alt"
            size={20}
            color={Colors.white}
          />
        </View>
      )}
      {item.condition === "DEPENSE" && (
        <View
          style={{
            backgroundColor: Colors.red,
            height: 35,
            width: 35,
            borderRadius: 15,
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
          }}
        >
          <Icon
            type={Icons.FontAwesome5}
            name="money-bill-alt"
            size={20}
            color={Colors.white}
          />
        </View>
      )}

      <View style={{ marginLeft: -5, marginRight: -8 }}>
        <Text
          style={{
            fontSize: Platform.OS === "ios" ? 13 : 14,
            color: Colors.darkOverlayColor2,
            fontWeight: Platform.OS === "ios" ? "400" : "bold",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            width: 110,
            fontSize: Platform.OS === "ios" ? 14 : 12,
            color: Colors.black,
          }}
        >
          {item.content.substring(0, 30)}
        </Text>
      </View>
      <View>
        <Text style={{ color: Colors.darkGray, marginTop: 20 }}>
          {item.timestamp}
        </Text>
      </View>
    </Animatable.View>
  );
};

export default TailleurActivity;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: Colors.background,
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 10,
    // padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "98.5%",
  },
});
