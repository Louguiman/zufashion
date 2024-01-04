import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import * as Animatable from "react-native-animatable";

const Calendrie = () => {
  return (
    <Animatable.View
      style={styles.container}
      delay={300}
      duration={500}
      animation="fadeInDown"
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: Platform.OS === "ios" ? "400" : "600",
          color: Colors.white,
          letterSpacing: 1.5,
        }}
      >
        Prochain Rendez Vous
      </Text>
      <View
        style={{
          flexDirection: "row",
          //   width: 90,
          //   justifyContent: "space-around",
          paddingVertical: 2,
          paddingHorizontal: 10,
          //   alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: Colors.light,
            width: 65,
            height: 65,
            borderRadius: 20,
            alignItems: "center",
            // justifyContent: "center",
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
            15
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
              Sept
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
            11H00-12H00
          </Text>
          <Text
            style={{
              fontSize: Platform.OS === "ios" ? 11 : 14,
              fontWeight: Platform.OS === "ios" ? "400" : "600",
              color: Colors.white,
              letterSpacing: 1.5,
            }}
          >
            Ut commodo excepteur voluptate laborum ut dolore officia irure.
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default Calendrie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.card,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    elevation: 5,
  },
});
