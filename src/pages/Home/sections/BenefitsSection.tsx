import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Define Types
interface Benefit {
  title: string;
  description: string;
  iconUrl: string;
}

// Benefits Data
const benefits: Benefit[] = [
  {
    title: "Customised Itineraries",
    description:
      "Enjoy our bespoke tour packages that can be tailored according to your preferences for a personalised experience.",
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/sun_bed.png",
  },
  {
    title: "Wallet-Friendly Prices",
    description:
      "Every traveller from worldwide can embark on unforgettable journeys with our unbeatable holiday package prices.",
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/low.png",
  },
  {
    title: "Exciting Deals",
    description:
      "Our platform comprises perfect deals and discounts on all exclusive holiday packages to ensure value-for-money.",
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/ec_deal.png",
  },
  {
    title: "24/7 Support",
    description:
      "Our customer support team is always available to assist you and resolve travel-related queries instantly.",
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/support.png",
  },
];

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 0 15rem;

  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
  max-width: 600px;
`;

const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 1080px) {
    flex-wrap: nowrap; /* Prevents wrapping on smaller desktops */
    overflow-x: auto; /* Allows scrolling if needed */
    justify-content: flex-start; /* Aligns cards in a row */
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  max-width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #cce7ff;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Icon = styled.div<{ imageUrl: string }>`
  width: 60px;
  height: 60px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;

const CardText = styled.div`
  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

const SwiperContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 20px 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

// BenefitCard Component
const BenefitCard: React.FC<Benefit> = ({ title, description, iconUrl }) => (
  <Card>
    <Icon imageUrl={iconUrl} />
    <CardText>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardText>
  </Card>
);

// Main Component
const BenefitsSection: React.FC = () => {
  return (
    <Section>
      <Title>Benefits of Booking With Us</Title>
      <Description>
        Discover the unrivalled benefits that promise memorable journeys all along.
      </Description>

      {/* Desktop & Tablet View */}
      <BenefitsContainer>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </BenefitsContainer>

      {/* Mobile Swiper View */}
      <SwiperContainer>
        <Swiper spaceBetween={10} slidesPerView={1.2} breakpoints={{
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 }
        }}>
          {benefits.map((benefit, index) => (
            <SwiperSlide key={index}>
              <BenefitCard {...benefit} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Section>
  );
};

export default BenefitsSection;
