import styled from "styled-components";
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper styles
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
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 350px;
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
    padding-top: 2rem;
    padding-bottom: 1rem;
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
  margin-top: 10px;
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
`;

const cards = [
  {
      title: 'Meghalaya Road Trip',
      image: 'https://images.wanderon.in/new-homepage-data/romantic%20escapes/kashmir-romantic-02',
      pricing: '₹21,499/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '5N/6D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Guwahati' },
      ],
  },
  {
      title: 'Vietnam Adventure',
      image: 'https://images.wanderon.in/new-homepage-data/International/vietnam',
      pricing: '₹21,499/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '5N/6D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Guwahati ' },
      ],
  },
  {
      title: 'Kashmir Winter Backpacking',
      image: 'https://wanderon-sales.s3.amazonaws.com/gallery/new/2024/12/16/kashmir-winter-backpacking-1.avif',
      pricing: '₹21,499/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '6N/7D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Srinagar' },
      ],
  },
  {
      title: 'European Escape',
      image: 'https://images.wanderon.in/new-homepage-data/International/europe',
      pricing: '₹69,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '7N/8D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Paris' },
      ],
  },
  {
      title: 'Romantic Kashmir',
      image: 'https://images.wanderon.in/new-homepage-data/romantic%20escapes/kashmir-romantic-02',
      pricing: '₹18,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '4N/5D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Srinagar' },
      ],
  },
  {
      title: 'Vietnam Road Trip',
      image: 'https://images.wanderon.in/new-homepage-data/International/vietnam',
      pricing: '₹19,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '6N/7D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Hanoi' },
      ],
  },
  {
      title: 'Ladakh Bike Trip',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/ladakh-bike-trip.jpg',
      pricing: '₹25,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '8N/9D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Leh ' },
      ],
  },
  {
      title: 'Andaman Bliss',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/andaman.jpg',
      pricing: '₹24,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '6N/7D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Port' },
      ],
  },
  {
      title: 'Spiti Valley Expedition',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/spiti.jpg',
      pricing: '₹20,499/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '6N/7D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Manali - Kaza' },
      ],
  },
  {
      title: 'Maldives Getaway',
      image: 'https://images.wanderon.in/new-homepage-data/International/maldives.jpg',
      pricing: '₹39,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '4N/5D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Male - Private Island' },
      ],
  },
  {
      title: 'Kerala Backwaters',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/kerala-backwaters.jpg',
      pricing: '₹15,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '3N/4D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Cochin - Alleppey' },
      ],
  },
  {
      title: 'Rajasthan Royal Retreat',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/rajasthan.jpg',
      pricing: '₹22,499/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '5N/6D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Jaipur - Udaipur' },
      ],
  },
  {
      title: 'Bali Beaches & Bliss',
      image: 'https://images.wanderon.in/new-homepage-data/International/bali.jpg',
      pricing: '₹34,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '6N/7D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Denpasar - Ubud' },
      ],
  },
  {
      title: 'Himachal Adventure',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/himachal.jpg',
      pricing: '₹16,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '5N/6D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Shimla - Manali' },
      ],
  },
  {
      title: 'Thailand Tropical Escape',
      image: 'https://images.wanderon.in/new-homepage-data/International/thailand.jpg',
      pricing: '₹28,999/- Onwards',
      info: [
       { icon: 'https://img.icons8.com/material-outlined/24/FAB005/calendar--v1.png', text: '5N/6D' },
       { icon: 'https://img.icons8.com/material-rounded/24/FAB005/marker.png', text: 'Bangkok - Phuket' },
      ],
  },
  ];

interface ExploreIndiaProps {
  title: string;
}

const ExploreIndia: React.FC<ExploreIndiaProps> = ({ title }) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
  
    useEffect(() => {
      const swiperElement = document.querySelector(
        ".swiper.explore-india-slider"
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
          className="explore-india-slider" // Unique class name
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            1080: {
              slidesPerView: 4.8,
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

  export default ExploreIndia;