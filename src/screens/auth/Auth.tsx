import { Button } from "@components/button";
import { Input } from "@components/input";
import { login } from "@redux/slices/authSlice";
import { useRef } from "react";
import { TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { Container, StyledKeyboardAvoidingView } from "./Auth.styles";
import { Google } from "./components/google";
import { HaventRegistered } from "./components/haventRegistered";
import { Header } from "./components/header";
import { Or } from "./components/or";

export const Auth = () => {
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const handleContinue = () => {
    console.log("Auth handleContinue");

    dispatch(login());
  };

  const handleForgotPassword = () => {
    () => console.log("handleForgotPassword");
  };

  return (
    <StyledKeyboardAvoidingView>
      <Container>
        <Header isLogin title="Entrar" />

        <Google />

        <Or />

        <Input
          label="Seu e-mail"
          placeholder="marcia@gmail.com"
          ref={inputRef1}
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={() => {
            inputRef2.current?.focus();
          }}
        />

        <Input
          label="Senha"
          rightLabel="Esqueceu sua senha?"
          onPressRightLabel={handleForgotPassword}
          ref={inputRef2}
          returnKeyType="done"
          placeholder="***********"
          secureTextEntry
          onSubmitEditing={handleContinue}
        />

        <Button
          title="Continuar"
          iconName="arrow-forward"
          onPress={handleContinue}
        />

        <HaventRegistered />
      </Container>
    </StyledKeyboardAvoidingView>
  );
};
