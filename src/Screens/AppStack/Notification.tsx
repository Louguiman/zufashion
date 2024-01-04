import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, NotifyCard } from "../../Components";
import { notification } from "../../data/noticification";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
  return (
    <SafeAreaView style={styles.contain}>
      <Header useName="Abba" type="main" />
      <FlatList
        data={notification}
        renderItem={({ item,index }) => <NotifyCard item={item} index={index} />}
        keyExtractor={(i):any => i.id}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
