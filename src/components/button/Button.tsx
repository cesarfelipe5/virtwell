import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { useTheme } from "styled-components";
import { ButtonSC, ButtonTitle, IconWrapper } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  iconName,
  isLight,
  iconRight = true,
}) => {
  const theme = useTheme();

  const ButtonContainer = isLight ? ButtonSC.light : ButtonSC.dark;
  const color = theme.colors[isLight ? "dark" : "white"];

  const RenderIcon = () => {
    return (
      <IconWrapper>
        <Ionicons name={iconName} size={20} color={color} />
      </IconWrapper>
    );
  };

  return (
    <ButtonContainer onPress={onPress}>
      {!iconRight && <RenderIcon />}

      <ButtonTitle islight={isLight}>{title}</ButtonTitle>

      {iconRight && <RenderIcon />}
    </ButtonContainer>
  );
};
