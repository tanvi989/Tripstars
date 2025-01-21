// TrendingDestinations.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  
  /* Default max-height for desktop */
  max-height: 500px;
  overflow-y: auto;

  /* Adjust for smaller screens */
  @media (max-width: 600px) {
    max-height: 500px; /* Ensure the same height as desktop */
  }

  /* (Optional) Customize the scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: 600; 
  font-size: 1.05rem;
  border-bottom: 1px solid #eee;
  color: #333;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
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

const TrendingDestinations = () => {
  const destinations = [
    // Add as many destinations as you want here
    { name: 'Europe',   image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Kerala',   image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Thailand', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Kashmir',  image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Japan',    image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'London',   image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Paris',    image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Maldives', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Hawaii',   image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    { name: 'Switzerland', image: 'https://images.emtcontent.com/holiday-img/home-img/CommoneEwOoH.png' },
    // ... and so on
  ];

  return (
    <Container>
      <Header>
        <Icon 
          src="https://images.emtcontent.com/holiday-img/home-img/cir_loc.svg" 
          alt="Location Icon" 
        />
        Top Trending Holiday Destinations
      </Header>
      {destinations.map((dest, i) => (
        <ListItem key={i}>
          <Thumbnail src={dest.image} alt={dest.name} />
          <Name>{dest.name}</Name>
        </ListItem>
      ))}
    </Container>
  );
};

export default TrendingDestinations;
