import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import local images
import image1 from "../../../assets/JourneyInFrame/dubai.webp";
import image2 from "../../../assets/JourneyInFrame/disneyland.webp";
import image3 from "../../../assets/JourneyInFrame/singapore.webp";
import image16 from "../../../assets/JourneyInFrame/vietnam1.webp";
import image6 from "../../../assets/JourneyInFrame/bali.webp";
import image10 from "../../../assets/JourneyInFrame/ferrari-world.webp";
import image12 from "../../../assets/JourneyInFrame/malaysia.webp";
import image13 from "../../../assets/JourneyInFrame/dubai1.webp";
import image14 from "../../../assets/JourneyInFrame/Kashmir.webp";
import image4 from "../../../assets/JourneyInFrame/vietnam.webp";
import image15 from "../../../assets/JourneyInFrame/Paris.webp";
import image8 from "../../../assets/JourneyInFrame/dubai2.webp";
import image17 from "../../../assets/JourneyInFrame/warner-bros.webp";

const images = [
  { src: image1, alt: "Dubai" },
  { src: image2, alt: "Disneyland" },
  { src: image3, alt: "Singapore" },
  { src: image4, alt: "Vietnam" },
  { src: image6, alt: "Bali" },
  { src: image8, alt: "Dubai" },
  { src: image10, alt: "Ferrari World" },
  { src: image12, alt: "Malaysia" },
  { src: image13, alt: "Dubai" },
  { src: image14, alt: "Kashmir" },
  { src: image15, alt: "Paris" },
  { src: image16, alt: "Vietnam" },
  { src: image17, alt: "Warner Bros" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const TitleFrame = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 90%;
  overflow: hidden;
  padding: 20px 0;
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

const CarouselWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateX}px);
`;

const Slide = styled.div`
  position: relative;
  min-width: 280px;
  height: 400px;
  margin: 0 10px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  @media (max-width: 768px) {
    background: white;
    color: black;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
  z-index: 1000;
  &:hover {
    background: #007acc;
  }
`;

const PrevButton = styled(Button)`
  left: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NextButton = styled(Button)`
  right: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BendingCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = images.length;
  const slideWidth = 300;

  const handleNext = () => {
    setIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  return (
    <Container>
      <TitleFrame>
        JOURNEY IN FRAMES
        <br />
        <span style={{ fontSize: "16px", fontWeight: "normal" }}>
          Pictures Perfect Moments
        </span>
      </TitleFrame>
      <CarouselContainer>
        <PrevButton onClick={handlePrev}>&#10094;</PrevButton>
        <CarouselWrapper translateX={-index * slideWidth}>
          {images.map((image, idx) => (
            <Slide key={idx}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <Caption>{image.alt}</Caption>
            </Slide>
          ))}
        </CarouselWrapper>
        <NextButton onClick={handleNext}>&#10095;</NextButton>
      </CarouselContainer>
    </Container>
  );
};

export default BendingCarousel;
