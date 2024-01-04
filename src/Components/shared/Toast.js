import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { Text, View } from "react-native";
import Colors from "../../Utils/Colors";

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: Colors.primary }}
      contentContainerStyle={{ paddingHorizontal: 15, fontSize: 80 }}
      text1Style={{
        fontWeight: "400",
        letterSpacing: 0.5,
        textTransform: "lowercase",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
        fontWeight: "500",
        textTransform: "uppercase",
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
    </View>
  ),
};
