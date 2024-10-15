import React, { useState } from "react";
import {
  Label,
  LabelContainer,
  OuterCircle,
  RadioButtonContainer,
  RadioButtonWrapper,
  RadioGroupContainer,
  SelectedCircle,
} from "./RadioButton.styles";
import { RadioButtonProps } from "./RadioButton.types";

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  options,
  containerStyle,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => () => {
    setSelectedOption(option);

    onSelect(option);
  };

  return (
    <RadioButtonContainer style={containerStyle}>
      {!!label && (
        <LabelContainer>
          <Label>{label}</Label>
        </LabelContainer>
      )}

      <RadioGroupContainer>
        {options.map((option, index) => {
          const isOptionSelected = selectedOption === option;

          return (
            <RadioButtonWrapper
              key={index}
              isSelected={isOptionSelected}
              onPress={handleSelect(option)}
            >
              <OuterCircle isSelected={isOptionSelected}>
                {isOptionSelected && <SelectedCircle />}
              </OuterCircle>

              <Label>{option}</Label>
            </RadioButtonWrapper>
          );
        })}
      </RadioGroupContainer>
    </RadioButtonContainer>
  );
};
