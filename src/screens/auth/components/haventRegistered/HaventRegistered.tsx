import { useNavigation } from "@react-navigation/native";
import {
  Container,
  TitleHaventRegistred,
  TitleRegister,
} from "./HaventRegistered.styles";

export const HaventRegistered = () => {
  const { navigate } = useNavigation();

  const handleRegister = () => navigate("RegisterNavigator" as never);

  return (
    <Container>
      <TitleHaventRegistred>Ainda não se cadastrou? </TitleHaventRegistred>

      <TitleRegister onPress={handleRegister}>Cadastre-se</TitleRegister>
    </Container>
  );
};
