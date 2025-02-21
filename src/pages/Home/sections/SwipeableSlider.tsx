import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
// Importing images from the assets folder
import image1 from "../../../assets/advertisebanner/banner-1.jpg";
import image2 from "../../../assets/advertisebanner/banner-2.jpg";
import image3 from "../../../assets/advertisebanner/banner-3.jpg";
import image4 from "../../../assets/advertisebanner/banner-4.jpg";
import image5 from "../../../assets/advertisebanner/banner-5.jpg";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 65%;
  max-width: 2000px;
  margin: 50px auto;

  @media (max-width: 1340px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 40px;
  }
    @media (max-width: 360px) {
    max-width: 90%;

  }
    

`;

const SliderWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: ${({ translateX }) => `translateX(${translateX}%)`};
  width: ${({ children }) => React.Children.count(children) * 100}%;
`;

const Slide = styled.div<{ background: string }>`
  width: 70%;
  height: auto;
  background-image: url(${({ background }) => background});
  background-size: cover;  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  cursor: pointer; /* Add pointer cursor to indicate clickability */

  @media (max-width: 2000px) {
    height: 300px;
  }

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
    width: 90%;  /* Adjust width to prevent cutting */
  }

  @media (max-width: 375px) {
    height: 140px;
    width: 100%;  /* Make sure it takes full width on small screens */
  }

  @media (max-width: 360px) {
    height: 130px;
    width: 100%;  /* Full width to prevent cropping */
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
  const navigate = useNavigate(); // Initialize useNavigate

  // Define slides with corresponding routes
  const slides = [
    { image: image5, route: "bali" },
    { image: image3, route: "vietnam" },
    { image: image1, route: "/turkey" }, // Redirects to /turkey
    { image: image2, route: "/europe" }, // No redirection

    { image: image4, route: "baku" }

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
        {slides.map((slide, index) => (
          <Slide
            key={index}
            background={slide.image}
            onClick={() => {
              if (slide.route !== "#") {
                navigate(slide.route); // Redirect within the app
              }
            }}
          />
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
