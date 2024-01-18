import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";
import Icon, { Icons } from "../../Utils/Icons";
import { spacing } from "../../Utils/theme";
import { ProfileCard, ProfileLateral } from "../../Components";
import { collections, medias, profile } from "../../data/profile";
import { SafeAreaView } from "react-native-safe-area-context";
import useFavorisCollections from "../../contextCollections/FavorisContextCollections";
import useFavoris from "../../Context/FavorisContext";

const Profil = ({ navigation }: any) => {
  const { favorisLister } = useFavoris();
  const { favorisListerCollections } = useFavorisCollections();
  return (
    <LinearGradient
      colors={[Colors.bgLineaire, Colors.bgLineaire1]}
      style={[StyleSheet.absoluteFillObject]}
    >
   
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginTop: 2,
          }}
        >
          <Icon
            type={Icons.Ionicons}
            color={Colors.black}
            name={"chevron-back-outline"}
            size={60}
            style={{}}
          />
        </TouchableOpacity>
        <ProfileCard data={profile} />

        <ProfileLateral
          navigation={navigation}
          collections={favorisListerCollections}
          medias={favorisLister}
        />
    </LinearGradient>
  );
};

export default Profil;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
