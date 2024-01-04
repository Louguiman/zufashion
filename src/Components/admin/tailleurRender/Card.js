import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
import { LinearGradient } from "expo-linear-gradient";
import TailleurActivity from "./TailleurActivity";
import ButtonIcon from "../ButtonIcon";

const Card = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  const Accordian = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View style={styles.contain}>
      {!isSelected && (
        <TouchableOpacity onPress={() => Accordian()} style={styles.containner}>
          {!isSelected ? (
            <Icon
              type={Icons.Ionicons}
              name="chevron-forward"
              size={27}
              color={Colors.white}
            />
          ) : (
            <Icon
              type={Icons.Octicons}
              name="chevron-down"
              size={27}
              color={Colors.white}
              style={{ marginRight: 10 }}
            />
          )}

          <>
            <Text style={styles.txt}>{item.nom}</Text>
            <Text style={[styles.txt, { marginLeft: 8 }]}>{item.Prenom}</Text>
          </>

          {isSelected && (
            <View style={{ marginLeft: 35, height: 35 }}>
              <ButtonIcon
                color={Colors.black}
                type={Icons.MaterialIcons}
                iconeName="delete"
                placeholder="Supprimer"
                onPress={() => {}}
                style={{ borderColor: Colors.redAlpha }}
              />
            </View>
          )}
        </TouchableOpacity>
      )}

      {!isSelected && (
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.white,
            width: "80%",
            alignSelf: "center",
          }}
        />
      )}
      {isSelected && (
        <LinearGradient
          colors={[Colors.bgTailleur1, Colors.bgTailleur2]}
          style={styles.accordian}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 2 }}
        >
          <Pressable
            onPress={() => Accordian()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              // marginRight: 40,
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                type={Icons.Octicons}
                name="chevron-down"
                size={27}
                color={Colors.white}
                style={{ marginRight: 10 }}
              />
              <Text style={styles.txt}>{item.nom}</Text>
              <Text style={[styles.txt, { marginLeft: 8 }]}>{item.Prenom}</Text>
            </View>
            {isSelected && (
              <ButtonIcon
                color={Colors.black}
                type={Icons.MaterialIcons}
                iconeName="delete"
                placeholder="Supprimer"
                onPress={() => {}}
                style={{ borderColor: Colors.red, marginLeft: 20, height: 35 }}
              />
            )}
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // padding: 10,
              flex: 1,
            }}
          >
            <View style={{}}>
              <Image
                source={item.avatar}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Icon
                  type={Icons.MaterialIcons}
                  color={Colors.white}
                  name="phone-iphone"
                  size={24}
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                    letterSpacing: 0.5,
                    color: Colors.white,
                  }}
                >
                  {item.tel}
                </Text>
              </View>
            </View>
            <View style={{ flex: 4, marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "900",
                  letterSpacing: 0.5,
                  color: Colors.white,
                  margin: 5,
                  marginTop: 10,
                  marginLeft: 55,
                }}
              >
                Activite Récente
              </Text>
              {/* <FlatList
                data={item.activity}
                renderItem={({ item }) => <TailleurActivity item={item} />}
                keyExtractor={(i) => i.id}
                style={{
                  flexGrow: 1,
                  padding: 5,
                  marginTop: 5,
                  marginLeft: 10,
                  height: 80,
                }}
                contentContainerStyle={{
                  paddingBottom: 30,
                }}
              /> */}
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  marginTop: 10,
                  marginLeft: 10,
                  paddingBottom: 30,
                }}
                style={{ height: 280, width: "100%" }}
                nestedScrollEnabled
                horizontal={false}
              >
                {item.activity.map((element) => (
                  <TailleurActivity item={element} />
                ))}
              </ScrollView>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  containner: {
    width: "100%",
    height: 70,

    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 100,
  },
  txt: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.white,
    letterSpacing: 1.5,
  },
  accordian: {
    minHeight: 280,
    maxHeight: 480,
    width: "98%",
    borderTopRightRadius: 50,
    borderRadius: 10,
    // flexDirection: "row",
    padding: 8,
    marginTop: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginTop: 50,
    // marginLeft: 25,
  },
});
