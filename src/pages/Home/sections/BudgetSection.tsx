import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;

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

const Section = styled.div`
  background: #e7f8f4;
  padding: 40px 20px;
  border-radius: 12px;
  text-align: center;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: #555;

  @media (min-width: 2000px) {
    font-size: 36px;
  }
`;

const Highlight = styled.span`
  color: #d9534f;
  font-family: 'Pacifico', cursive;
  font-weight: bold;
`;

// Desktop layout (unchanged)
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none; // Hide normal grid on mobile
  }
`;

const Item = styled.div`
  width: 120px;
  height: 120px;

  @media (min-width: 2000px) {
    width: 180px;
    height: 180px;
  }
    
  @media (max-width: 768px) {
    height:auto;
  }
`;

const Image = styled.img`
  width: 100%;
  // height: 150px;
`;

// Mobile Slider Wrapper (only for mobile)
const MobileSliderWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
`;

const budgetImages = [
  { src: "https://www.tripzygo.in/images/budget/1.png", alt: "₹15,000" },
  { src: "https://www.tripzygo.in/images/budget/2.png", alt: "₹30,000" },
  { src: "https://www.tripzygo.in/images/budget/3.png", alt: "₹50,000" },
  { src: "https://www.tripzygo.in/images/budget/4.png", alt: "₹75,000" },
  { src: "https://www.tripzygo.in/images/budget/5.png", alt: "₹1,00,000" },
  { src: "https://www.tripzygo.in/images/budget/6.png", alt: "₹4,00,000" },
];

const BudgetSection: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 images at a time on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer>
      <Section>
        <Title>
          Holidays For Every <Highlight>Budget</Highlight>
        </Title>

        {/* Desktop Layout (UNCHANGED) */}
        <Container>
          {budgetImages.map((item, index) => (
            <Item key={index}>
              <Image src={item.src} alt={item.alt} />
            </Item>
          ))}
        </Container>

        {/* Mobile Slider (Only on screens ≤ 768px) */}
        <MobileSliderWrapper>
          <Slider {...sliderSettings}>
            {budgetImages.map((item, index) => (
              <Item key={index}>
                <Image src={item.src} alt={item.alt} />
              </Item>
            ))}
          </Slider>
        </MobileSliderWrapper>

      </Section>
    </SliderContainer>
  );
};

export default BudgetSection;
