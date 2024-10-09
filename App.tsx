import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container } from "./App.styles";
import { Navigation } from "./src/navigation/RootNavigator";
import { store } from "./src/redux/store";
import { theme } from "./src/styles/theme";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

// Impede o Splash Screen de ocultar automaticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Geist-Regular": require("./assets/fonts/Geist-Regular.ttf"),
    "Geist-Medium": require("./assets/fonts/Geist-Medium.ttf"),
    "Geist-Bold": require("./assets/fonts/Geist-Bold.ttf"),
    "Geist-SemiBold": require("./assets/fonts/Geist-SemiBold.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        // Quando as fontes estiverem carregadas, esconda o splash screen
        await SplashScreen.hideAsync();

        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null; // Mantenha o Splash Screen visível
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Navigation />
        </Container>

        <StatusBar style="light" />
      </ThemeProvider>
    </Provider>
  );
}
