import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Badge } from "react-native-paper";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import Icon, { Icons } from "../../Utils/Icons";

const Header = ({
  useName,
  onPress,
  type = "main" || "admin" || "poste",
  style,
}) => {
  const navigation = useNavigation();
  switch (type) {
    case "main":
      return (
        <View style={styles.contain}>
          <View style={[styles.container]}>
            <View style={styles.left}>
              <Image
                source={require("../../../assets/Auth/logo.png")}
                style={styles.logo}
                resizeMode="cover"
              />
              {/* <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AppStack", { screen: "Notification" })
                }
              >
                <Badge style={{ position: "absolute", left: 14, bottom: 12 }}>
                  10+
                </Badge>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity> */}
            </View>

            <TouchableOpacity onPress={onPress} style={[styles.right, style]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: 190,
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnozsb1QEhjyjE7p-bGl9hQOkJh0brsUKoA&usqp=CAU",
                  }}
                  style={{ height: 25, width: 25, borderRadius: 15 }}
                  resizeMode="cover"
                />
                <Text style={styles.txtBtn}>{useName}</Text>

                <MaterialIcons name="verified" size={24} color="#37AA9C" />
              </View>
              <Ionicons name="ios-settings" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      );
      break;

    case "collections":
      return (
        <View style={[styles.containerad]}>
          <View style={styles.left}>
            <Image
              source={require("../../../assets/Auth/logo.png")}
              style={styles.logo}
              resizeMode="cover"
            />
          </View>

          <TouchableOpacity onPress={onPress} style={[styles.right, style]}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 105,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: Platform.OS === "android" ? "600" : "400",
                }}
              >
                Ajouter
              </Text>
              <Icon
                type={Icons.Ionicons}
                name="add-circle-sharp"
                size={28}
                color="#37AA9C"
                style={{ marginTop: -2 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
      break;

    default:
      break;
  }
};

export default Header;

const styles = StyleSheet.create({
  contain: {
    // flex: 1,
    marginTop: 5,
    // paddingHorizontal: 8,
    borderBottomWidth: 0.75,
    borderColor: "rgba(0,0,0,0.2)",
    // justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    alignItems: "center",
    // minWidth: 250,
    // maxWidth: 320,
    padding: 10,
    borderBottomWidth: 0.75,
    backgroundColor: Colors.grayLight,
  },
  containerad: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    alignItems: "center",
    // minWidth: 350,
    // maxWidth: 420,
    padding: 10,
  },
  left: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 130,
  },
  right: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    height: 35,
    // minWidth: 215,
    // maxWidth: 350,
    alignItems: "center",
    borderRadius: 50,
    padding: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.3,
  },
  logo: {
    height: 90,
    width: 90,
    marginTop: 9.2,
    marginLeft: -35,
  },
  logoPoste: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginLeft: 85,
  },
  containerPoste: {
    flexDirection: "row",
    // justifyContent: "space-between",
    height: 60,
    alignItems: "center",
    minWidth: 350,
    maxWidth: 420,
    // padding: 10,
  },
  txtBtn: {
    fontSize: 18,
    fontWeight: Platform.OS === "android" ? "bold" : "400",
    letterSpacing: 0.5,
    // width: 90,
    textAlign: "center",
  },
});
