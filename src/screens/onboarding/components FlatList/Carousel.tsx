import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import { CarouselContainer, Dot, NextButton } from "./Carousel.styles";
import { CarouselItem, CustomCarouselProps } from "./Carousel.types";

const { width } = Dimensions.get("window");

export const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }) => {
  const scrollX = useRef(new Animated.Value(0)).current; // Valor animado para o deslizamento horizontal
  const flatListRef = useRef<FlatList<CarouselItem>>(null); // Referência da FlatList
  const currentIndex = useRef(0); // Índice atual do slide

  // Função para ir ao próximo slide
  const goToNextPage = () => {
    if (currentIndex.current < items.length - 1) {
      currentIndex.current += 1;
    } else {
      currentIndex.current = 0; // Reinicia para o primeiro slide
    }
    flatListRef.current?.scrollToIndex({
      index: currentIndex.current,
      animated: true,
    });
  };

  // Renderização de cada slide
  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={{ width, alignItems: "center" }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{ width: 350, height: 150 }}
        />
        <Text style={{ marginTop: 10, fontSize: 18 }}>{item.title}</Text>
      </View>
    );
  };

  return (
    <CarouselContainer>
      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled // Um slide por vez
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false } // Animação do scroll
        )}
        scrollEventThrottle={16}
      />

      {/* Bolinhas de navegação */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {items.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.2, 0.8],
            extrapolate: "clamp",
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });

          return (
            <Dot key={index} style={{ transform: [{ scale }], opacity }} />
          );
        })}
      </View>

      {/* Botão Próximo */}
      <NextButton onPress={goToNextPage}>
        <Text style={{ color: "#fff" }}>Próximo</Text>
      </NextButton>
    </CarouselContainer>
  );
};

export default CustomCarousel;
