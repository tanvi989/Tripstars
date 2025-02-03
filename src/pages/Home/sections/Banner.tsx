import React from "react";
import styled from "styled-components";

// Styled Component for Banner
const BannerContainer = styled.div`
  text-align: center;
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

const Banner: React.FC = () => {
  return (
    <SliderContainer>
    <BannerContainer>
      <BannerImage
        src="https://www.tripzygo.in/images/a/Whyus1.jpg"
        alt="Banner"
      />
    </BannerContainer>
    </SliderContainer>
  );
};

export default Banner;
