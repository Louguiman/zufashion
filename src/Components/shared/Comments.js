import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { getFirstLetter } from "../../Utils/getRandomColor";
import Colors from "../../Utils/Colors";

const Header = ({ name, email }) => {
  return (
    <View style={{ flexDirection: "row", maxHeight: 50 }}>
      <View
        style={{
          backgroundColor: Colors.bottom,
          height: 35,
          width: 35,
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600", color: "gray" }}>
          {getFirstLetter(name)}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          marginLeft: 5,
          paddingHorizontal: 2,
          paddingBottom: 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {name.substring(0, 20)}
          </Text>
          <EvilIcons
            name="check"
            style={{ marginLeft: 2 }}
            size={14}
            color="green"
          />
        </View>
        <Text style={{ fontSize: 10, fontWeight: "400", opacity: 0.75 }}>
          @_{email}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          right: 0,
          top: 0,
          alignItems: "center",
          marginRight: 5,
          justifyContent: "space-around",
        }}
      >
        <EvilIcons name="clock" size={14} color="gray" />
        <Text style={{ fontSize: 10, fontWeight: "400", opacity: 0.75 }}>
          Il y'a 10 minutes
        </Text>
      </View>
    </View>
  );
};
const Footer = () => {
  const [showComment, setShowComment] = useState(false);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          maxHeight: 40,
          marginTop: 5,
          marginLeft: 10,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setShowComment(!showComment);
          }}
        >
          <View>
            <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
              <FontAwesome name="reply" size={15} color="gray" /> 0{" "}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
          <FontAwesome name="heart-o" size={15} color="gray" /> 0{" "}
        </Text>
        <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
          <FontAwesome name="retweet" size={15} color="gray" /> 0{" "}
        </Text>
        <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
          <FontAwesome name="upload" size={15} color="gray" /> 0{" "}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            alignItems: "center",
            marginRight: 0,
          }}
        >
          <SimpleLineIcons name="options-vertical" size={15} color="gray" />
        </TouchableOpacity>
      </View>

      {showComment ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="send-circle-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export const Comments = ({ data }) => {
  // console.log("id", data);
  return (
    <View
      style={{
        marginVertical: 2,
        minHeight: 100,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.bottom,
      }}
    >
      <Header name={data.name} email={data.email} />
      <Text
        style={{
          marginLeft: 40,
          fontSize: 10,
          fontWeight: "400",
          textAlign: "left",
        }}
      >
        {data.body}
      </Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: 280,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: Colors.bottom,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.bottom,
    borderRadius: 60,

    height: 35,
    elevation: 5,

    padding: 5,
  },
});

export default Comments;
