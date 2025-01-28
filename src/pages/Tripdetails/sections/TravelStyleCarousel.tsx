import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
`;

const CarouselWrapper = styled.div<{ currentIndex: number; imageCount: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) =>
    `translateX(-${currentIndex * (100 / 3)}%)`};
  width: ${({ imageCount }) => imageCount * 100}%; /* Flexible width for all images */
`;

const ImageSection = styled.div<{ isLarge: boolean }>`
  flex: ${({ isLarge }) => (isLarge ? "0 0 60%" : "0 0 40%")};
  transition: flex 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

// Define the structure of each image
interface ImageData {
  id: number;
  src: string;
}

const TravelStyleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: ImageData[] = [
    {
      id: 1,
      src: "https://static.vecteezy.com/system/resources/previews/025/287/473/non_2x/happy-family-enjoying-a-picnic-in-nature-lifestyle-ai-generated-photo.jpg",
    },
    {
      id: 2,
      src: "https://shotkit.com/wp-content/uploads/bb-plugin/cache/Alisa-Dyson-family-outfits-landscape-9d5f7852b672bb59bf818761944ba9d6-zybravgx2q47.jpeg",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/3f/68/42/3f684247f19279b6b6118ec53eb1d12a.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <PrevButton onClick={handlePrev}>&#8249;</PrevButton>
      <CarouselWrapper currentIndex={currentIndex} imageCount={images.length}>
        {images.map((image, index) => (
          <ImageSection key={image.id} isLarge={index === currentIndex}>
            <Image src={image.src} alt={`Image ${image.id}`} />
          </ImageSection>
        ))}
      </CarouselWrapper>
      <NextButton onClick={handleNext}>&#8250;</NextButton>
    </Container>
  );
};

export default TravelStyleCarousel;
