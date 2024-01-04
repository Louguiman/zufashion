import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, {
  Path,
  Circle,
  LinearGradient,
  Defs,
  Stop,
  ClipPath,
} from "react-native-svg";
import Colors from "../../../Utils/Colors";

const styles = StyleSheet.create({
  textView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

function generateArc(percentage, radius) {
  if (percentage === 100) percentage = 99.999;
  const a = (percentage * 2 * Math.PI) / 100; // angle (in radian) depends on percentage
  const r = radius; // radius of the circle
  var rx = r,
    ry = r,
    xAxisRotation = 0,
    largeArcFlag = 1,
    sweepFlag = 1,
    x = r + r * Math.sin(a),
    y = r - r * Math.cos(a);
  if (percentage <= 50) {
    largeArcFlag = 0;
  } else {
    largeArcFlag = 1;
  }

  return `A${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}`;
}

const Circular = ({
  percentage = 40,
  blankColor = "#eaeaea",
  progressWidth = 55,
  size = 100,
  children,
  somme,
}) => {
  let half = size / 2;
  let donutColor = Colors.red;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Defs key={"gradient"}>
          <LinearGradient
            id={"gradient"}
            x1={"10%"}
            y={"0%"}
            x2={"20%"}
            y2={"100%"}
          >
            <Stop offset={"0%"} stopColor={Colors.circular1} />
            <Stop offset={"100%"} stopColor={Colors.circular2} />
          </LinearGradient>
        </Defs>
        <Circle
          cx={half}
          cy={half}
          r={half - 5}
          fill={blankColor}
          stroke={Colors.gray}
          strokeWidth="10"
          strokeDasharray="8, 3"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />

        <Path
          d={`M${half} ${half} L${half} 0 ${generateArc(percentage, half)} Z`}
          fill="url(#gradient)"
        />

        {<Circle cx={half} cy={half} r={progressWidth} fill={Colors.white} />}
      </Svg>
      <View style={styles.textView}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {""}
          {somme}
          {""}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {""}
          {""}CFA
        </Text>
      </View>
    </View>
  );
};
export default Circular;
