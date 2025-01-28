import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Container = styled.div`
  padding: 0 15rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 1080px) {
    font-size: 2.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 0.8rem;
      path {
        fill: #000;
      }
    }
  }
`;

// Dynamic image loader with fallback
const getImageUrl = (name: string) => {
  try {
    return require(`../../../assets/images/TrendingOffers/itinerary/${name}.jpg`).default;
  } catch {
    console.error(`Image for ${name} not found`);
    return "/images/default-image.jpg"; // Ensure your fallback image exists
  }
};

const TrendingOffers = ({
  title = "Trending Offers",
  data,
  swiperSettings = {},
}: {
  title?: string;
  data: { imgUrl: string; name: string }[];
  swiperSettings?: object;
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const defaultSettings = {
    modules: [Navigation],
    spaceBetween: 20,
    slidesPerView: 1.8,
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    onInit: (swiper: any) => {
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== "boolean"
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }
      swiper.navigation.init();
      swiper.navigation.update();
    },
    breakpoints: {
      1080: { slidesPerView: 4.8 },
      768: { slidesPerView: 2.8 },
      400: { slidesPerView: 2 },
    },
    ...swiperSettings,
  };

  return (
    <Container>
      <SectionTitle>
        <TitleHeading>{title}</TitleHeading>
        <NavIcons>
          <button ref={prevRef}>
            <svg viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
            </svg>
          </button>
          <button ref={nextRef}>
            <svg viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l-160 160z"></path>
            </svg>
          </button>
        </NavIcons>
      </SectionTitle>
      <CardsWrapper>
        <Swiper {...defaultSettings}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card>
                <ImageWrapper>
                  <img
                    src={item.imgUrl || getImageUrl(item.name)}
                    alt={item.name}
                  />
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
};

export default TrendingOffers;
