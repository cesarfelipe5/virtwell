import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

export default function ProfileScreen() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
