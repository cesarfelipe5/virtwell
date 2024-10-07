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
      title: "Slide 1",
      svg: FirstSvg,
    },
    {
      title: "SecondSvg",
      svg: SecondSvg,
    },
    {
      title: "Third",
      svg: ThirdSvg,
    },
  ];

  return (
    <Container>
      <CustomCarousel items={carouselItems} />
    </Container>
  );
};
