import React from "react";
import styled from "styled-components";

// Styled Component for Banner
const BannerContainer = styled.div`
  text-align: center;
  background-color: #f4f4f4;
  padding: 10px;
`;

const BannerImage = styled.img`
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensures image fits properly */
  padding: 10px; /* Space around the image */
  display: block; /* Prevents inline spacing */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds shadow effect */
  background-color: #fff; /* Background color for visibility */

  /* Responsive Styling */
  @media (max-width: 768px) {
    height: 200px; /* Fixed height on smaller screens */
    padding: 5px;
  }
`;

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerImage
        src="https://www.tripzygo.in/images/a/Whyus1.jpg"
        alt="Banner"
      />
    </BannerContainer>
  );
};

export default Banner;
