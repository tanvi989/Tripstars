import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Define Benefit type
interface Benefit {
  title: string;
  description: string;
  iconUrl: string;
}

// Benefits Data
const benefits: Benefit[] = [
  {
    title: "Customised Bespoke",
    description:
      "Enjoy our bespoke tour packages that can tailored according to your preferences for a good experience.",
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

// Styled components for layout and styling
const Section = styled.section`
  padding: 4rem 15rem;
  background: #fff;
  text-align: center;

  @media (max-width: 1340px) {
    padding: 3rem 5rem;
  }
  @media (max-width: 1080px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;

`;

const Description = styled.p`
  font-size: 16px;
  color: #333;

  margin: 10px auto;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid #cce7ff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Icon = styled.div<{ imageUrl: string }>`
  width: 60px;
  height: 60px;
  background: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;

const CardText = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

// BenefitsSection Component as a slider
const BenefitsSection: React.FC = () => {
  return (
    <Section>
      <Title>Benefits of Booking With Us</Title>
      <Description>
        Discover the unrivalled benefits that promise memorable journeys all along.
      </Description>

      <Swiper
        loop={true} // Enable infinite loop mode
        speed={1200} // Transition speed in ms
        autoplay={{ delay: 1800 }} // Auto slide every 1800ms
        modules={[Autoplay]}
        slidesPerView={1} // Default number of slides
        spaceBetween={20} // Space between slides
        breakpoints={{
          768: { slidesPerView: 2 },
          1080: { slidesPerView: 3 },
        }}
      >
        {benefits.map((benefit, index) => (
          <SwiperSlide key={index}>
            <Card>
              <Icon imageUrl={benefit.iconUrl} />
              <CardText>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </CardText>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default BenefitsSection;
