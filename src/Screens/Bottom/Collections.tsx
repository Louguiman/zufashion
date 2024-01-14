import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { collectios } from "../../data/collections";
import { CollectionCard, Header } from "../../Components";
import { SafeAreaView } from "react-native-safe-area-context";


const Collections = () => {
  return (
    <SafeAreaView style={styles.contain}>
      <Header type={"collections"} onPress={()=>{}}  />
      <FlatList
        data={collectios}
        renderItem={({ item }) => <CollectionCard item={item} />}
        keyExtractor={(i):any => i.id}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </SafeAreaView>
  );
};

export default Collections;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
