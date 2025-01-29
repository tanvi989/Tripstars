import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: calc(100% - 30rem);
  margin: 0 15rem;
  margin-top:20px;
  @media (max-width: 1024px) {
    width: 100%;
  
    margin:4rem 0;
  }
`;
const SliderWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: ${({ translateX }) => `translateX(${translateX}%)`};
  width: ${({ children }) => React.Children.count(children) * 100}%;
`;

const Slide = styled.div<{ background: string }>`
  width: calc(100vw - 4rem); /* Ensures padding is applied on desktop */

  height: 350px;
   margin: 0.5%;
   overflow:hidden;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto; /* Centering the slide */
  padding: 1rem; /* Padding on desktop */

  @media (max-width: 768px) {
   width: calc(100vw - 1rem); /* Ensures padding is applied on desktop */

    height: 114px;
    max-width: 100%
    padding: 0; /* Remove padding on mobile */
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "black" : "lightgray")};
  cursor: pointer;
`;

const SwipeableSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://www.tripzygo.in/images/homepagebanner/DubaiRepublicbanner.jpg",
    "https://www.tripzygo.in/images/homepagebanner/MaldivesRepublicbanner.jpg",
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <SliderContainer {...handlers}>
      <SliderWrapper translateX={-currentIndex * (100 / slides.length)}>
        {slides.map((image, index) => (
          <Slide key={index} background={image} />
        ))}
      </SliderWrapper>

      {/* Dots Indicator */}
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default SwipeableSlider;