import styled from "styled-components/native";

export const ContainerTermsAndPrivacy = styled.View`
  margin-top: 64px;
`;

export const StyledTermsAndPrivacy = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.zinc500};
  text-align: justify;
`;

export const TermsService = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.zinc500};
  text-align: justify;
`;

export const TermsServiceAndPrivacyPolicy = styled.Text`
  text-decoration: ${({ theme }) => theme.colors.zinc500} underline;
`;
