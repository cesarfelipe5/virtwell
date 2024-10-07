import styled from "styled-components/native";
import { DotProps } from "./Carousel.types";

export const CarouselContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
`;

export const NextButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Dot = styled.View<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.1)};
`;

export const ContainerDot = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const ContainerSvg = styled.View`
  padding: 30px;
  align-items: center;
  justify-content: center;
`;
