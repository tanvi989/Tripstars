import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const Container = styled.div`
  position: absolute;
  top: 100%; 
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin-top: 4px;
  z-index: 10000;
  max-height: 350px;
  overflow-y: auto;

  @media (max-width: 600px) {
    max-height: 300px;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fafafa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Thumbnail = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 1rem;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

const Tag = styled.span<{ bgColor: string }>`
  font-size: 0.65rem;  /* Reduced from 0.75rem */
  font-weight: 500;  /* Slightly lighter */
  color: #fff;
  background-color: ${({ bgColor }) => bgColor || '#666'};
  padding: 4px 8px;  /* Reduced padding */
  border-radius: 6px;  /* Slightly smaller radius */
  margin-left: 8px;  /* Adjusted spacing */
  text-transform: uppercase;
  letter-spacing: 0.4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: scale(1.05); /* Less aggressive hover effect */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const TrendingDestinations = ({ searchTerm }: { searchTerm: string }) => {
  const navigate = useNavigate();

  const destinations = [
    { name: 'Maldives', tag: 'HONEYMOON', tagColor: '#FF4081' },  // Pink
    { name: 'Europe', tag: 'TRENDING', tagColor: '#ffd700' },  // Green
    { name: 'Bali', tag: 'POPULAR', tagColor: '#FF5722' },  // Orange-Red
    { name: 'Dubai', tag: 'IN SEASON', tagColor: '#03A9F4' },  // Blue
    { name: 'Thailand', tag: 'BUDGET', tagColor: '#FFC107' },  // Yellow
    { name: 'Abu Dhabi', tag: 'POPULAR', tagColor: '#673AB7' },  // Purple
    { name: 'Singapore' },
    { name: 'Malaysia' },
    { name: 'Baku' },
    { name: 'Turkey' },
    { name: 'Australia' },
    { name: 'New Zealand' },
    { name: 'Japan' },
    { name: 'Korea' },
    { name: 'Kerala' },
    { name: 'Himachal' },
    { name: 'Ladakh' },
    { name: 'Andaman' },
    { name: 'Kashmir' },
  ];

  const handleDestinationClick = (destination: string) => {
    navigate(`/${destination.toLowerCase()}`);
  };
  // Filter destinations based on searchTerm
  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {filteredDestinations.map((dest, i) => (
        <ListItem key={i} onClick={() => handleDestinationClick(dest.name)}>
          <NameContainer>
            <Name>{dest.name}</Name>
            {dest.tag && <Tag bgColor={dest.tagColor || '#ccc'}>{dest.tag}</Tag>}
          </NameContainer>
        </ListItem>
      ))}
    </Container>
  );
};

export default TrendingDestinations;