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

const Name = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

const TrendingDestinations = ({ searchTerm }: { searchTerm: string }) => {

  const navigate = useNavigate(); // Hook for navigation

  const destinations = [
    { name: 'bali', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'vietnam', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'thailand', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'kashmir', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'japan', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'london', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'paris', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'maldives', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'hawaii', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'switzerland', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
  ];
  const handleDestinationClick = (destination: string) => {

    const lowerCaseDestination = destination.toLowerCase();
    navigate(`/${lowerCaseDestination}`);
  };

  // Filter destinations based on searchTerm
  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {filteredDestinations.map((dest, i) => (
        <ListItem key={i} onClick={() => handleDestinationClick(dest.name)}>
          <Thumbnail src={dest.image} alt={dest.name} />
          <Name>{dest.name}</Name>
        </ListItem>
      ))}
    </Container>
  );
};

export default TrendingDestinations;
