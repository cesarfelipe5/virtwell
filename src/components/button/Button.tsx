// import { FC } from "react";
// import { Button as ButtonComponent } from "./Button.styles";
// import { ButtonProps } from "./Button.types";

// export const Button: FC = ({ title, onPress, isLight }: ButtonProps) => {
//   const Component = isLight ? ButtonComponent.light : ButtonComponent.dark;

//   return <Component title={title} onPress={onPress} />;
// };

import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { ButtonSC, ButtonTitle, IconWrapper } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  iconName,
  isLight,
}) => {
  const ButtonContainer = isLight ? ButtonSC.light : ButtonSC.dark;

  return (
    <ButtonContainer onPress={onPress}>
      <ButtonTitle>{title}</ButtonTitle>

      {iconName && (
        <IconWrapper>
          <Ionicons name={iconName} size={20} color="#fff" />
        </IconWrapper>
      )}
    </ButtonContainer>
  );
};
