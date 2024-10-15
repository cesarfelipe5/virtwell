import React, { forwardRef, useEffect, useState } from "react";
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
  (
    {
      value,
      label,
      rightLabel,
      containerStyle,
      onPressRightLabel,
      required,
      onChangeText,
      mask,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const [valueInput, setValueInput] = useState("");

    const handleChangeText = (text: string) => {
      const maskedValue = mask ? mask({ value: text }) : text;

      setValueInput(maskedValue);

      onChangeText && onChangeText(maskedValue);
    };

    useEffect(() => {
      if (value) {
        setValueInput(value);
      }
    }, []);

    return (
      <InputContainer style={containerStyle}>
        <LabelContainer>
          <Label>
            {label} {!!required && "*"}
          </Label>

          <RightLabelContainer onPress={onPressRightLabel}>
            <RightLabel>{rightLabel}</RightLabel>
          </RightLabelContainer>
        </LabelContainer>

        <StyledInput
          value={valueInput}
          onChangeText={handleChangeText}
          placeholder="Digite..."
          placeholderTextColor={theme.colors.zinc500}
          ref={ref}
          {...props}
        />
      </InputContainer>
    );
  }
);
