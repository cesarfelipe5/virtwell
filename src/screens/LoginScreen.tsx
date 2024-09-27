import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulando o login, poderia chamar uma API aqui
    dispatch(login());
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
