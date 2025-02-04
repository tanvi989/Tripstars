import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 10rem;
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

// Styled Components
const Section = styled.div`
  background: #e7f8f4;
  padding: 40px 20px;
  border-radius: 12px;
  text-align: center;
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: #555;
`;

const Highlight = styled.span`
  color: #d9534f;
  font-family: 'Pacifico', cursive;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Item = styled.div`
  width: 120px;
  height: 120px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

// Budget Data
const budgetImages = [
  { src: "https://www.tripzygo.in/images/budget/1.png", alt: "₹15,000" },
  { src: "https://www.tripzygo.in/images/budget/2.png", alt: "₹30,000" },
  { src: "https://www.tripzygo.in/images/budget/3.png", alt: "₹50,000" },
  { src: "https://www.tripzygo.in/images/budget/4.png", alt: "₹75,000" },
  { src: "https://www.tripzygo.in/images/budget/5.png", alt: "₹1,00,000" },
  { src: "https://www.tripzygo.in/images/budget/6.png", alt: "₹4,00,000" },
];

// Functional Component
const BudgetSection: React.FC = () => {
  return (
    <SliderContainer>
    <Section>
      <Title>
        Holidays For Every <Highlight>Budget</Highlight>
      </Title>
      <Container>
        {budgetImages.map((item, index) => (
          <Item key={index}>
            <Image src={item.src} alt={item.alt} />
          </Item>
        ))}
      </Container>
    </Section>
    </SliderContainer>
  );
};

export default BudgetSection;