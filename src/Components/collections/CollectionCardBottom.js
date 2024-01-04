import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../Utils/Colors";

const CollectionCardBottom = ({ content, onPress, itemIndex, isSelect }) => {
  const handleChange = () => {
    onPress(itemIndex);
  };
  return (
    <TouchableOpacity onPress={handleChange} style={{}}>
      <Image
        source={content[0]}
        style={{
          height: 110,
          width: 110,
          marginHorizontal: 3,
          borderRadius: 10,
          borderWidth: 5,
          borderColor: isSelect === itemIndex ? Colors.primary : null,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default CollectionCardBottom;

const styles = StyleSheet.create({});
