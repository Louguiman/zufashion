import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Buttom, InputSection } from "../../Components";
const { width, height } = Dimensions.get("screen");
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const loginSchema = object({
  email: string()
    .min(1,'Email address is required')
    .email('Email Address is invalid'),
  password: string()
    .min(1,'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export type LoginInput = TypeOf<typeof loginSchema>;

const Auth = ({ navigation }: any) => {

  const [tel, setTel] = useState("");
  const [passWord, setPassWord] = useState("");

  const HandleConnexion = () => {
    navigation.navigate("AppBottom");
  };
  const HandleInscription = () => {
    navigation.navigate("UpdateUser");
  };
  return (
    <ImageBackground
      source={require("../../../assets/Auth/bg-login.png")}
      style={styles.contain}
      resizeMode="cover"
    >
      <Image
        source={require("../../../assets/Auth/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ImageBackground
        source={require("../../../assets/Auth/blur-login.png")}
        style={{
          height: 250,
          width: Platform.OS === "ios" ? 375 : 360,
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: 30,
          borderRadius: 10,
          top: Platform.OS === "ios" ? 260 : 255,
          marginBottom: 50,
        }}
      >
        <InputSection
          Placeholder="Saisir Votre de Telephone..."
          label="Telephone"
          onChange={setTel}
          value={tel}
          type="main"
        />
        <InputSection
          Placeholder="Saisir Votre Mot de Passe..."
          label="Mot de Passe"
          onChange={setPassWord}
          value={passWord}
          type=""
        />
        <TouchableOpacity onPress={()=>navigation.navigate('MPO')}>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              textAlign: "right",
              fontWeight: "900",
              letterSpacing: 0.5,
            }}
          >
            Mot de Passe oublié ?
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          position: "absolute",
          bottom: 100,
          alignSelf: "center",
        }}
      >
        <Buttom
          onPress={HandleConnexion}
          placeholder="Connexion"
          type={"primary"}
        />
        <Buttom
          onPress={HandleInscription}
          placeholder="S'inscire"
          type={"secondary"}
        />
      </View>
    </ImageBackground>
  );
};

export default Auth;

const styles = StyleSheet.create({
  contain: {
    height,
    width,
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  title: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.5,
    textAlign: "center",
  },
  divider: {
    width: "80%",
    height: 2,
    backgroundColor: "white",
    marginLeft: 40,
    margin: 2,
  },
  desc: {
    width: 160,
    // height: 150,
    color: "white",
    fontSize: 18,
    letterSpacing: 1.1,
    // fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    marginVertical: 5,
    alignSelf: "center",
  },
});
