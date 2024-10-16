import Star from "@assets/icons/star.svg";
import { Button } from "@components/button";
import { RadioButton } from "@components/radioButton";
import { useNavigation } from "@react-navigation/native";
import { login } from "@redux/slices/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "screens/auth/components/header";
import { TermsAndPrivacy } from "screens/auth/components/termsAndPrivacy";
import { freeBenefits, paidBenefits } from "./Signature.constants";
import {
  Benefits,
  Container,
  ContainerBenefits,
  ContainerRow,
  StyledKeyboardAvoidingView,
  TitleBenefits,
} from "./Signature.styles";
import { SelectedOption } from "./Signature.types";

export const Signature = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] =
    useState<SelectedOption>("Gratuito");

  const handleOnPressBack = () => {
    console.log("Signature handleOnPressBack");

    navigation.canGoBack() ? navigation.goBack() : null;
  };

  const handleContinue = () => {
    console.log("handleContinue");

    dispatch(login());
  };

  return (
    <StyledKeyboardAvoidingView>
      <Container>
        <Header title="Assinatura" onPressBack={handleOnPressBack} />

        <RadioButton
          label="Escolha o plano que mais de adequada para você"
          options={[
            { value: "Gratuito", description: "R$ 0,00" },
            { value: "Premium", description: "R$ 290,00" },
          ]}
          value={selectedOption}
          onSelect={(selectedOption) => setSelectedOption(selectedOption)}
        />

        <ContainerBenefits>
          <TitleBenefits>Benefícios</TitleBenefits>

          {(selectedOption === "Gratuito" ? freeBenefits : paidBenefits).map(
            (item, index) => (
              <ContainerRow key={index}>
                <Star width={15} height={15} />

                <Benefits>{item}</Benefits>
              </ContainerRow>
            )
          )}
        </ContainerBenefits>

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
