import { Button } from "@components/button";
import { RadioButton } from "@components/radioButton";
import { useNavigation } from "@react-navigation/native";
import { Header } from "screens/auth/components/header";
import { TermsAndPrivacy } from "screens/auth/components/termsAndPrivacy";
import { Container, StyledKeyboardAvoidingView } from "./Use.styles";

export const Use = () => {
  const navigation = useNavigation();

  const handleOnPressBack = () => {
    console.log("Use handleOnPressBack");

    navigation.canGoBack() ? navigation.goBack() : null;
  };

  const handleOnPressContinue = () => {
    console.log("Use handleOnPressContinue");

    navigation.navigate("Organization" as never);
  };

  return (
    <StyledKeyboardAvoidingView>
      <Container>
        <Header title="Uso" onPressBack={handleOnPressBack} />

        <RadioButton
          label="Como irá usar nossa plataforma?"
          options={["Uso pessoal", "Organização"]}
          onSelect={(selectedOption) => console.log(selectedOption)}
        />

        <Button
          title="Continuar"
          iconName="arrow-forward"
          onPress={handleOnPressContinue}
        />

        <TermsAndPrivacy />
      </Container>
    </StyledKeyboardAvoidingView>
  );
};
