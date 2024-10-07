import styled from "styled-components/native";

// Definindo o estilo base do botão usando TouchableOpacity
const BaseButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 12px;
  width: 100%;
  min-height: 50px;
`;

// Botões estilizados que estendem o BaseButton
export const ButtonSC = {
  dark: styled(BaseButton)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  `,

  light: styled(BaseButton)`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  `,
};

// Definindo o estilo do título
export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.medium};
  font-family: ${({ theme }) => theme.font.fontFamilySemiBold};
`;

// Definindo o componente de ícone (opcional)
export const IconWrapper = styled.View`
  margin-left: 10px;
`;
