import styled from "styled-components/native";

const BaseText = styled.Text`
  font-size: ${({ theme }) => theme.colors.font12};
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const TitleHaventRegistred = styled(BaseText)`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  color: ${({ theme }) => theme.colors.zinc400};
`;

export const TitleRegister = styled(BaseText)`
  font-family: ${({ theme }) => theme.fonts.fontFamilySemiBold};
  color: ${({ theme }) => theme.colors.white};
`;
