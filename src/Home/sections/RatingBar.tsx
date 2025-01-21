import React from "react";
import styled from "styled-components";

// Styled components
const RatingBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #000;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  align-items: center;
  gap: 2rem; /* Adds space between the items */
  z-index: 1;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Allows wrapping for smaller screens */
    gap: 1rem; /* Reduces gap for smaller screens */
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between icon and text */

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem; /* Circle size */
    height: 1.5rem;
    background-color: #ffd700; /* Golden background */
    border-radius: 50%; /* Makes the background circular */
    position: relative;

    span {
      color: #fff; /* White checkmark color */
      font-size: 0.8rem; /* Small checkmark size */
      font-weight: bold;
    }
  }

  span {
    color: #fff;
    font-size: 0.9rem; /* Text size */
    white-space: nowrap; /* Prevent text from wrapping */
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
            <span>✓</span> {/* White checkmark inside the icon */}
          </div>
          <span>{item.text}</span>
        </InfoItem>
      ))}
    </RatingBarContainer>
  );
};

export default RatingBar;
