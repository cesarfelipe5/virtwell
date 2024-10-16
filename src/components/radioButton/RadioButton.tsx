import React, { useEffect, useState } from "react";
import {
  ContainerLabel,
  Label,
  LabelContainer,
  OptionDescription,
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
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => () => {
    setSelectedOption(option);

    onSelect(option);
  };

  useEffect(() => {
    !!value && setSelectedOption(value);
  }, []);

  return (
    <RadioButtonContainer style={containerStyle}>
      {!!label && (
        <LabelContainer>
          <Label>{label}</Label>
        </LabelContainer>
      )}

      <RadioGroupContainer>
        {options.map((option, index) => {
          const isOptionSelected = selectedOption === option.value;

          return (
            <RadioButtonWrapper
              key={index}
              isSelected={isOptionSelected}
              onPress={handleSelect(option.value)}
            >
              <OuterCircle isSelected={isOptionSelected}>
                {isOptionSelected && <SelectedCircle />}
              </OuterCircle>

              <ContainerLabel>
                <Label>{option.value}</Label>

                {!!option.description && (
                  <OptionDescription>{option.description}</OptionDescription>
                )}
              </ContainerLabel>
            </RadioButtonWrapper>
          );
        })}
      </RadioGroupContainer>
    </RadioButtonContainer>
  );
};
