import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import Button from "../../Components/shared/Button";
import Colors from "../../Utils/Colors";
import { Buttom, Header } from "..";
import Icon, { Icons } from "../../Utils/Icons";
import { color } from "react-native-reanimated";

const ScanQrCode = ({ setCurrentLoader }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setCurrentLoader(null)}
        style={{ zIndex: 1, position: "absolute", top: 10, left: 5 }}
      >
        <Icon
          type={Icons.AntDesign}
          color={Colors.white}
          size={50}
          name="close"
        />
      </TouchableOpacity>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <BarcodeMask
          width={320}
          height={350}
          showAnimatedLine={true}
          outerMaskOpacity={1}
          edgeColor={Colors.primary}
          edgeHeight={25}
          edgeWidth={25}
        />
      </BarCodeScanner>
      {scanned &&
        Alert.alert("Alert Title", "My Alert Msg", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ])}
      {scanned && (
        <Buttom
          placeholder="
        Appuyer pour Scanner
        "
          type="primary"
          onPress={() => {
            setScanned(false);
          }}
          style={{
            position: "absolute",
            alignSelf: "center",
            bottom: 15,
            width: "90%",
            height: 50,

            padding: 10,

            borderRadius: 5,
          }}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({});

export default ScanQrCode;
