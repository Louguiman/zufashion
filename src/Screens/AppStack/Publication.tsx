import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from "react-native";
import React, { useRef, useMemo, useCallback } from "react";
import Swipers from "../../Components/shared/Swiper";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import Colors from "../../Utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Buttom, PublicationCard } from "../../Components";
import { Poste } from "../../data/poste";
const Publication = ({ route }: any) => {
  const { item } = route.params;
  console.log(item.comments);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.contain}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          zIndex: 10000,
          top: 10,
          left: 10,
          height: 40,
          width: 40,
          backgroundColor: "rgba(0,0,0,0.4)",
          padding: 5,
          borderRadius: 20,
        }}
      >
        <MaterialIcons name="arrow-back-ios" size={35} color={Colors.white} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Swipers
          height={420}
          width={Platform.OS === "ios" ? 0 : "100%"}
          image={item.img}
          borderRadius={0}
          alignSelf="center"
          type="details"
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.headerBottom}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: 170,
            }}
          >
            <Image
              source={item.avatar}
              style={{ height: 45, width: 45, borderRadius: 35 }}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontSize: 14.5, fontWeight: "500" }}>
                {item.nom}
              </Text>
              <Text style={{ fontSize: 12.5, fontWeight: "300" }}>
                {item.createAt}
              </Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <Buttom
              onPress={() =>
                Linking.openURL("whatsapp://send?text=Slaut&phone=+22371332502")
              }
              placeholder="Whatsapp"
              type="btnRdv"
              style={{ width: 70 }}
            />
            <Buttom
              onPress={() => Linking.openURL(`${item.telephone}`)}
              placeholder="Telephone"
              type="btnRdv"
              style={{ width: 70 }}
            />
          </View>
        </View>
        <View style={styles.desc}>
          <Text
            style={{ fontSize: 12, fontWeight: "600", textAlign: "center" }}
          >
            {item.desc}
          </Text>
        </View>

        <View />

        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          // nestedScrollEnabled
          
          horizontal
          keyExtractor={(item): any => item.id}
          data={Poste}
          renderItem={({ item }) => <PublicationCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Publication;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  header: {
    // position: "relative",
    top: 0,
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 5,
  },
  rightHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
    width: 150,
  },
  desc: { alignItems: "center", padding: 5 },
});
