import React, { useState } from "react";
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
  }
`;

const DestinationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 10px;
`;

const DestinationName = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
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

// Popup Styles
const PopupContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 90%;
  width: 300px;
`;

const PopupImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const PopupText = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 16px;
  cursor: pointer;
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
  sliderSettings?: any;
};

const DynamicSlider: React.FC<DynamicSliderProps> = ({
  title = "Explore Destinations",
  highlightedWord = "",
  destinations = [],
  sliderSettings = {},
}) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const openPopup = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  const defaultSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      }
    ],
    ...sliderSettings,
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
              <CircularImage
                src={destination.image}
                alt={destination.name}
                onClick={() => openPopup(destination)}
              />
              <DestinationName>{destination.name}</DestinationName>
            </DestinationCard>
          ))}
        </Slider>
      </SliderWrapper>

      {/* Popup Modal */}
      <PopupContainer isVisible={selectedDestination !== null} onClick={closePopup}>
        {selectedDestination && (
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closePopup}>&times;</CloseButton>
            <PopupImage src={selectedDestination.image} alt={selectedDestination.name} />
            <PopupText>{selectedDestination.name}</PopupText>
          </PopupContent>
        )}
      </PopupContainer>
    </>
  );
};

export default DynamicSlider;
