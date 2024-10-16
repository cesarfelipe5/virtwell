import { hexToRgb } from "@utils/color";
import styled from "styled-components/native";

export const RadioButtonContainer = styled.View`
  gap: 16px;
`;

export const LabelContainer = styled.View`
  margin: 0 0 6px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.font14};
  font-family: ${({ theme }) => theme.fonts.fontFamilyMedium};
  color: ${({ theme }) => theme.colors.white};
`;

export const RadioGroupContainer = styled.View`
  flex-direction: column;
  gap: 16px;
`;

export const RadioButtonWrapper = styled.Pressable<{ isSelected: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? hexToRgb({ hex: theme.colors.primary, opacity: 0.1 })
      : theme.colors.zinc900};
  border-radius: 16px;
  min-height: 50px;
`;

export const OuterCircle = styled.View<{ isSelected: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.zinc900};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.zinc600};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const SelectedCircle = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const OptionDescription = styled.Text`
  font-size: ${({ theme }) => theme.fonts.font14};
  font-family: ${({ theme }) => theme.fonts.fontFamilyMedium};
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerLabel = styled.View`
  justify-content: space-between;
  flex: 1;
  flex-direction: row;
`;
