import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import * as Animatable from "react-native-animatable";
const JournalCompta = ({ item, index }) => {
  return (
    <Animatable.View
      style={styles.container}
      delay={index * 50}
      animation="fadeInDown"
    >
      {item.condition === "BENEFICES" && (
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
            // width: ,
            fontSize: Platform.OS === "ios" ? 14 : 12,
            color: Colors.black,
          }}
        >
          {item.content.substring(0, 30)}
        </Text>
      </View>
      <View>
        <Text style={{ color: Colors.darkGray, marginTop: 20 }}>
          {item.montant}
        </Text>
        <Text style={{ textAlign: "center", color: Colors.darkGray }}>CFA</Text>
      </View>
    </Animatable.View>
  );
};

export default JournalCompta;

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: Colors.background,
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 10,
    // padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90.5%",
    alignSelf: "center",
  },
});
