import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { ToastConfig } from "./src/Components";
import { FavorisProvider } from "./src/Context/FavorisContext";

import { FavorisProviderCollections } from "./src/contextCollections/FavorisContextCollections";

// import { store } from "./src/redux/store";
import { RootStack } from "./src/Router";
import { StatusBar } from "react-native";

export default function App() {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.2, 0.6, 0.8],
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['right', 'bottom', 'left','top']}>
      <StatusBar barStyle={"light-content"} translucent/>
      {/* <Provider store={store}> */}
        <NavigationContainer>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <FavorisProvider>
              <FavorisProviderCollections>
                <RootStack />
              </FavorisProviderCollections>
            </FavorisProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      {/* </Provider> */}
      <Toast
        config={ToastConfig}
        position="bottom"
        bottomOffset={60}
        visibilityTime={5000}
      />
    </SafeAreaView>
  );
}
