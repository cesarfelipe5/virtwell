import Vv from "@assets/icons/vv.svg";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  BottomTitleSignIn,
  Container,
  ContainerBack,
  ContainerSignIn,
  ContainerTitle,
  Title,
  TitleBack,
  TitleSignIn,
} from "./Header.styles";
import { HeaderProps } from "./Header.types";

export const Header = ({ isLogin, title, onPressBack }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Container>
      {isLogin ? (
        <ContainerTitle>
          <Vv width={28} height={19} />

          <Title>VVerse app</Title>
        </ContainerTitle>
      ) : (
        <ContainerBack onPress={onPressBack}>
          <Ionicons name="chevron-back" size={25} color={theme.colors.white} />

          <TitleBack>Voltar</TitleBack>
        </ContainerBack>
      )}

      <ContainerSignIn>
        <TitleSignIn>{title} </TitleSignIn>

        <BottomTitleSignIn />
      </ContainerSignIn>
    </Container>
  );
};
