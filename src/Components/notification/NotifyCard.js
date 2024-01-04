import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import Icon, { Icons } from "../../Utils/Icons";
import * as Animatable from "react-native-animatable";

const { height, width } = Dimensions.get("screen");
const NotifyCard = ({ item, index }) => {
  return (
    <Animatable.View
      animation="fadeInDown"
      delay={index * 50}
      duration={300}
      useNativeDriver
      style={styles.container}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={item.avatar}
          style={{ height: 50, width: 50, borderRadius: 40 }}
          resizeMode="cover"
        />
        <View style={{ position: "absolute", right: -5, bottom: -8 }}>
          {item.isAccept ? (
            <Icon
              type={Icons.AntDesign}
              name="checkcircle"
              size={24}
              color={Colors.green}
            />
          ) : (
            <Icon
              type={Icons.AntDesign}
              name="closecircle"
              size={24}
              color={Colors.red}
            />
          )}
        </View>
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        {item.isAccept ? (
          <Text style={styles.txt}>Rendez-Vous Accepter</Text>
        ) : (
          <Text style={styles.txt}>Rendez-Vous Refuse</Text>
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "800",
            letterSpacing: 0.5,
            margin: 10,
          }}
        >
          {item.time}
        </Text>
      </View>
    </Animatable.View>
  );
};

export default NotifyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    width: width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: 10,
    margin: 5,
    padding: 5,
    elevation: 5,
    backgroundColor: Colors.white,
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
  },
  txt: {
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginLeft: 40,
  },
  name: {
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.5,
    margin: 10,
  },
});
