import React from 'react';
import styled from 'styled-components';
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
} from 'react-icons/fa';

// Container for the tags
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 5px;
    padding: 0px; /* Ensures it spans the full width */
    justify-content: flex-start; /* Optional: Align tags to the start if needed */
  }
`;

// Styled tag component with dynamic background and text colors
const Tag = styled.div<{ bgColor: string; textColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: -4px !important;
  padding-right: 20px;
  padding-bottom: -4px ; // Adjusted padding for the yellow background (smaller)
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ textColor }) => textColor || '#000'};
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// Icon wrapper to align icons with the text, make icons black with white background
const IconWrapper = styled.div`
  font-size: 20px; /* Increase the font size to make the icon larger */
  margin-right: 10px;  /* Adjust margin between icon and text */
  color: #000; /* Set icon color to black */
  background-color: #fff; /* Set background of icon to white */
  padding: 12px; /* Increase padding around the icon to make the circle bigger */
  border-radius: 50%; /* Makes the icon background circular */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Tags data with corresponding icons and colors
const tagsData = [
  { label: 'Beaches', color: '#FFEB3B', icon: <FaUmbrellaBeach /> },
  { label: 'Nightlife', color: '#FFEB3B', icon: <FaCocktail /> },
  { label: 'Adventure', color: '#FFEB3B', icon: <FaMountain /> },
  { label: 'Flights', color: '#FFEB3B', icon: <FaPlane /> },
  { label: 'Cities', color: '#FFEB3B', icon: <FaCity /> },
  { label: 'Hotels', color: '#FFEB3B', icon: <FaHotel />, textColor: '#000' },
  { label: 'Visa Assistance', color: '#FFEB3B', icon: <FaPassport /> },
  { label: 'Road Trips', color: '#FFEB3B', icon: <FaCarSide /> },
  { label: 'Cruises', color: '#FFEB3B', icon: <FaShip /> },
  { label: 'Nature', color: '#FFEB3B', icon: <FaTree /> },
  { label: 'Tours', color: '#FFEB3B', icon: <FaMapMarkedAlt /> },
];

// Main Highlight component
const Highlight: React.FC = () => {
  const handleTagClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  return (
    <TagsContainer>
      {tagsData.map(({ label, color, icon, textColor }) => (
        <Tag
          key={label}
          bgColor={color}
          textColor={textColor}
          onClick={() => handleTagClick(label)}
        >
          <IconWrapper>{icon}</IconWrapper>
          {label}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Highlight;
