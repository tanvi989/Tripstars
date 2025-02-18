import React from "react";
import styled from "styled-components";

// Styled Components
const SectionWrapper = styled.div`
  margin: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageCard = styled.img`
  width: 320px; /* Fixed width for each card */
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

// Props Type
interface CherryBlossomsSectionProps {
  title: string; // Title for the section
  images: { name: string; imgUrl: string }[]; // Array of objects with name and imgUrl
}

// Main Component
const CherryBlossomsSection: React.FC<CherryBlossomsSectionProps> = ({ title, images }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <ImageGrid>
        {images.map((image, index) => (
          <ImageCard key={index} src={image.imgUrl} alt={image.name} />
        ))}
      </ImageGrid>
    </SectionWrapper>
  );
};

export default CherryBlossomsSection;
