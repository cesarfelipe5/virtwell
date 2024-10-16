import { hexToRgb } from "@utils/color";
import {
  Dimensions,
  KeyboardAvoidingViewProps,
  Platform,
  ScrollViewProps,
} from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("window");

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView.attrs<KeyboardAvoidingViewProps>(
  {
    behavior: Platform.OS === "ios" ? "padding" : "height",
    keyboardVerticalOffset: height * 0.1,
  }
)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.ScrollView.attrs<ScrollViewProps>({
  contentContainerStyle: {
    padding: 32,
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerBenefits = styled.View`
  margin: 16px 0;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) =>
    hexToRgb({ hex: theme.colors.white, opacity: 0.05 })};
`;

export const TitleBenefits = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontFamilySemiBold};
  font-size: ${({ theme }) => theme.fonts.fonst14};
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Benefits = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  color: ${({ theme }) => theme.colors.zinc400};
  font-size: ${({ theme }) => theme.fonts.fonst14};
`;
