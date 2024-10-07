import { Button } from "@components/button";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import {
  CarouselContainer,
  Container,
  ContainerBottom,
  ContainerButton,
  ContainerDescription,
  ContainerDot,
  ContainerSubTitle,
  ContainerSvg,
  ContainerTitle,
  Dot,
  SubTitle,
  Title,
} from "./Carousel.styles";
import { CustomCarouselProps } from "./Carousel.types";

const { width, height } = Dimensions.get("window");
const adjustedWidth = width - 40;
const adjustedHeight = height / 2 - 20;

export const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const carouselRef = useRef<ICarouselInstance>(null);

  const goToNextPage = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

    setActiveIndex(nextIndex);

    carouselRef.current?.scrollTo({ index: nextIndex, animated: true });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setTimeLeft(5); // Reseta o tempo

        goToNextPage(); // Vai para a próxima página automaticamente
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const renderItem = ({ index }: { index: number }) => {
    const { svg: Svg } = items[index];

    return (
      <ContainerSvg>
        <Svg width={adjustedWidth} height={adjustedHeight} />
      </ContainerSvg>
    );
  };

  return (
    <Container>
      <CarouselContainer>
        <Carousel
          ref={carouselRef}
          width={adjustedWidth}
          height={adjustedHeight}
          data={items}
          renderItem={renderItem}
          onSnapToItem={(index) => {
            setActiveIndex(index);

            setTimeLeft(5); // Reseta o temporizador ao mudar o slide
          }}
          loop={true} // Defina como true se desejar loop infinito
        />
      </CarouselContainer>

      <ContainerBottom>
        <ContainerDescription>
          <ContainerDot>
            {items.map((_, index) => (
              <Dot key={index} isActive={index === activeIndex} />
            ))}
          </ContainerDot>

          <ContainerTitle>
            <Title>{items[activeIndex].title}</Title>
          </ContainerTitle>

          <ContainerSubTitle>
            <SubTitle>{items[activeIndex].subTitle}</SubTitle>
          </ContainerSubTitle>
        </ContainerDescription>

        <ContainerButton>
          <Button title="Próximo" onPress={goToNextPage} />
        </ContainerButton>
      </ContainerBottom>
    </Container>
  );
};
