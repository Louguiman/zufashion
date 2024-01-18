import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Animatable from "react-native-animatable";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//constant
import Colors from "../Utils/Colors";
import Icon, { Icons } from "../Utils/Icons";
//Bottom Screens
import { Accueil, Collections, Favoris, Recherche, Client } from "../Screens";

const TabArr = [
  {
    route: "Accueil",
    label: "Accueil",
    type: Icons.Octicons,
    icon: "home",
    component: Accueil,
    color: Colors.primary,
  },
  {
    route: "Recherch",
    label: "Recherche",
    type: Icons.Feather,
    icon: "search",
    component: Recherche,
    color: Colors.primary,
  },
  {
    route: "Collections",
    label: "Collections",
    type: Icons.MaterialIcons,
    icon: "collections",
    component: Collections,
    color: Colors.primary,
  },
  {
    route: "Favoris",
    label: "Favoris",
    type: Icons.MaterialIcons,
    icon: "bookmark-outline",
    component: Favoris,
    color: Colors.primary,
  },
  // {
  //   route: "Client",
  //   label: "Client",
  //   type: Icons.FontAwesome5,
  //   icon: "user",
  //   component: Client,
  //   color: Colors.primary,
  // },
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.5 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View style={styles.btn}>
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.black : Colors.gray}
            style={{}}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: Colors.black,
                  paddingHorizontal: 8,
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AppBottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 80 : 60,
          position: "absolute",
          bottom: 0,
          backgroundColor: Colors.bottom,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
});
