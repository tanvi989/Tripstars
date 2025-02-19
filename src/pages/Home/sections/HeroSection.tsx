import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import SearchBar from "./SearchBar";
import RatingBar from "./RatingBar";

// Importing images for mobile and desktop
import australia from "../../../assets/banner/australia.jpg";
import bali from "../../../assets/banner/bali.jpg";
import europe from "../../../assets/banner/europe.jpg";
import hongKong from "../../../assets/banner/hong-kong.jpg";
import vietnam from "../../../assets/banner/vietnam.jpg";

// Mobile images
import australiaMobile from "../../../assets/banner/mobile web banner/australia.jpg";
import baliMobile from "../../../assets/banner/mobile web banner/bali.jpg";
import europeMobile from "../../../assets/banner/mobile web banner/europe.jpg";
import hongKongMobile from "../../../assets/banner/mobile web banner/hong kong.jpg";
import vietnamMobile from "../../../assets/banner/mobile web banner/vietnam.jpg";

// Define types for styled component props
type SlideProps = {
  bgImage: string;
  active: boolean;
};

// Styled Components
const SliderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;

  @media (max-width: 768px) {
    height: 50vh; /* Adjust height for smaller screens */
  }
`;

const Slide = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
`;

// Wrapper for search bar and text
const SearchBarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;

  @media (max-width: 768px) {
    top: 60%; /* Adjust position on smaller screens */
    width: 90%; /* Ensure content fits within the screen */
  }
`;

// Styled text above the search bar
const HeroText = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduce font size for smaller screens */
    margin-bottom: 15px; /* Adjust spacing */
  }
`;

// HeroSection Component
const HeroSection: React.FC = () => {
  // Default desktop images and mobile images
  const desktopImages = [australia, bali, europe, hongKong, vietnam];
  const mobileImages = [australiaMobile, baliMobile, europeMobile, hongKongMobile, vietnamMobile];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? desktopImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true, // Optional: Enables swipe on desktop using mouse drag
  });

  // Detect screen size to decide which image set to use
  const isMobile = window.innerWidth <= 768;
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <SliderContainer {...swipeHandlers}>
      {images.map((image, index) => (
        <Slide key={index} bgImage={image} active={index === currentIndex} />
      ))}

      {/* Overlay text and SearchBar */}
      <SearchBarWrapper>
        <HeroText>Find Your Dream Destination</HeroText>
        <SearchBar />
      </SearchBarWrapper>

      <RatingBar />
    </SliderContainer>
  );
};

export default HeroSection;