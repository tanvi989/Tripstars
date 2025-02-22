



import React from "react";
import styled from "styled-components";

// Styled Component for Full-Width Image
const BannerWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const FullWidthBanner: React.FC = () => {
  return (
    <BannerWrapper>
      <BannerImage
        src="https://wanderon.in/assets/images/honeymoon-banner.svg"
        alt="Honeymoon Banner"
      />
    </BannerWrapper>
  );
};

export default FullWidthBanner;
