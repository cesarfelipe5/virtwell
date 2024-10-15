import { Button } from "@components/button";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { maskCEP, maskCNPJ, maskPhone } from "@utils/mask";
import { useRef } from "react";
import { Dimensions, TextInput } from "react-native";
import { Header } from "screens/auth/components/header";
import {
  Container,
  Container1part,
  Container2parts,
  ContainerRow,
  StyledKeyboardAvoidingView,
} from "./Organization.styles";
import { OnSubmitEditingByIndexProps } from "./Organization.types";

const { height } = Dimensions.get("window");

export const Organization = () => {
  const navigation = useNavigation();

  const inputRefs = useRef<TextInput[]>([]);

  const handleOnPressBack = () => {
    console.log("Organization handleOnPressBack");

    navigation.canGoBack ? navigation.goBack() : null;
  };

  const onSubmitEditingByIndex =
    ({ currentIndex }: OnSubmitEditingByIndexProps) =>
    () => {
      inputRefs.current[currentIndex + 1]?.focus();
    };

  const handleContinue = () => {
    console.log("Organization handleContinue");

    // navigation.navigate("Use" as never);
  };

  return (
    <StyledKeyboardAvoidingView>
      <Container>
        <Header title="Organização" onPressBack={handleOnPressBack} />

        <Input
          label="CNPJ"
          ref={(ref) => (inputRefs.current[0] = ref!)}
          returnKeyType="next"
          placeholder="00.000.000/0000-00"
          onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 0 })}
          required
          mask={maskCNPJ}
          keyboardType="numeric"
          maxLength={18}
        />

        <Input
          label="Nome completo"
          ref={(ref) => (inputRefs.current[1] = ref!)}
          returnKeyType="next"
          placeholder="Nome da sua organização"
          onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 1 })}
          required
        />

        <ContainerRow>
          <Input
            label="Telefone"
            ref={(ref) => (inputRefs.current[2] = ref!)}
            returnKeyType="next"
            placeholder="(00) 0 000-0000"
            onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 2 })}
            mask={maskPhone}
            keyboardType="numeric"
            maxLength={16}
          />

          <Input
            label="E-mail institucional"
            ref={(ref) => (inputRefs.current[3] = ref!)}
            returnKeyType="next"
            placeholder="email@gmail.com"
            onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 3 })}
          />
        </ContainerRow>

        <Input
          label="CEP"
          ref={(ref) => (inputRefs.current[4] = ref!)}
          returnKeyType="next"
          placeholder="84010-020"
          onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 4 })}
          required
          mask={maskCEP}
          keyboardType="numeric"
          maxLength={9}
        />

        <Input
          label="Rua/Logradouro"
          ref={(ref) => (inputRefs.current[5] = ref!)}
          returnKeyType="next"
          placeholder="Rua Carlos Cavalcanti"
          onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 5 })}
          required
        />

        <ContainerRow>
          <Container2parts>
            <Input
              label="Cidade"
              ref={(ref) => (inputRefs.current[6] = ref!)}
              returnKeyType="next"
              placeholder="Ponta Grossa"
              onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 6 })}
              required
            />
          </Container2parts>

          <Container1part>
            <Input
              label="Estado"
              ref={(ref) => (inputRefs.current[7] = ref!)}
              returnKeyType="next"
              placeholder="PR"
              autoCapitalize="characters"
              onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 7 })}
              required
            />
          </Container1part>
        </ContainerRow>

        <ContainerRow>
          <Container1part>
            <Input
              label="Número"
              ref={(ref) => (inputRefs.current[8] = ref!)}
              returnKeyType="next"
              placeholder="2322"
              onSubmitEditing={onSubmitEditingByIndex({ currentIndex: 8 })}
              required
            />
          </Container1part>

          <Container2parts>
            <Input
              label="Complemento"
              ref={(ref) => (inputRefs.current[9] = ref!)}
              returnKeyType="done"
              placeholder="Perto do mercado..."
              onSubmitEditing={handleContinue}
              containerStyle={{ marginBottom: 24 }}
            />
          </Container2parts>
        </ContainerRow>

        <Button
          title="Continuar"
          iconName="arrow-forward"
          onPress={handleContinue}
        />
      </Container>
    </StyledKeyboardAvoidingView>
  );
};
