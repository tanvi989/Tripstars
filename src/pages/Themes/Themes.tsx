import React from "react";
import styled from "styled-components";
import Banner from "./sections/Banner";
import FullWidthBanner from "./sections/FullWidthBanner";
import DestinationsGrid from "./sections/DestinationsGrid";
import Gallery from "./sections/Gallery";
import MobileNavbar from "./sections/MobileNavbar";
import Navbar from "./sections/Navbar";
import TravelCarousel from "./sections/TravelCarousel";

const ThemesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin: 20px 0;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 800px;
  text-align: center;
  line-height: 1.5;
`;

const Themes: React.FC = () => {
  return (
    <ThemesPageWrapper>

        <MobileNavbar />

    
      <Banner /> {/* The Banner is now included */}
      <DestinationsGrid />
      <FullWidthBanner />
      <Gallery />
      {/* <TravelCarousel /> */}

    </ThemesPageWrapper>
    
  );
};

export default Themes;
