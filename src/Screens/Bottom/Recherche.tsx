import {  StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

import tailleur from "../../data/tailleur";
import { Poste } from "../../data/poste";
import { CardPoste, Header, SearchBar, SearchCard } from "../../Components";
import { SafeAreaView } from "react-native-safe-area-context";


const Recherche = () => {
  const [serachTxt, setSerachTxt] = useState("");
  const [switche, setSwitche] = useState(false);
  return (
    <SafeAreaView style={styles.contain}>
      <Header useName={"Abba"} />
      <SearchBar
        value={serachTxt}
        onChange={setSerachTxt}
        placeholder={"Recherche"}
        onPress={() => setSwitche(!switche)}
        type="main"
      />
      <View style={styles.container}>
        {switche ? (
          <FlatList
            data={Poste}
            renderItem={({ item, index }) => (
              <CardPoste item={item} index={index} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 120 }}
          />
        ) : (
          <FlatList
            data={tailleur}
            renderItem={({ item }) => <SearchCard item={item} />}
            pagingEnabled
            keyExtractor={(i) => i.id}
            contentContainerStyle={{ paddingBottom: 75 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Recherche;

const styles = StyleSheet.create({
  contain: { flex: 1 },
  container: {
    marginTop: 55,
  },
});
