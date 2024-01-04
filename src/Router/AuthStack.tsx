import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

import { Welcome, Auth, MPO, UpdateUser, Onboarding } from "../Screens";

function AuthStack() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    async function loadState() {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(true);
      }
    }
    loadState();

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);
  console.log(isAppFirstLaunched);
  
  return (
    isAppFirstLaunched != null && (
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      {isAppFirstLaunched && (

          <Stack.Screen name="Onboarding" component={Onboarding} />
      )}

        <Stack.Screen name="Ecran" component={Welcome} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="MPO" component={MPO} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
      </Stack.Navigator>
    )
  );
}

export default AuthStack;
