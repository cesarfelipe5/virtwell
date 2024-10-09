import styled from "styled-components/native";
import { TitleProps } from "./Button.types";

const BaseButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 12px;
  width: 100%;
  min-height: 50px;
  gap: 10px;
`;

export const ButtonSC = {
  dark: styled(BaseButton)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  `,

  light: styled(BaseButton)`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  `,
};

export const ButtonTitle = styled.Text<TitleProps>`
  color: ${({ theme, islight }) => theme.colors[islight ? "dark" : "white"]};
  font-size: ${({ theme }) => theme.fonts.font16};
  font-family: ${({ theme }) => theme.fonts.fontFamilySemiBold};
`;

export const IconWrapper = styled.View``;
