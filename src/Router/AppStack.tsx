import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Publication,
  Profil,
  CollectionDetails,
  EditProfil,
  Poste,
  InfosClient,
  Catalogue,
  Details,
  Modify,
  Client,
} from "../Screens";
const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Publication" component={Publication} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="EditProfil" component={EditProfil} />
      <Stack.Screen name="CollectionDetails" component={CollectionDetails} />

      <Stack.Screen
        name="Poste"
        component={Poste}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen name="InfosClient" component={InfosClient} />
      <Stack.Screen name="Catalogue" component={Catalogue} />
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
      <Stack.Screen
        name="Client"
        component={Client}
        options={{ animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
