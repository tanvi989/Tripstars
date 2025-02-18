import React from "react";
import styled from "styled-components";
import img1 from "../../../assets/Tripdetails/Experience best selling packages/discover1.png";
import img2 from "../../../assets/Tripdetails/Experience best selling packages/discover1.png";

// Styled Components
const SectionWrapper = styled.div`
  margin: 40px 50px;
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

// Main Component
const CherryBlossomsSection: React.FC = () => {
  const images = [img1, img2]; // Use imported images

  return (
    <SectionWrapper>
      {images.map((image, index) => (
        <ImageCard key={index} src={image} alt={`Best Selling Package ${index + 1}`} />
      ))}
    </SectionWrapper>
  );
};

export default CherryBlossomsSection;
