import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { Navigation } from "./src/navigation/RootNavigator";
import { store } from "./src/redux/store";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />

      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
