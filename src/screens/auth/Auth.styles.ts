import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 32px;
  flex: 1;
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
