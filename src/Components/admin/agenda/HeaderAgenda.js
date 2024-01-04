import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";
import Icon, { Icons } from "../../../Utils/Icons";

const HeaderAgenda = ({ label, date }) => {
  return (
    <View style={styles.Card}>
      <TouchableOpacity>
        <Icon
          type={Icons.Ionicons}
          name="chevron-back"
          color={Colors.white}
          size={30}
        />
      </TouchableOpacity>

      <View>
        <Text
          style={{
            fontSize: 18,
            letterSpacing: 0.5,
            color: Colors.white,
            fontWeight: "700",
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            fontSize: 15,
            letterSpacing: 0.5,
            color: Colors.white,
            fontWeight: "400",
            marginTop: 2,
          }}
        >
          {date}
        </Text>
      </View>
      <TouchableOpacity>
        <Icon
          type={Icons.Ionicons}
          name="chevron-forward"
          color={Colors.white}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderAgenda;

const styles = StyleSheet.create({
  Card: {
    height: 60,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderRadius: 20,
    elevation: 5,
    marginTop: 35,
    paddingHorizontal: 20,
  },
});
