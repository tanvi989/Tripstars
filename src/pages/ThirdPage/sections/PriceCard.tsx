import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  text-align: center;

  transition: transform 0.2s ease-in-out;
    padding: 30px 0;
    margin: 30px 0;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: unset; /* Remove max-width limitation */
    padding: 20px 0;
    margin: 20px 0;
  }
`;


const Heading = styled.div`
  font-size: 18px;
  color: #4a4a4a;
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const PriceText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;

  span {
    font-size: 18px;
    color: #7a7a7a;
    font-weight: normal;
  }

  @media (max-width: 480px) {
    font-size: 32px;

    span {
      font-size: 16px;
    }
  }
`;

const EMIContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #555;
  margin: 15px 0;
  text-align: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  a {
    color: #0066cc;
    margin-left: 5px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    font-size: 13px;

    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #0066cc, #004aad);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #004aad, #003080);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
    width: 100%;
  }
`;

// Component Props
interface PriceCardProps {
  price: number;
  emiPrice: number;
  emiLink: string;
}

// React Component
const PriceCard: React.FC<PriceCardProps> = ({ price, emiPrice, emiLink }) => {
  return (
    <CardContainer>
      <Heading>Starting from</Heading>
      <PriceText>
        ₹{price} <span>Per Person</span>
      </PriceText>
      <EMIContainer>
        <img
          src="https://img.icons8.com/emoji/48/null/money-bag-emoji.png"
          alt="EMI Icon"
        />
        <span>No Cost EMI Starts from ₹{emiPrice}</span>
        <a href={emiLink}>see option</a>
      </EMIContainer>
      <SubmitButton>SUBMIT YOUR QUERY</SubmitButton>
    </CardContainer>
  );
};

export default PriceCard;
