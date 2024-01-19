import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StepBanner from "./StepBanner";
import { ScrollView } from "react-native-gesture-handler";

import { InputModal } from "..";
import Colors from "../../Utils/Colors";

const Steps2 = () => {
  const [prix, setPrix] = useState(Number);
  const [model, setModel] = useState(String);
  const [dos, setDos] = useState(Number);
  const [epaul, setEpaul] = useState(Number);
  const [cout, setCout] = useState(Number);
  const [epaulManche, setEPaulManche] = useState(Number);
  const [pointrine, setPointrine] = useState(Number);
  const [tTaille, settTaille] = useState(Number);
  const [longTaille, setLongTaille] = useState(Number);
  const [bassin, setBassin] = useState(Number);
  const [tManche, settManche] = useState(Number);
  const [longManche, setLongManche] = useState(Number);
  const [pinces, setPinces] = useState(Number);
  const [longTotale, setLongTotale] = useState(Number);
  const [longRobe, setLongRobe] = useState(Number);
  const [ceinture, setCeinture] = useState(Number);
  const [longPatalon, setLongPatalon] = useState(Number);
  const [frappe, setFrappe] = useState(Number);
  const [cuisse, setCuisse] = useState(Number);
  const [genou, setGenou] = useState(Number);
  const [longJupe, setLongJupe] = useState(Number);
  const [bas, setBas] = useState(Number);
  return (
    <ScrollView
      // stickyHeaderIndices={[0]}
      style={{}}
      contentContainerStyle={styles.contain}
    >
      {/* <StepBanner
        prix={prix}
        setPrix={setPrix}
        model={model}
        setModel={setModel}
      /> */}

      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Cuisse"
          style={styles.input}
          keyboardType="numeric"
          onChange={setCuisse}
          value={cuisse}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Genou"
          style={styles.input}
          keyboardType="numeric"
          onChange={setGenou}
          value={genou}
        />
      </View>

      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Long.Patalon"
          style={styles.input}
          keyboardType="numeric"
          onChange={setLongPatalon}
          value={longPatalon}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Frappe"
          style={styles.input}
          keyboardType="numeric"
          onChange={setFrappe}
          value={frappe}
        />
      </View>
      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Long.Robe"
          style={styles.input}
          keyboardType="numeric"
          onChange={setLongRobe}
          value={longRobe}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Ceinture"
          style={styles.input}
          keyboardType="numeric"
          onChange={setCeinture}
          value={ceinture}
        />
      </View>
      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Long.Taille"
          style={styles.input}
          keyboardType="numeric"
          onChange={longTaille}
          value={setLongTaille}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Bassin"
          style={styles.input}
          keyboardType="numeric"
          onChange={setBassin}
          value={bassin}
        />
      </View>

      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Pinces"
          style={styles.input}
          keyboardType="numeric"
          onChange={setPinces}
          value={pinces}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Long.Totale"
          style={styles.input}
          keyboardType="numeric"
          onChange={setLongTotale}
          value={longTotale}
        />
      </View>
      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="T.Manche"
          style={styles.input}
          keyboardType="numeric"
          onChange={settManche}
          value={tManche}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Long.Manche"
          style={styles.input}
          keyboardType="numeric"
          onChange={setLongManche}
          value={longManche}
        />
      </View>
      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Pointrine"
          style={styles.input}
          keyboardType="numeric"
          onChange={setPointrine}
          value={pointrine}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="T.Taille"
          style={styles.input}
          keyboardType="numeric"
          onChange={settTaille}
          value={tTaille}
        />
      </View>

      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Pinces"
          style={styles.input}
          keyboardType="numeric"
          onChange={setPinces}
          value={pinces}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Long.Totale"
          style={styles.input}
          keyboardType="numeric"
          onChange={setLongTotale}
          value={longTotale}
        />
      </View>
      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Coût"
          style={styles.input}
          keyboardType="numeric"
          onChange={setCout}
          value={cout}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Epaule Manche"
          style={styles.input}
          keyboardType="numeric"
          onChange={setEPaulManche}
          value={epaulManche}
        />
      </View>
      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Dos"
          style={styles.input}
          keyboardType="numeric"
          onChange={setDos}
          value={dos}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Epaule"
          style={styles.input}
          keyboardType="numeric"
          onChange={setEpaul}
          value={epaul}
        />
      </View>
      <View style={styles.section}>
        <InputModal
          iconName="account-box-multiple"
          placeholder="Long.Jupe"
          style={styles.input}
          keyboardType="numeric"
          onChange={setLongJupe}
          value={longJupe}
        />
        <InputModal
          iconName="account-box-multiple"
          placeholder="Bas"
          style={styles.input}
          keyboardType="numeric"
          onChange={setBas}
          value={bas}
        />
      </View>
    </ScrollView>
  );
};

export default Steps2;

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
    padding: 5,
    marginTop: 10,
    paddingBottom: 235,
  },
  input: {
    width: 157,
    height: 47,
    borderColor: Colors.primary,
    borderWidth: 2.5,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
