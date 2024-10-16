import Cast from "@assets/icons/cast.svg";
import House from "@assets/icons/house.svg";
import Sliders from "@assets/icons/sliders.svg";
import Telescope from "@assets/icons/telescope.svg";
import { Colors } from "@color/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AuthNavigator } from "screens/auth";
import ProfileScreen from "screens/ProfileScreen";
import { RootState } from "../redux/store";
import HomeScreen from "../screens/HomeScreen";
import { Onboarding } from "../screens/onboarding";
import { styles } from "./RootNavigator.styles";
import {
  AppTabsParamList,
  AuthStackParamList,
  RenderTabIconProps,
} from "./RootNavigator.types";

// Navegação de autenticação (Login)
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const UnauthenticatedNavigator: FC = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Onboarding"
  >
    <AuthStack.Screen name="Onboarding" component={Onboarding} />
    <AuthStack.Screen name="AuthNavigator" component={AuthNavigator} />
  </AuthStack.Navigator>
);

// Navegação de abas (após login)
const Tab = createBottomTabNavigator<AppTabsParamList>();

const AuthenticatedNavigator = () => {
  const renderTabIcon: FC<RenderTabIconProps> = ({
    IconComponent,
    color,
    focused,
  }) => {
    const size = focused ? 30 : 20;

    return <IconComponent width={size} height={size} stroke={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.violet600,
        tabBarinactiveTintColor: Colors.zinc500,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) =>
            renderTabIcon({ IconComponent: House, color, focused }),
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, focused }) =>
            renderTabIcon({ IconComponent: Telescope, color, focused }),
        }}
        component={ProfileScreen}
      />

      <Tab.Screen
        name="Device"
        options={{
          title: "Dispositivos",
          tabBarIcon: ({ color, focused }) =>
            renderTabIcon({ IconComponent: Cast, color, focused }),
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Settings"
        options={{
          title: "Ajustes",
          tabBarIcon: ({ color, focused }) =>
            renderTabIcon({ IconComponent: Sliders, color, focused }),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

// Função que decide qual navegação mostrar
export const Navigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticatedNavigator /> : <UnauthenticatedNavigator />}
    </NavigationContainer>
  );
};
