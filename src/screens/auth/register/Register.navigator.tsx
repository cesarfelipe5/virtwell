import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Organization } from "./components/organization";
import { Use } from "./components/use";
import { Register } from "./Register";
import { RegisterStackParamList } from "./Register.tyeps";

const RegisterStack = createNativeStackNavigator<RegisterStackParamList>();

export const RegisterNavigator = () => {
  return (
    <RegisterStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Register"
    >
      <RegisterStack.Screen name="Register" component={Register} />
      <RegisterStack.Screen name="Use" component={Use} />
      <RegisterStack.Screen name="Organization" component={Organization} />
    </RegisterStack.Navigator>
  );
};
