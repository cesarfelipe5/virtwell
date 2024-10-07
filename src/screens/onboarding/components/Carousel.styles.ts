import styled from "styled-components/native";
import { DotProps } from "./Carousel.types";

export const Container = styled.View`
  padding: 20px;
  flex: 1;
`;

export const CarouselContainer = styled.View`
  flex: 0.5;
`;

export const ContainerBottom = styled.View`
  flex: 0.5;
  padding-top: 20px;
`;

export const ContainerDescription = styled.View`
  gap: 24px;
  flex: 1;
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
  width: 100%;
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

export const ContainerTitle = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.fontFamilyBold};
  font-size: ${({ theme }) => theme.font.large};
`;

export const ContainerSubTitle = styled.View``;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: ${({ theme }) => theme.font.small};
`;
