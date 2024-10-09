import { Container } from "./Auth.styles";
import { Google } from "./components/google";
import { Header } from "./components/header";

export const Auth = () => {
  return (
    <Container>
      <Header isLogin title="Entrar" />

      <Google />
    </Container>
  );
};
