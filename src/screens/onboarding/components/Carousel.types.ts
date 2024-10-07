import { FC } from "react";
import { SvgProps } from "react-native-svg";

export interface DotProps {
  isActive: boolean;
}

export interface CarouselItem {
  title: string;
  subTitle: string;
  svg: FC<SvgProps>;
}

export interface CustomCarouselProps {
  items: CarouselItem[];
}
