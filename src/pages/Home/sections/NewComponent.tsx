import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define the types for the card data
interface CardInfo {
  icon: JSX.Element;
  text: string;
}

interface CardData {
  title: string;
  price: string;
  image: string;
  info: CardInfo[];
}

// Define the data for the cards
const cards: CardData[] = [
  {
    title: 'Meghalaya Road Trip',
    price: '₹21,499/- Onwards',
    image: 'https://images.wanderon.in/new-homepage-data/romantic%20escapes/kashmir-romantic-02',
    info: [
      { icon: <FaClock />, text: '5N/6D' },
      { icon: <FaMapMarkerAlt />, text: 'Guwahati - Guwahati' },
      { icon: <FaCalendarAlt />, text: '25 Jan' },
    ],
  },
  {
    title: 'Himachal Adventure',
    price: '₹19,999/- Onwards',
    image: 'https://images.wanderon.in/new-homepage-data/International/vietnam',
    info: [
      { icon: <FaClock />, text: '6N/7D' },
      { icon: <FaMapMarkerAlt />, text: 'Delhi - Manali' },
      { icon: <FaCalendarAlt />, text: '1 Feb' },
    ],
  },
  {
    title: 'Meghalaya Road Trip',
    price: '₹21,499/- Onwards',
    image: 'https://images.wanderon.in/new-homepage-data/romantic%20escapes/kashmir-romantic-02',
    info: [
      { icon: <FaClock />, text: '5N/6D' },
      { icon: <FaMapMarkerAlt />, text: 'Guwahati - Guwahati' },
      { icon: <FaCalendarAlt />, text: '25 Jan' },
    ],
  },
  {
    title: 'Himachal Adventure',
    price: '₹19,999/- Onwards',
    image: 'https://images.wanderon.in/new-homepage-data/International/vietnam',
    info: [
      { icon: <FaClock />, text: '6N/7D' },
      { icon: <FaMapMarkerAlt />, text: 'Delhi - Manali' },
      { icon: <FaCalendarAlt />, text: '1 Feb' },
    ],
  },
  {
    title: 'Meghalaya Road Trip',
    price: '₹21,499/- Onwards',
    image: 'https://images.wanderon.in/new-homepage-data/romantic%20escapes/kashmir-romantic-02',
    info: [
      { icon: <FaClock />, text: '5N/6D' },
      { icon: <FaMapMarkerAlt />, text: 'Guwahati - Guwahati' },
      { icon: <FaCalendarAlt />, text: '25 Jan' },
    ],
  },
  {
    title: 'Himachal Adventure',
    price: '₹19,999/- Onwards',
    image: 'https://images.wanderon.in/new-homepage-data/International/vietnam',
    info: [
      { icon: <FaClock />, text: '6N/7D' },
      { icon: <FaMapMarkerAlt />, text: 'Delhi - Manali' },
      { icon: <FaCalendarAlt />, text: '1 Feb' },
    ],
  },
  // Add more cards as needed...
];

// Styled components
const SliderContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 1400px;
  overflow: hidden;
  margin: auto;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Card = styled.div`
  flex: 1 0 auto;
  width: 300px; /* Fixed width for desktop */
  height: 250px; /* Fixed height for desktop */
  margin: 0.5%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: relative;

  @media (max-width: 1024px) {
    width: 250px; /* Optional: Adjust size for smaller screens */
    height: 180px;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on small screens */
    height: auto;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%; /* Ensure the image takes the full height */
  object-fit: cover; /* Maintain aspect ratio and crop if necessary */
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
`;



const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0) 1%, rgb(0, 0, 0) 76.21%);
  color: white;
  text-align: left;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 0.8rem;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const CardSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const moveSlider = (direction: number): void => {
    if (!sliderRef.current) return;

    const totalCards = cards.length;
    const maxIndex = totalCards - visibleCards;
    const newIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
    setCurrentIndex(newIndex);

    const cardWidth = sliderRef.current.offsetWidth / visibleCards;
    sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  return (
    <SliderContainer>
      <Slider ref={sliderRef}>
        {cards.map((card, index) => (
          <Card key={index}>
            <PricingTag>{card.price}</PricingTag>
            <CardImage src={card.image} alt={card.title} />
            <CardOverlay>
              <Title>{card.title}</Title>
              <Info>
                {card.info.map((info, idx) => (
                  <InfoItem key={idx}>
                    {info.icon}
                    {info.text}
                  </InfoItem>
                ))}
              </Info>
            </CardOverlay>
          </Card>
        ))}
      </Slider>
      <Button className="prev" onClick={() => moveSlider(-1)}>
        <FaChevronLeft />
      </Button>
      <Button className="next" onClick={() => moveSlider(1)}>
        <FaChevronRight />
      </Button>
    </SliderContainer>
  );
};

export default CardSlider;
