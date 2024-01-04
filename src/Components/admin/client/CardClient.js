import {
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CardClient = ({ item }) => {
  // console.log("mes item :", item);
  const [open, setOpen] = useState(false);
  const [isCheck, setisCheck] = useState(false);
  const onPress = () => {
    // LayoutAnimation.easeInEaseOut();
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.row}>
          <Image
            source={item.avatar}
            style={styles.avatar}
            resizeMode="cover"
          />

          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.txt}>{item.nom}</Text>
              <Text style={styles.txt}>{item.prenom}</Text>
            </View>
            <Text style={[styles.txt, { marginLeft: 0, margin: 2 }]}>
              {item.telephone}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                type={Icons.Ionicons}
                name="chevron-forward"
                size={24}
                color={Colors.green}
              />
              {open && <Text style={styles.txt}>Confection en Cours</Text>}
            </View>

            {item.task.map((element) => {
              return (
                <View style={{ flexDirection: "row" }} key={element.id}>
                  <Text style={styles.task}>{element.title}</Text>
                  {open ? (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "600",
                          letterSpacing: 0.5,
                          marginLeft: 10,
                          color: Colors.gray,
                        }}
                      >
                        {element.prix}
                      </Text>
                      <View
                        style={{
                          height: 15,
                          width: 5,
                          backgroundColor: element.depence
                            ? Colors.green
                            : Colors.red,
                          borderRadius: 30,
                          marginLeft: 5,
                        }}
                      />
                    </View>
                  ) : null}
                </View>
              );
            })}
          </View>
        </View>

        {open ? (
          <View style={{ marginTop: 80 }}>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                left: 170,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  marginLeft: 10,
                  color: Colors.gray,
                }}
              >
                A livre le
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  marginLeft: 10,
                  color: Colors.gray,
                }}
              >
                {item.datelivre}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                type={Icons.Ionicons}
                name="chevron-forward"
                size={24}
                color={Colors.green}
              />
              <Text style={styles.txt}>Confection Recent</Text>
            </View>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
              {item.taskEnd.map((x) => {
                return (
                  <View
                    key={x.id}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text style={styles.subItem}>{x.name}</Text>
                    <Text style={styles.subItem}>{x.prix}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default CardClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: 330,
    borderWidth: 1,
    paddingHorizontal: 5,
    overflow: "hidden",
    paddingVertical: 80,

    margin: 5,
    // minHeight: 120,
    // maxHeight: 270,

    backgroundColor: Colors.card,
    alignSelf: "center",
    borderRadius: 20,
  },
  subItem: {
    padding: 5,
    color: "white",
  },
  row: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    left: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
    color: Colors.white,
    marginRight: 10,
  },
  task: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.5,
    color: Colors.white,
    marginLeft: 15,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 8,

    elevation: 5,
    marginTop: 25,
  },
});