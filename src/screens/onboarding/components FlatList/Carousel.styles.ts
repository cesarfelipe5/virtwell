import { Animated } from "react-native";
import styled from "styled-components/native";

// Container do carrossel
export const CarouselContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// Botão próximo
export const NextButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

// Estilo do botão de navegação de bolinhas com tipagem e animação
export const Dot = styled(Animated.View)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 5px;
  background-color: #3498db;
`;
