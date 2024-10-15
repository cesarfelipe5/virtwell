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

export const ContainerRow = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const Container2parts = styled.View`
  flex: 2;
`;

export const Container1part = styled.View`
  flex: 1;
`;
