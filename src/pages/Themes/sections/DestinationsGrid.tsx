import React from "react";
import styled from "styled-components";

// Destination Images & Data
const destinations = [
  { name: "Bali", img: "https://ik.imagekit.io/workcations/bali_card" },
  { name: "Maldives", img: "https://ik.imagekit.io/workcations/maldives_card" },
  { name: "Singapore", img: "https://ik.imagekit.io/workcations/singapore_card" },
  { name: "Thailand", img: "https://ik.imagekit.io/workcations/thailand_card" },
  { name: "Vietnam", img: "https://ik.imagekit.io/workcations/vietnam_card" },
  { name: "Kashmir", img: "https://ik.imagekit.io/workcations/kashmir_card" },
  { name: "Andaman", img: "https://ik.imagekit.io/workcations/andaman_card" },
  { name: "Kerala", img: "https://ik.imagekit.io/workcations/kerala_card" },
];

// Styled Components
const SectionWrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  background: linear-gradient(to bottom, #fffaf2, #fde6e6);
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  font-family: "Dancing Script", cursive;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px; /* More spacing */
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const DestinationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DestinationImage = styled.img`
  width: 200px; /* Increased size */
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const DestinationName = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// Bottom-right decorative image
const DecorativeImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  opacity: 0.8;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 140px;
  }
`;

const DestinationsGrid: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>Your Love Story, Our Destinations!</Title>
      <GridContainer>
        {destinations.map((dest, index) => (
          <DestinationCard key={index}>
            <DestinationImage src={dest.img} alt={dest.name} />
            <DestinationName>{dest.name}</DestinationName>
          </DestinationCard>
        ))}
      </GridContainer>
      {/* Decorative background image at bottom-right */}
      <DecorativeImage src="https://wanderon.in/assets/svg/love-hands.svg" alt="Decorative Hands" />
    </SectionWrapper>
  );
};

export default DestinationsGrid;
