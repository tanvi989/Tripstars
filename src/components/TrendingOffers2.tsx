import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;
  @media (max-width: 1340px) { margin: 0 5rem; }
  @media (max-width: 1080px) { margin: 0 3rem; }
  @media (max-width: 768px) { margin: 0 1rem; }
`;

const Card = styled.div`
  flex: 1 0 auto;
  margin: 0.5%;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
`;

const PricingTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffd700;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  z-index: 10;
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const NavIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  .left_btn,
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

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0) 1%, rgb(0, 0, 0) 76.21%);
  color: white;
  text-align: left;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  margin-top: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  .stacked-text {
    display: inline-block;
    text-align: center;
  }

  @media (max-width: 768px) {
    .stacked-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1;
    }
  }
`;

interface TrendingOffersProps {
  title: string;
  cards: {
    title: string;
    image: string;
    pricing: string;
    info: { icon: string; text: string }[];
  }[];
}

const TrendingOffers2: React.FC<TrendingOffersProps> = ({ title, cards }) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (swiperInstance && prevRef.current && nextRef.current) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }, 100);
  }, [swiperInstance]);
  

  return (
    <SliderContainer>
      <SectionTitle>
        <TitleHeading>{title}</TitleHeading>
        <NavIcons>
          <button ref={prevRef}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
            </svg>
          </button>
          <button ref={nextRef}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg>
          </button>
        </NavIcons>
      </SectionTitle>
      <Swiper
  modules={[Navigation]}
  navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
  onSwiper={setSwiperInstance}
  spaceBetween={10}
  slidesPerView={3}
>
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card>
              <PricingTag>{card.pricing}</PricingTag>
              <CardImage src={card.image} alt={card.title} />
              <CardOverlay><Title>{card.title}</Title></CardOverlay>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default TrendingOffers2;