import React from "react";
import styled from "styled-components";
import {
  FaUmbrellaBeach,
  FaCocktail,
  FaMountain,
  FaPlane,
  FaCity,
  FaHotel,
  FaPassport,
  FaCarSide,
  FaShip,
  FaTree,
  FaMapMarkedAlt,
} from "react-icons/fa";

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 10px;
  justify-content: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 5px;
    justify-content: flex-start;
  }
`;

const Tag = styled.div<{ bgColor: string; textColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ textColor }) => textColor || "black"};
  background: linear-gradient(to top left, #d4af37, #ffd700); /* Gold gradient */
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1.5px solid black; /* Thin Black Border */
  transition: all 0.2s ease-in-out;

  /* Glossy Effect */
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 40%;
    height: 40%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    filter: blur(4px);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: inset 2px 3px 4px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 18px;
  margin-right: 10px;
  color: black;
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black; /* Thin border around the icon */
`;

const tagsData = [
  { label: "Beaches", icon: <FaUmbrellaBeach /> },
  { label: "Nightlife", icon: <FaCocktail /> },
  { label: "Adventure", icon: <FaMountain /> },
  { label: "Flights", icon: <FaPlane /> },
  { label: "Cities", icon: <FaCity /> },
  { label: "Hotels", icon: <FaHotel /> },
  { label: "Visa Assistance", icon: <FaPassport /> },
  { label: "Road Trips", icon: <FaCarSide /> },
  { label: "Cruises", icon: <FaShip /> },
  { label: "Nature", icon: <FaTree /> },
  { label: "Tours", icon: <FaMapMarkedAlt /> },
];

const Highlight: React.FC = () => {
  const handleTagClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  return (
    <TagsContainer>
      {tagsData.map(({ label, icon }) => (
        <Tag key={label} bgColor="#FFEB3B" onClick={() => handleTagClick(label)}>
          <IconWrapper>{icon}</IconWrapper>
          {label}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Highlight;
