import React from "react";
import { Image, TouchableOpacity } from "react-native";
import IconGestion from "../../Utils/IconGestion";

const IconGestions = ({ onPress, icon, style, size = 32 }) => {
  const image = (
    <Image
      source={IconGestion[icon]}
      style={[{ width: size, height: size, resizeMode: "cover" }, style]}
    />
  );

  return image;
};

export default IconGestions;
