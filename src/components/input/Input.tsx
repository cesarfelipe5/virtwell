import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import { useTheme } from "styled-components";
import {
  InputContainer,
  Label,
  LabelContainer,
  RightLabel,
  RightLabelContainer,
  StyledInput,
} from "./Input.styles";
import { InputProps } from "./Input.types";

export default forwardRef<TextInput, InputProps>(
  ({ label, rightLabel, containerStyle, onPressRightLabel, ...props }, ref) => {
    const theme = useTheme();

    return (
      <InputContainer style={containerStyle}>
        <LabelContainer>
          <Label>{label}</Label>

          <RightLabelContainer onPress={onPressRightLabel}>
            <RightLabel>{rightLabel}</RightLabel>
          </RightLabelContainer>
        </LabelContainer>

        <StyledInput
          placeholder="Digite..."
          placeholderTextColor={theme.colors.zinc500}
          ref={ref}
          {...props}
        />
      </InputContainer>
    );
  }
);
