import FirstSvg from "@assets/man/first.svg";
import SecondSvg from "@assets/man/second.svg";
import ThirdSvg from "@assets/man/third.svg";
import React from "react";
import { Container } from "./Onboarding.styles";
import { CustomCarousel } from "./components";
import { CarouselItem } from "./components/Carousel.types";

export const Onboarding = () => {
  const carouselItems: CarouselItem[] = [
    {
      title: "Descubra o Universo Virtual",
      subTitle:
        "Descubra instantaneamente problemas mecânicos e eletrônicos em seu veículo com uma varredura completa.",
      svg: FirstSvg,
    },
    {
      title: "Realidade Virtual na Educação",
      subTitle:
        "A realidade virtual transforma a educação, proporcionando experiências interativas que estimulam o aprendizado.",
      svg: SecondSvg,
    },
    {
      title: "Inicie sua Jornada Imersiva",
      subTitle:
        "Explore novos horizontes, enfrente desafios inovadores e mergulhe em experiências que vão além do que você imagina.",
      svg: ThirdSvg,
    },
  ];

  return (
    <Container>
      <CustomCarousel items={carouselItems} />
    </Container>
  );
};
