import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import HomeScreen from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Tipos para as rotas
type AuthStackParamList = {
  Login: undefined;
};

type AppTabsParamList = {
  Home: undefined;
  Profile: undefined;
};

// Navegação de autenticação (Login)
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

// Navegação de abas (após login)
const Tab = createBottomTabNavigator<AppTabsParamList>();

const AppTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "list" : "list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ tabBarBadge: 3 }}
        component={HomeScreen}
      />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Função que decide qual navegação mostrar
export const Navigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppTabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
