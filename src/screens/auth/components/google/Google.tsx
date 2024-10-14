import { Button } from "@components/button";
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as GoogleExpo from "expo-auth-session/providers/google";
import { CryptoDigestAlgorithm, digestStringAsync } from "expo-crypto";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Container } from "./Google.styles";

WebBrowser.maybeCompleteAuthSession();

export const Google = () => {
  const [userInfo, setUserInfo] = useState<any>(null);

  // Solicitação de autenticação com Google
  const [request, response, promptAsync] = GoogleExpo.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID, // Variável do dotenv
    redirectUri: GOOGLE_REDIRECT_URI, // Variável do dotenv
    scopes: ["profile", "email"], // Escopos de permissões (perfil e email)
  });

  // Função para salvar informações do usuário
  const storeUserInfo = async (user: any) => {
    try {
      const userDigest = await digestStringAsync(
        CryptoDigestAlgorithm.SHA256,
        JSON.stringify(user)
      );

      await AsyncStorage.setItem("@userInfo", userDigest); // Armazena hash das informações do usuário

      setUserInfo(user);
    } catch (e) {
      console.log("Erro ao armazenar informações do usuário", e);
    }
  };

  // Função que busca as informações do usuário
  const getUserInfo = async () => {
    const user = await AsyncStorage.getItem("@userInfo");

    if (user) {
      setUserInfo(user);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // UseEffect para lidar com a resposta do Google OAuth
  useEffect(() => {
    if (response?.type === "success") {
      fetchUserInfo(response.authentication.accessToken);
    }
  }, [response]);

  // Função para buscar as informações do usuário
  const fetchUserInfo = async (token: string) => {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const user = await response.json();

    await storeUserInfo(user);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@userInfo");

    setUserInfo(null);
  };

  return (
    <Container>
      {userInfo ? (
        <View>
          <Text>Bem-vindo, {userInfo.name}</Text>

          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <Button
          isLight
          title="Continuar com aconta do Google"
          iconRight={false}
          iconName="logo-google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      )}
    </Container>
  );
};
