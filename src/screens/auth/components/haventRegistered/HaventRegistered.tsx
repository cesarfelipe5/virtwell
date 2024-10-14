import {
  Container,
  TitleHaventRegistred,
  TitleRegister,
} from "./HaventRegistered.styles";

export const HaventRegistered = () => {
  const handleRegister = () => {
    console.log("handleRegister");
  };

  return (
    <Container>
      <TitleHaventRegistred>Ainda não se cadastrou? </TitleHaventRegistred>

      <TitleRegister onPress={handleRegister}>Cadastre-se</TitleRegister>
    </Container>
  );
};
