import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

// Example: Import your desired images here
import banner5 from "../../../assets/advertisebanner/banner-5.jpg";
import banner2 from "../../../assets/advertisebanner/banner-2.jpg";
import banner1 from "../../../assets/advertisebanner/banner-1.jpg";
import banner3 from "../../../assets/advertisebanner/banner-3.jpg";
import banner4 from "../../../assets/advertisebanner/banner-4.jpg";
// ...import more as needed

// ----- STYLED COMPONENTS -----

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 65%;
  max-width: 2000px;
  margin: 50px auto;

  @media (max-width: 1920px) {
    width: 65%;
  }

  @media (max-width: 1360px) {
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
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  cursor: pointer;
  position: relative; /* Important for overlay positioning */

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
    width: 90%;
  }
  @media (max-width: 375px) {
    height: 140px;
    width: 100%;
  }
  @media (max-width: 360px) {
    height: 130px;
    width: 100%;
  }
`;

/* Overlay container for text on top of each slide */
const SlideOverlay = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  /* You can adjust these for a better effect or responsiveness */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
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

// ----- MAIN COMPONENT -----

const SwipeableSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Each slide can have an image, a route, and optional overlay text
  const slides = [
    {image: banner5, route: "/bali",  },
    {image: banner2, route: "/europe",  },
    {image: banner1, route: "/turkey",  },
    {image: banner3, route: "/vietnam",  },
    {image: banner4, route: "/baku",  },
    
    // Add more slides if desired...
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
      {/* The width is -currentIndex * (100 / slides.length) to create the carousel effect */}
      <SliderWrapper translateX={-currentIndex * (100 / slides.length)}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            background={slide.image}
            onClick={() => {
              // Only navigate if there's a valid route
              if (slide.route && slide.route !== "#") {
                navigate(slide.route);
              }
            }}
          >
            {/* If you want text overlay, render it here */}
            
          </Slide>
        ))}
      </SliderWrapper>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default SwipeableSlider;
