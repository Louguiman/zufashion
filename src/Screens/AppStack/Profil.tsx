import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";
import Icon, { Icons } from "../../Utils/Icons";

import { BackButton } from "../../Components";

import SectionProfil from "../../Components/profile/SectionProfil";

const Profil = ({ navigation }: any) => {
  return (
    <LinearGradient
      colors={[Colors.bgLineaire, Colors.bgLineaire1]}
      style={[
        StyleSheet.absoluteFillObject,
        { paddingTop: Platform.OS === "ios" ? 70 : 50 },
      ]}
    >
      <BackButton onPres={() => navigation.goBack()} style={{}} />
      <>
        <ScrollView>
          <View style={styles.header}>
            <Image
              source={require("../../../assets/profil.jpg")}
              style={styles.img}
              resizeMode="cover"
            />

            <Text
              style={{
                fontSize: 18,
                letterSpacing: 0.5,
                fontWeight: "700",
                color: Colors.black,
                margin: 5,
              }}
            >
              Sogodogo
              {" __ "}
              Cheick abba
            </Text>
            <Text
              style={{
                fontSize: 18,
                letterSpacing: 0.5,
                fontWeight: "700",
                color: Colors.darkGray,
              }}
            >
              @Asogodogo18
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfil")}
              style={styles.touch}
            >
              <Icon
                type={Icons.FontAwesome}
                name="edit"
                size={24}
                color={Colors.white}
                style={{}}
              />
              <Text
                style={{
                  fontSize: 18,
                  letterSpacing: 0.5,
                  fontWeight: "700",
                  color: Colors.white,
                  marginLeft: 10,
                }}
              >
                Modifier
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <SectionProfil
              iconName={"face-agent"}
              size={40}
              color={Colors.white}
              iconType={Icons.MaterialCommunityIcons}
              label={"Contactes le creacteur"}
              onPress={() => {}}
              style={{}}
            />
            <SectionProfil
              iconName={"clipboard-notes"}
              size={40}
              color={Colors.white}
              iconType={Icons.Foundation}
              label={"Faire une Suggestion"}
              onPress={() => {}}
              style={{}}
            />
            <SectionProfil
              iconName={"face-agent"}
              size={40}
              color={Colors.white}
              iconType={Icons.MaterialCommunityIcons}
              label={"Contactes le creacteur"}
              onPress={() => {}}
              style={{}}
            />
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.touch,
            { backgroundColor: Colors.red, alignSelf: "center", width: 220 },
          ]}
        >
          <Icon
            type={Icons.AntDesign}
            name="logout"
            size={24}
            color={Colors.white}
            style={{}}
          />
          <Text
            style={{
              fontSize: 18,
              letterSpacing: 0.5,
              fontWeight: "700",
              color: Colors.white,
              marginLeft: 10,
            }}
          >
            Deconnexion
          </Text>
        </TouchableOpacity>
      </>
    </LinearGradient>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  img: {
    height: 140,
    width: 140,
    borderRadius: 150,
    borderWidth: 2.5,
    borderColor: Colors.primary,
  },
  touch: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    elevation: 5,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: 150,
    justifyContent: "center",
    marginBottom: Platform.OS === "ios" ? 30 : 10,
  },

  section: {
    padding: 10,
    marginTop: 10,
  },
});
