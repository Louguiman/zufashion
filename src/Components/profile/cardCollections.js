import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const cardCollections = ({ data }) => {
  {
    data.map((img) => {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={img}
            style={{ height: 150, width: 150, flex: 1 }}
            resizeMode="cover"
          />
        </View>
      );
    });
  }
};

export default cardCollections;

const styles = StyleSheet.create({});
