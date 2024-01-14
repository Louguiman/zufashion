import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppBottom from "./AppBottom";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import AdminStack from "./adminStack";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AppBottom"
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppBottom" component={AppBottom} />
      <Stack.Screen name="AppStack" component={AppStack} />
      <Stack.Screen name="AdminStack" component={AdminStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
