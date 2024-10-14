import { TextInput as RNTextInput } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled.View`
  /* margin-bottom: 16px; */
`;

export const LabelContainer = styled.View`
  margin: 0 0 6px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.zinc300};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
`;

export const RightLabelContainer = styled.Pressable``;

export const RightLabel = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  color: ${({ theme }) => theme.colors.zinc500};
`;

export const StyledInput = styled(RNTextInput)`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  background-color: ${({ theme }) => theme.colors.zinc900};
  border-radius: 12px;
  padding: 12px 15px;
  font-size: ${({ theme }) => theme.fonts.font14};
  border: ${({ theme }) => theme.colors.zinc700} 1px solid;
  color: ${({ theme }) => theme.colors.white};
  min-height: 50px;
`;
