import React from "react";
import styled from "styled-components";

// Styled components
const RatingBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 11px;
    gap: 0.5rem;
    min-width: 120px;
    width: auto;

    /* Shift first row slightly to the left */
    & > div:nth-child(1),
    & > div:nth-child(2) {
      margin-left: -60px;
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #ffd700;
    border-radius: 50%;
    position: relative;

    span {
      color: #fff;
      font-size: 0.7rem;
      font-weight: bold;
    }
  }

  span {
    color: #fff;
    font-size: 0.9rem; /* Increased font size for desktop */
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 0.9rem; /* Smaller font for tablets */
    }

    @media (max-width: 375px) {
      font-size: 0.85rem; /* Even smaller font for very small screens */
    }
  }
`;

// RatingBar Component
const RatingBar = () => {
  const infoItems = [
    { text: "4.6 Rated" },
    { text: "100% Customised Trips" },
    { text: "95% Visa Success Rate" },
    { text: "24x7 Concierge" },
  ];

  return (
    <RatingBarContainer>
      {infoItems.map((item, index) => (
        <InfoItem key={index}>
          <div className="icon">
            <span>✓</span>
          </div>
          <span>{item.text}</span>
        </InfoItem>
      ))}
    </RatingBarContainer>
  );
};

export default RatingBar;
