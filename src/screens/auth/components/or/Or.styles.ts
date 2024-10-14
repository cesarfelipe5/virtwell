import styled from "styled-components/native";

export const Container = styled.View`
  margin: 24px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  height: 1px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.zinc700};
`;

export const Title = styled.Text`
  margin: 0 10px;
  font-size: ${({ theme }) => theme.fonts.fonst12};
  color: ${({ theme }) => theme.colors.zinc700};
`;
