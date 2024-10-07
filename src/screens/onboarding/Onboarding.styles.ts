import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  /* padding: 20px; */
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
