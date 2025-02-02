import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Australia from "../../../assets/images/ExploreEurope/Australia 1.png";
import Eiffel from "../../../assets/images/ExploreEurope/eiffel.png";
import Japan from "../../../assets/images/ExploreEurope/Japan 1.png";
import Swiss from "../../../assets/images/ExploreEurope/Swiss 1.png";

// Styled-components for styling
const Container = styled.div`
  width: 100%;
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
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
  .box_title {
    margin-top: 1.2rem;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1080px) {
    width: 6rem;
    height: 6rem;
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

// Define the type for card data
interface CardData {
  name: string;
  image: string;
}

const cardData: CardData[] = [
  { name: "Paris", image: Australia },
  { name: "London", image: Eiffel },
  { name: "Rome", image: Japan },
  { name: "Barcelona", image: Swiss },
  { name: "Amsterdam", image: Australia },
  { name: "Berlin", image: Swiss },
  { name: "Prague", image: Eiffel },
  { name: "Vienna", image: Australia },
  { name: "Zurich", image: Swiss },
  { name: "Budapest", image: Eiffel },
  { name: "Copenhagen", image: Eiffel },
  { name: "Stockholm", image: Eiffel },
  { name: "Helsinki", image: Eiffel },
  { name: "Oslo", image: Eiffel },
  { name: "Athens", image: Eiffel },
];

// ExploreEurope Component
const ExploreEurope: React.FC = () => {
  const navigate = useNavigate();

  // Handle card click to navigate based on the card name
  const handleCardClick = (name: string) => {
    const routes: { [key: string]: string } = {
      Australia: "/australia",
      Eiffel: "/eiffel",
      Japan: "/japan",
      Swiss: "/swiss",
    };

    navigate(routes[name] || "/europe");
  };

  return (
    <Container>
      <SectionTitle>
        <TitleHeading>Explore Europe</TitleHeading>
      </SectionTitle>
      <CardsWrapper>
        <Swiper
          loop
          speed={1200}
          autoplay={{ delay: 1800 }}
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          direction="horizontal"
          breakpoints={{
            1080: {
              slidesPerView: 7,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleCardClick(item.name)} // On card click
              style={{ cursor: "pointer" }}
            >
              <ImageWrapper>
                <img src={item.image} alt={item.name} />
              </ImageWrapper>
              <div className="box_title">{item.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
};

export default ExploreEurope;
