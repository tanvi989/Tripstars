import styled from "styled-components";
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import kashmir from "../../../assets/explore-india/himachal.jpg";
// Import Swiper styles
import goa from "../../../assets/explore-india/goa.jpg";
import andaman from "../../../assets/explore-india/andaman.jpg";
import himachal from "../../../assets/explore-india/himachal.jpg";
import ladakh from "../../../assets/explore-india/ladakh.jpg";
import north from "../../../assets/explore-india/north-east.jpg";
import nepal from "../../../assets/explore-india/nepal.jpg";

import "swiper/css";
import "swiper/css/navigation";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;
  @media (max-width: 1340px) {
    margin: 0 5rem;
  }
  @media (max-width: 1080px) {
    margin: 0 3rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
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

    @media (max-width: 768px) { 
    height: 320px; /* Adjust height for mobile devices */
  }

  @media (max-width: 480px) { 
    height: 250px; /* Even smaller for very small screens */
  }
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

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  .left_btn,
  button {
    cursor: pointer;
    border: 1px solid #000;
    /* background-color: #000; */
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

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 1340px) {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    padding-top: 0;
      padding-bottom: 1rem;
       margin-top: 0;

  }
`;

const TitileHeading = styled.h2`
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

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0) 1%, rgb(0, 0, 0) 76.21%);
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-top: 10px;
  flex-wrap:wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Icon = styled.span<{ backgroundImage: string }>`
  height: 18px;
  width: 18px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 5px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  filter: brightness(0) invert(1); /* Converts icons to white */

  /* Rotate only the airplane icon */
  ${({ backgroundImage }) =>
    backgroundImage.includes("airplane-mode-on.png") && "transform: rotate(-90deg);"}
`;



const cards = [
    {
      title: 'Kashmir',
      image: kashmir,  // ✅ Correct imported image
      pricing: '₹29,999/- Onwards',
      info: [
        { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '5N/6D' },
        { icon: 'https://img.icons8.com/ios-glyphs/30/FAB005/airplane-mode-on.png', text: 'Flight' },
      ],
    },
    {
      title: 'Goa',
      image: goa,  // ✅ Correct imported image
      pricing: '₹18,999/- Onwards',
      info: [
        { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '4N/5D' },
        { icon: 'https://img.icons8.com/ios-glyphs/30/FAB005/airplane-mode-on.png', text: 'Flight' },
      ],
    },
    {
      title: 'Andaman',
      image: andaman,  // ✅ Correct imported image
      pricing: '₹42,999/- Onwards',
      info: [
        { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '6N/7D' },
        { icon: 'https://img.icons8.com/ios-glyphs/30/FAB005/airplane-mode-on.png', text: 'Flight' },
      ],
    },
    {
      title: 'Himachal Pradesh',
      image: himachal,  // ✅ Correct imported image
      pricing: '₹35,999/- Onwards',
      info: [
        { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '7N/8D' },
        { icon: 'https://img.icons8.com/ios-glyphs/30/FAB005/airplane-mode-on.png', text: 'Flight' },
      ],
    },
    {
      title: 'Ladakh',
      image: ladakh,  // ✅ Correct imported image
      pricing: '₹49,999/- Onwards',
      info: [
        { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '6N/7D' },
        { icon: 'https://img.icons8.com/ios-glyphs/30/FAB005/airplane-mode-on.png', text: 'Flight' },
      ],
    },
    {
      title: 'North East',
      image: north,  // ✅ Correct imported image
      pricing: '₹55,999/- Onwards',
      info: [
        { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '8N/9D' },
        { icon: 'https://img.icons8.com/ios-glyphs/30/FAB005/airplane-mode-on.png', text: 'Flight' },
      ],
    },
    {
      title: 'Nepal',
      image: nepal,  // ✅ Correct imported image
      pricing: '₹32,999/- Onwards',
      info: [
        { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '5N/6D' },
        { icon: 'https://img.icons8.com/ios-glyphs/30/FAB005/airplane-mode-on.png', text: 'Flight' },
      ],
    },
  ];
  
interface TrendingOffersProps {
  title: string;
}

const TrendingOffers2: React.FC<TrendingOffersProps> = ({ title }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const swiperElement = document.querySelector(
      ".swiper.trending-offers-slider"
    ) as HTMLElement & { swiper?: any }; // Unique class name for this Swiper

    if (swiperElement?.swiper) {
      const swiperInstance = swiperElement.swiper;

      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <SliderContainer>
      <SectionTitle>
        <TitileHeading>{title}</TitileHeading>
        <NavIcons>
  <button ref={prevRef}>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M233.4 278.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 210.7l118.6-118.6c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160z"></path>
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
      <path d="M233.4 278.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 210.7l118.6-118.6c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160z"></path>
    </svg>
  </button>
</NavIcons>

      </SectionTitle>
      <Swiper
        className="trending-offers-slider" // Unique class name
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          1080: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          400: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 2,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card>
              <PricingTag>{card.pricing}</PricingTag>
              <CardImage src={card.image} alt={card.title} />
              <CardOverlay>
                <Title>{card.title}</Title>
                <Info>
                  {card.info.map((item, idx) => (
                    <InfoItem key={idx}>
                      <Icon backgroundImage={item.icon} />
                      {item.text}
                    </InfoItem>
                  ))}
                </Info>
              </CardOverlay>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default TrendingOffers2;