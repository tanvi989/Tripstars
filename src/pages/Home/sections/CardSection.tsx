import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const SectionContainer = styled.div`
  padding-top: 190px; /* Adjust this value as needed */
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  margin: auto;
`;

const Slider = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ translateX }) => `translateX(-${translateX}%)`};
`;

const Card = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  margin: 0.5%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: relative;

  @media (max-width: 768px) {
    flex: 0 0 50%;
     margin: 2.5%;
    max-width: 50%;
    height: 278px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height:300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const PricingTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffd700;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 25px;
  background: linear-gradient(rgba(0, 0, 0, 0) 1%, rgb(0, 0, 0) 76.21%);
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 15px;

  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between; /* Ensures one item aligns to the left and one to the right */
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Optional: Adjust font size for smaller screens */
  }
`;

const CalendarIcon = styled.span`
  height: 18px;
  width: 18px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 5px;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23FFD700" viewBox="0 0 24 24"%3E%3Cpath d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/%3E%3C/svg%3E');
`;


const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Icon = styled.span<{ backgroundImage: string }>`
  height: 18px;
  width: 18px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 5px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
   filter: sepia(1) saturate(5) hue-rotate(10deg) brightness(1.2); /* Makes the icon golden */
`;

const Button = styled.button<{ position: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  ${({ position }) => (position === 'prev' ? 'left: 10px;' : 'right: 10px;')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Title2 = styled.h2`
padding-top: 40px;
padding-left: 15rem;

  @media (max-width: 1340px) {
  padding-top: 40px;
    padding-left:1rem;
  
  @media (max-width: 1080px) {
  padding-top: 40px;
  padding-left:1rem;
  }
  @media (max-width: 768px) {
  padding-top: 30px;
   padding-left:1rem;
  }
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const cards = [
  {
      title: 'Meghalaya Road Trip',
      image: 'https://images.wanderon.in/new-homepage-data/romantic%20escapes/kashmir-romantic-02',
      pricing: '₹21,499/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '5N/6D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Guwahati' },
      ],
  },
  {
      title: 'Vietnam Adventure',
      image: 'https://images.wanderon.in/new-homepage-data/International/vietnam',
      pricing: '₹21,499/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '5N/6D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Guwahati ' },
      ],
  },
  {
      title: 'Kashmir Winter Backpacking',
      image: 'https://wanderon-sales.s3.amazonaws.com/gallery/new/2024/12/16/kashmir-winter-backpacking-1.avif',
      pricing: '₹21,499/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '6N/7D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Srinagar' },
      ],
  },
  {
      title: 'European Escape',
      image: 'https://images.wanderon.in/new-homepage-data/International/europe',
      pricing: '₹69,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '7N/8D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Paris' },
      ],
  },
  {
      title: 'Romantic Kashmir',
      image: 'https://images.wanderon.in/new-homepage-data/romantic%20escapes/kashmir-romantic-02',
      pricing: '₹18,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '4N/5D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Srinagar' },
      ],
  },
  {
      title: 'Vietnam Road Trip',
      image: 'https://images.wanderon.in/new-homepage-data/International/vietnam',
      pricing: '₹19,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '6N/7D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Hanoi' },
      ],
  },
  {
      title: 'Ladakh Bike Trip',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/ladakh-bike-trip.jpg',
      pricing: '₹25,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '8N/9D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Leh ' },
      ],
  },
  {
      title: 'Andaman Bliss',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/andaman.jpg',
      pricing: '₹24,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '6N/7D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Port' },
      ],
  },
  {
      title: 'Spiti Valley Expedition',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/spiti.jpg',
      pricing: '₹20,499/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '6N/7D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Manali - Kaza' },
      ],
  },
  {
      title: 'Maldives Getaway',
      image: 'https://images.wanderon.in/new-homepage-data/International/maldives.jpg',
      pricing: '₹39,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '4N/5D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Male - Private Island' },
      ],
  },
  {
      title: 'Kerala Backwaters',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/kerala-backwaters.jpg',
      pricing: '₹15,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '3N/4D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Cochin - Alleppey' },
      ],
  },
  {
      title: 'Rajasthan Royal Retreat',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/rajasthan.jpg',
      pricing: '₹22,499/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '5N/6D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Jaipur - Udaipur' },
      ],
  },
  {
      title: 'Bali Beaches & Bliss',
      image: 'https://images.wanderon.in/new-homepage-data/International/bali.jpg',
      pricing: '₹34,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '6N/7D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Denpasar - Ubud' },
      ],
  },
  {
      title: 'Himachal Adventure',
      image: 'https://images.wanderon.in/new-homepage-data/domestic/himachal.jpg',
      pricing: '₹16,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '5N/6D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Shimla - Manali' },
      ],
  },
  {
      title: 'Thailand Tropical Escape',
      image: 'https://images.wanderon.in/new-homepage-data/International/thailand.jpg',
      pricing: '₹28,999/- Onwards',
      info: [
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: '5N/6D' },
       { icon: 'https://wanderon.in/assets/images/new-location.svg', text: 'Bangkok - Phuket' },
      ],
  },
  ];
  
interface CardSectionInterface {
  title: string; // Title for the section
}

const CardSection: React.FC<CardSectionInterface> = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const updateVisibleCards = () => {
    setVisibleCards(window.innerWidth <= 768 ? 2 : 4);
  };

  useEffect(() => {
    window.addEventListener('resize', updateVisibleCards);
    updateVisibleCards();

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  const moveSlider = (direction: number) => {
    const maxIndex = cards.length - visibleCards;
    setCurrentIndex((prevIndex) => Math.max(0, Math.min(maxIndex, prevIndex + direction)));
  };

  return (
    <div>
      <Title2>{title}</Title2>
      <SliderContainer>
        <Slider translateX={currentIndex * (100 / visibleCards)}>
          {cards.map((card, index) => (
            <Card key={index}>
              <PricingTag>{card.pricing}</PricingTag>
              <CardImage src={card.image} alt={card.title} />
              <CardOverlay>
                <Title>{card.title}</Title>
                <Info>
  <InfoItem>
    <CalendarIcon />
    {card.info[0].text}
  </InfoItem>
  <InfoItem>
    <Icon backgroundImage={card.info[1].icon} />
    {card.info[1].text}
  </InfoItem>
</Info>

              </CardOverlay>
            </Card>
          ))}
        </Slider>
        <Button position="prev" onClick={() => moveSlider(-1)}>
          ❮
        </Button>
        <Button position="next" onClick={() => moveSlider(1)}>
          ❯
        </Button>
      </SliderContainer>
    </div>
  );
};

export default CardSection;
