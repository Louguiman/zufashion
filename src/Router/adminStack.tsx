import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Dashboard,Atelier,Catalogue,Client,Compta, Creation, Details, Modify} from "../Screens";
const Stack = createNativeStackNavigator();

function AdminStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Atelier" component={Atelier} />
      <Stack.Screen name="Catalogue" component={Catalogue} />
      <Stack.Screen name="Creation" component={Creation} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ animation: "slide_from_bottom" }}
      />
        <Stack.Screen
        name="Modify"
        component={Modify}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen name="Client" component={Client} />
      <Stack.Screen name="Compta" component={Compta} />


    </Stack.Navigator>
  );
}

export default AdminStack;
