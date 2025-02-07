import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 10px;
  width: 90%;
  
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  padding: 3rem 1rem;

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4a5568;
  max-width: 36rem;
  margin: 0 auto;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

/* Grid for Large Screens (1024px+) */
const CardsGrid = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

/* Swiper for Mobile & Mid-sized Screens (600px - 1024px) */
const ResponsiveSwiper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }

  .swiper {
    padding: 0.5rem;
    padding-bottom: 2rem;
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

/* Styled Card Component */
const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
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
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardDescription = styled.p`
  color: #4a5568;
  text-align: center;
  line-height: 1.5;
`;

const BenefitsSection = () => {
  const cardData = [
    {
      title: "Customised Itineraries",
      description: "Enjoy our bespoke tour packages that can be tailored according to your preferences for a personalised experience.",
      icon: "https://cdn-icons-png.flaticon.com/512/5164/5164030.png",
    },
    {
      title: "Wallet-Friendly Prices",
      description: "Every traveller can embark on unforgettable journeys with our unbeatable holiday package prices.",
      icon: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png",
    },
    {
      title: "Exciting Deals",
      description: "Our platform comprises perfect deals and discounts on all exclusive holiday packages to ensure value for money.",
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

          {/* Large Screen Grid (1024px+) */}
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

          {/* Swiper for Mobile & Mid-Sized Screens */}
          <ResponsiveSwiper>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                600: { slidesPerView: 1 }, // Mobile
                768: { slidesPerView: 2 }, // Mid-size screens (tablets/small desktops)
              }}
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
          </ResponsiveSwiper>
        </ContentWrapper>
      </Container>
    </SliderContainer>
  );
};

export default BenefitsSection;
