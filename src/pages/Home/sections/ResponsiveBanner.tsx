// ResponsiveBanner.tsx
import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  width: 1200px;
  height: 150px;
  padding: 1rem; /* Adjust padding as needed */
  border-radius: 10px; /* Rounded corners */
  background-color: #f0f0f0; /* Example background color */
  margin: 0 auto; /* Center horizontally */
  /* Mobile Image Hidden on Desktop */
  .mobile {
    display: none;
  }

  /* Desktop Image Hidden on Mobile */
  .desktop {
    display: block;
  }

  /* Media Queries */
  @media screen and (max-width: 768px) {
     
    padding: 0.5rem; /* Adjust padding for mobile */
    .desktop {
      display: none;
    }
    .mobile {
     width: 100vh;
    height: 125px;
      display: block;
    }
  }
`;

const ResponsiveBanner: React.FC = () => {
  return (
    <BannerWrapper>
      {/* Desktop Image */}
      <img
        src=""
        alt="Abu Dhabi Desktop Banner"
        className="desktop"
      />
      {/* Mobile Image */}
      <img
        src="https://images.emtcontent.com/holiday-img/home-img/abudhabi-banner-mob.webp"
        alt="Abu Dhabi Mobile Banner"
        className="mobile"
      />
    </BannerWrapper>
  );
};

export default ResponsiveBanner;
