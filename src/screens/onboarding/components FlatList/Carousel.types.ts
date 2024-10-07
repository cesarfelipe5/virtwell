// Tipagem para o componente de bolinhas de navegação
export interface DotProps {
  isActive: boolean;
}

export interface CarouselItem {
  title: string;
  imageUrl: string;
}

export interface CustomCarouselProps {
  items: CarouselItem[];
}
