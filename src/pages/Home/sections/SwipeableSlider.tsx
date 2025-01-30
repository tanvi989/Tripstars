import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;

  @media (max-width: 1340px) {
    width:90%;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const SliderWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: ${({ translateX }) => `translateX(${translateX}%)`};
  width: ${({ children }) => React.Children.count(children) * 100}%;
`;

const Slide = styled.div<{ background: string }>`
  width: 100%;
  height: 400px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  @media (max-width: 1024px) {
    height: 300px;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 480px) {
    height: 150px;
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

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default SwipeableSlider;
