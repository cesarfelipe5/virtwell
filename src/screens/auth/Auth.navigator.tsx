import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from "./Auth";
import { AuthStackParamList } from "./Auth.types";
import { ForgotPassword } from "./forgotPassword";
import { RegisterNavigator } from "./register/Register.navigator";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Auth"
    >
      <AuthStack.Screen name="Auth" component={Auth} />
      <AuthStack.Screen
        name="RegisterNavigator"
        component={RegisterNavigator}
      />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};
