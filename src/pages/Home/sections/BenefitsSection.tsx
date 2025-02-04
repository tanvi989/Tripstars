import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;
  margin-top:10px;
  @media (max-width: 1340px) {
    margin: 0 5rem;
  }
  @media (max-width: 1080px) {
    margin: 0 3rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

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

const MobileSwiper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  .swiper {
    padding: 0.5rem;
    padding-bottom: 3rem;
  }

  .swiper-pagination-bullet {
    width: 0.5rem;
    height: 0.5rem;
    background: #cbd5e0;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #3b82f6;
  }
`;

const BenefitsSection = () => {
  const cardData = [
    {
      title: "Customised Itineraries",
      description: "Enjoy our bespoke tour packages that can be tailored according to your preferences for personalised experience.",
      icon: "https://cdn-icons-png.flaticon.com/512/5164/5164030.png",
    },
    {
      title: "Wallet-Friendly Prices",
      description: "Every traveller from worldwide can embark on unforgettable journeys with our unbeatable holiday package prices.",
      icon: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png",
    },
    {
      title: "Exciting Deals",
      description: "Our platform comprises perfect deals and discounts on all exclusive holiday packages to ensure value-for-money.",
      icon: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
    },
    {
      title: "24/7 Support",
      description: "Our customer support team is always available to assist you and resolve travel-related queries instantly.",
      icon: "https://cdn-icons-png.flaticon.com/512/4233/4233839.png",
    },
  ];

  return (
    <SliderContainer>
    <Container>
      <ContentWrapper>
        <Header>
          <Title>Benefits of Booking With Us</Title>
          <Description>
            Discover the unrivalled benefits that promise memorable journeys all along.
          </Description>
        </Header>

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

        <MobileSwiper>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <Card>
                  <IconWrapper>
                    <Icon src={card.icon} alt={card.title} />
                  </IconWrapper>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </MobileSwiper>
      </ContentWrapper>
    </Container>
    </SliderContainer>
  );
};

export default BenefitsSection;