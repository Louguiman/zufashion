import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { spacing } from "../../Utils/theme";
import { useNavigation } from "@react-navigation/native";

const ProfileHeader = ({ data }) => {
  // console.log("data", data);
  const RenderItem = ({ item }) => {
    // console.log("item", item);
    const navigation = useNavigation();
    return (
      <View style={styles.contain}>
        <Image source={item.avatar} style={styles.avatar} resizeMode="cover" />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.prenom}>{item.prenom}</Text>

        <View style={styles.card}>
          <View style={styles.header}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 90,
                  backgroundColor: Colors.primary,
                  flexDirection: "row",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: Platform.OS === "ios" ? 12 : 13,
                    fontWeight: Platform.OS === "ios" ? "500" : "bold",
                  }}
                >
                  Suivre
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  right: Platform.OS === "ios" ? -18 : -15,
                  top: Platform.OS === "ios" ? -7 : -5,
                }}
              >
                <Ionicons
                  name="add-circle"
                  size={40}
                  color="white"
                  style={{ elevation: 5 }}
                />
              </View>
            </View>
            <TouchableOpacity>
              <AntDesign
                name="calendar"
                size={30}
                color="black"
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfil", { item })}
            >
              <MaterialCommunityIcons
                name="account-cog-outline"
                size={35}
                color="black"
                style={{ marginLeft: 20, marginBottom: 2 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.txt}>{item.follower}</Text>

              <Text style={styles.txt}>Abonnées</Text>
            </View>
            <Image
              source={require("../../../assets/line.png")}
              style={{ height: 30, width: 2 }}
            />
            <View>
              <Text style={styles.txt}>{item.collection}</Text>
              <Text style={styles.txt}>Collections</Text>
            </View>

            <Image
              source={require("../../../assets/line.png")}
              style={{ height: 30, width: 2 }}
            />

            <View>
              <Text style={styles.txt}>{item.publication}</Text>
              <Text style={styles.txt}>Publications</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.contain}>
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderItem item={item} key={(i) => i.id} />}
      />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  contain: {
    zIndex: 1,
    // flex: 1,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 70,
    position: "absolute",
    top: 30,
    zIndex: 1,
    left: 40,
    elevation: 5,
  },
  card: {
    height: 120,
    width: "100%",

    marginTop: 65,
    backgroundColor: Colors.background,
    borderTopStartRadius: 80,
  },
  name: {
    position: "absolute",
    top: Platform.OS === "ios" ? -10 : -10,
    right: 50,
    fontSize: 35,
    width: Platform.OS === "ios" ? 180 : 150,
    color: Colors.black,
    lineHeight: Platform.OS === "ios" ? 0 : 50,
    fontWeight: Platform.OS === "ios" ? "400" : "500",
  },
  prenom: {
    position: "absolute",
    top: Platform.OS === "ios" ? 30 : 20,
    right: 50,
    fontSize: 35,
    width: Platform.OS === "ios" ? 180 : 150,
    color: Colors.black,
    lineHeight: Platform.OS === "ios" ? 0 : 50,
    fontWeight: Platform.OS === "ios" ? "400" : "500",
  },
  header: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    height: 50,
    width: "100%",
    // backgroundColor: Colors.darkGray,
    left: 130,
    alignItems: "center",
    // justifyContent: "space-around",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    // backgroundColor: Colors.darkGray,
    paddingHorizontal: spacing.l,
    alignItems: "center",
  },
  txt: {
    fontSize: Platform.OS === "ios" ? 13 : 15,
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
  },
});
