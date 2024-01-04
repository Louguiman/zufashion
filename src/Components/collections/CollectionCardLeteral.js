import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../Utils/Colors";
import { ScrollView } from "react-native-gesture-handler";

const CollectionCardLeteral = ({
  gallery,
  onPress,

  index,
  isSelect,
  setIsSelect,
}) => {
  return (
    <View style={styles.contain} key={gallery.id}>
      <TouchableOpacity
        onPress={() => {
          onPress(gallery);
          setIsSelect(index);
        }}
        style={[styles.contain]}
        key={gallery.id}
      >
        <Image
          source={gallery}
          style={{
            height: 65,
            width: 65,
            marginVertical: 2,
            borderRadius: 10,
            alignSelf: "center",
            borderWidth: 2.5,
            borderColor: isSelect === index ? Colors.primary : null,
          }}
          fadeDuration={200}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CollectionCardLeteral;

const styles = StyleSheet.create({
  contain: {
    padding: 5,
  },
});
