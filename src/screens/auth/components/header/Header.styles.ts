import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 16px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ContainerBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontFamilyBold};
  font-size: ${({ theme }) => theme.fonts.font18};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.fonts.lineHeight28};
`;

export const TitleBack = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontFamilyMedium};
  font-size: ${({ theme }) => theme.fonts.font16};
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerSignIn = styled.View`
  gap: 8px;
`;

export const TitleSignIn = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.fontFamilyBold};
  font-size: ${({ theme }) => theme.fonts.font32};
`;

export const BottomTitleSignIn = styled.View`
  width: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 8px;
  border-radius: 6px;
`;
