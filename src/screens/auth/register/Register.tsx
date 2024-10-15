import { Button } from "@components/button";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { Dimensions, TextInput } from "react-native";
import { Header } from "../components/header";
import { TermsAndPrivacy } from "../components/termsAndPrivacy";
import { Container, StyledKeyboardAvoidingView } from "./Register.styles";
import { OnSubmitEditingByIndexProps } from "./Register.tyeps";

const { height } = Dimensions.get("window");

export const Register = () => {
  const { navigate } = useNavigation();

  const inputRefs = useRef<TextInput[]>([]);

  const onSubmitEditingByIndex =
    ({ currentIndex }: OnSubmitEditingByIndexProps) =>
    () => {
      inputRefs.current[currentIndex + 1]?.focus();
    };

  const handleContinue = () => {
    console.log("handleContinue");

    navigate("Use" as never);
  };

  return (
    <StyledKeyboardAvoidingView>
      <Container>
        <Header title="Cadastro" onPressBack={() => console.log("OI")} />

        <Input
          label="Seu nome completo"
          ref={(ref) => (inputRefs.current[0] = ref!)}
          returnKeyType="next"
          placeholder="Informe seu nome completo"
          onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 0 })}
        />

        <Input
          label="Seu e-mail"
          ref={(ref) => (inputRefs.current[1] = ref!)}
          returnKeyType="next"
          placeholder="marcia@gmail.com"
          onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 1 })}
        />

        <Input
          label="Senha"
          ref={(ref) => (inputRefs.current[2] = ref!)}
          returnKeyType="next"
          placeholder="***********"
          secureTextEntry
          onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 2 })}
        />

        <Input
          label="Confirme sua senha"
          ref={(ref) => (inputRefs.current[3] = ref!)}
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

        <TermsAndPrivacy />
      </Container>
    </StyledKeyboardAvoidingView>
  );
};
