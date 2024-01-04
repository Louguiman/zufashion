import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";

const RenderItem = ({ item }) => {
  return (
    <Animatable.View
      style={styles.container}
      delay={300}
      duration={500}
      animation="fadeInDown"
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 2,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.light,
            width: 65,
            height: 65,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: Platform.OS === "ios" ? "400" : "bold",
              color: Colors.black,
              letterSpacing: 1.5,
            }}
          >
            {item.date}
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: Platform.OS === "ios" ? 10 : 14,
                fontWeight: Platform.OS === "ios" ? "400" : "600",
                color: Colors.black,
                letterSpacing: 1.5,
              }}
            >
              {item.mois}
            </Text>
            <Icon
              type={Icons.MaterialIcons}
              name="date-range"
              size={15}
              color={Colors.black}
              style={{ marginTop: 1.5 }}
            />
          </View>
        </View>
        <View
          style={{
            width: 190,
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: Platform.OS === "ios" ? "400" : "600",
              color: Colors.darkGray,
              letterSpacing: 1.5,
            }}
          >
            {item.timeStamp}
          </Text>
          <Text
            style={{
              fontSize: Platform.OS === "ios" ? 11 : 14,
              fontWeight: Platform.OS === "ios" ? "400" : "600",
              color: Colors.white,
              letterSpacing: 1.5,
            }}
          >
            {item.motif}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    height: 75,
    borderRadius: 10,
    // backgroundColor: Colors.card,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    // elevation: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.background,
  },
});
