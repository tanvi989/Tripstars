import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  padding: 4rem 1rem;
  
  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 36rem;
  margin: 0 auto;
  line-height: 1.6;
`;

const CardsGrid = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #ebf5ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const CardDescription = styled.p`
  color: #4a5568;
  text-align: center;
  line-height: 1.5;
`;

const CarouselContainer = styled.div`
  position: relative;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const CarouselTrack = styled.div<{ activeSlide: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${props => props.activeSlide * 100}%);
`;

const CarouselSlide = styled.div`
  width: 100%;
  flex-shrink: 0;
  padding: 0 1rem;
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.active ? '#3b82f6' : '#cbd5e0'};
  transition: background-color 0.2s ease;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const BenefitsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const cardData = [
    {
      title: "Customised Itineraries",
      description: "Enjoy our bespoke tour packages that can be tailored according to your preferences for personalised experience.",
      icon: "https://cdn-icons-png.flaticon.com/512/5164/5164030.png"
    },
    {
      title: "Wallet-Friendly Prices",
      description: "Every traveller from worldwide can embark on unforgettable journeys with our unbeatable holiday package prices.",
      icon: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png"
    },
    {
      title: "Exciting Deals",
      description: "Our platform comprises perfect deals and discounts on all exclusive holiday packages to ensure value-for-money.",
      icon: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
    },
    {
      title: "24/7 Support",
      description: "Our customer support team is always available to assist you and resolve travel-related queries instantly.",
      icon: "https://cdn-icons-png.flaticon.com/512/4233/4233839.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % cardData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Benefits of Booking With Us</Title>
          <Description>
            Discover the unrivalled benefits that promise memorable journeys all along.
          </Description>
        </Header>

        {/* Desktop/Tablet Grid */}
        <CardsGrid>
          {cardData.map((card, index) => (
            <Card key={index}>
              <IconWrapper>
                <Icon src={card.icon} alt={card.title} />
              </IconWrapper>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </CardsGrid>

        {/* Mobile Carousel */}
        <CarouselContainer>
          <CarouselTrack activeSlide={activeSlide}>
            {cardData.map((card, index) => (
              <CarouselSlide key={index}>
                <Card>
                  <IconWrapper>
                    <Icon src={card.icon} alt={card.title} />
                  </IconWrapper>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </Card>
              </CarouselSlide>
            ))}
          </CarouselTrack>
          
          <CarouselIndicators>
            {cardData.map((_, index) => (
              <Indicator
                key={index}
                active={activeSlide === index}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </CarouselIndicators>
        </CarouselContainer>
      </ContentWrapper>
    </Container>
  );
};

export default BenefitsSection; 