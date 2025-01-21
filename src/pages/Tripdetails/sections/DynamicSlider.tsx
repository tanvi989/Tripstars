import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const SliderWrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 8px;
`;

const CircularImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    width: 66px;
    height: 66px;
  }
`;

const DestinationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 5px;
`;

const DestinationName = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin: 30px 0;

  span {
    color: gold;
    font-weight: bold;
  }
`;

// Define types for props
type Destination = {
  name: string;
  image: string;
};

type DynamicSliderProps = {
  title?: string;
  highlightedWord?: string;
  destinations: Destination[];
  sliderSettings?: any; // You can use the type `Settings` from "react-slick" if installed
};

const DynamicSlider: React.FC<DynamicSliderProps> = ({
  title = "Explore Destinations",
  highlightedWord = "",
  destinations = [],
  sliderSettings = {},
}) => {
  const defaultSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
    ...sliderSettings, // Merge user settings with defaults
  };

  return (
    <>
      <Title>
        {title} <span>{highlightedWord}</span>
      </Title>
      <SliderWrapper>
        <Slider {...defaultSliderSettings}>
          {destinations.map((destination, index) => (
            <DestinationCard key={index}>
              <CircularImage src={destination.image} alt={destination.name} />
              <DestinationName>{destination.name}</DestinationName>
            </DestinationCard>
          ))}
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default DynamicSlider;
