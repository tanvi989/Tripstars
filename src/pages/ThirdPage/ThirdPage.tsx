import React, { useState } from "react";
import Loader from "../../components/common/Loader";
import BudgetFriendly from "../Home/sections/BudgetFriendly";
import ExploreDestinations from "../Home/sections/ExploreDestinations";
import HeroSection2 from "./sections/HeroSection2";
import PackageOverview from "./sections/PackageOverview";
import Heading from "./sections/Heading";
import Tabline from "./sections/Tabline";
import PriceCard from "./sections/PriceCard.tsx";
import VideoTestimonials from "../Home/sections/VideoTestimonials";
import Highlight from "./sections/Highlight";
import PricingTables from "./sections/PricingTables.tsx";
import TermsAndConditions from "./sections/TermsAndConditions";
import SliderComponent from "./sections/SliderComponent"
import PopularDestinations from "../Home/sections/PopularDestinations";
import TrendingOffers from "../Tripdetails/sections/TrandingOffers";
import CherryBlossomsSection from "../Tripdetails/sections/CherryBlossomsSection";
import styled from "styled-components";
import DynamicSlider from "./sections/DynamicSlider";
import img1 from "../../assets/Tripdetails/bali/ThingsToDoInBali/Bali swing.png";
import img2 from "../../assets/Tripdetails/bali/ThingsToDoInBali/Banova water sport.png";
import img3 from "../../assets/Tripdetails/bali/ThingsToDoInBali/Kechak dance.png";
import img4 from "../../assets/Tripdetails/bali/ThingsToDoInBali/Kintamani tour.png";
import img5 from "../../assets/Tripdetails/bali/ThingsToDoInBali/NUSA PANEDA.png";
import img6 from "../../assets/Tripdetails/bali/ThingsToDoInBali/Tanah lot temple.png";
import img7 from "../../assets/Tripdetails/bali/ThingsToDoInBali/Ulundanu temple.png";
import img8 from "../../assets/Tripdetails/bali/ThingsToDoInBali/mtv ride.png";
import img9 from "../../assets/Tripdetails/bali/ThingsToDoInBali/rice terace 2.png";
import img10 from "../../assets/Tripdetails/bali/ThingsToDoInBali/rice terace.png";
import HelpCard from "./sections/HelpCard.tsx";
import trandingimg1 from "../../assets/Tripdetails/bali/itinerary/Artboard 1.png";
import trandingimg2 from "../../assets/Tripdetails/bali/itinerary/Artboard 2.png";
import trandingimg3 from "../../assets/Tripdetails/bali/itinerary/Artboard 3 copy 2.png";
import trandingimg4 from "../../assets/Tripdetails/bali/itinerary/Artboard 3 copy.png";
import trandingimg5 from "../../assets/Tripdetails/bali/itinerary/Artboard 3.png";
import trandingimg6 from "../../assets/Tripdetails/bali/itinerary/Artboard 4 copy.png";
// Styled Components
import TravelItinerary from "./sections/TravelItinerary.tsx";
import InclusionsExclusions from "./sections/InclusionsExclusions";
import TabbedTable from "./sections/TabbedTable.tsx";
import PackageCard from "./sections/PackageCard.tsx";
const TrendingOffersWrapper = styled.div`
  max-width: 1200px; /* Adjust the width for desktop */
  margin:0 20px auto; /* Center the box on the page */
  padding: 0 20px; /* Add padding inside the box */
 

  @media (max-width: 768px) {
    max-width: 100%; /* Make the box full-width on tablets and smaller screens */
    margin: 0 10px; /* Reduce margin for smaller screens */
    padding-top:0;
    margin-top:0;
    padding:0 10px; /* Adjust padding for smaller screens */
  }
`;

const PageWrapper = styled.div`
  padding:20px 0px;
  @media (max-width: 768px) {
    // padding: 15px;
  }
`;

// New Div Container
const SplitContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stacks the divs vertically on smaller screens */
  }
`;

const LeftDiv = styled.div`
  width: 70%;
 
  padding: 20px;
  box-sizing: border-box;
 

  @media (max-width: 768px) {
    width: 100%; /* Full-width on smaller screens */
  }
`;

const RightDiv = styled.div`
  width: 30%;
  padding: 20px;
  box-sizing: border-box;
  position: sticky;
  top: 0; /* Sticks to the top of the viewport */
  height: 100vh; /* Makes it match the viewport height */
  overflow-y: auto; /* Allows the right section to scroll independently if its content overflows */

  @media (max-width: 768px) {
    position: static; /* Removes sticky behavior on smaller screens */
    width: 100%; /* Full-width on smaller screens */
    height: auto; /* Adjusts for mobile layout */
    overflow-y: visible; /* No independent scrolling for mobile */
  }
`;


const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const OverviewWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    // padding: 15px;
  }
`;

const ThingsToDoInBali = [
  { name: "Bali Swing", image: img1 },
  { name: "Banova Water Sport", image: img2 },
  { name: "Kechak Dance", image: img3 },
  { name: "Kintamani Tour", image: img4 },
  { name: "Nusa Paneda", image: img5 },
  { name: "Tanah Lot Temple", image: img6 },
  { name: "Ulun Danu Temple", image: img7 },
  { name: "MTV Ride", image: img8 },
  { name: "Rice Terrace", image: img9 },
];

const tabContents = [
  {
    title: "Package Overview",
    content:
      "Immerse yourself in the beauty of Bali with our 6-day holiday package. Spend 4 nights in vibrant Kuta, known for its golden beaches, lively nightlife, and cultural attractions. Then, retreat to Ubud for 2 nights, the heart of Bali’s serene landscapes, lush rice terraces, and artistic heritage. This package combines relaxation, adventure, and culture, offering an unforgettable experience in one of the world’s most captivating destinations. Perfect for families, couples, or solo travellers, your Bali escape awaits!",
  },
  { title: "Day Wise Itinerary", content: "Content for Day Wise Itinerary." },
  { title: "Inclusion/Exclusions", content: "Content for Inclusion/Exclusions." },
  { title: "Additional Info", content: "Content for Additional Info." },
];


export default function Thirdpage() {
  const tabs = ["Overview", "Day Wise Itinerary", "Inclusions", "Exclusions"];
  const [activeTab, setActiveTab] = useState(0);
  const data = [
    { name: "Artboard 1", imgUrl: trandingimg1 },
    { name: "Artboard 2", imgUrl: trandingimg2 },
    { name: "Artboard 3", imgUrl: trandingimg3 },
    { name: "Artboard 4", imgUrl: trandingimg4 },
    { name: "Artboard 5", imgUrl: trandingimg5 },
    { name: "Artboard 6", imgUrl: trandingimg6 },
  ];

  const imageUrls = [
    "https://media.easemytrip.com/media/Deal/DL638677841039765822/SightSeeing/SightSeeingf6yeeH.jpg",
    "https://media.easemytrip.com/media/Deal/DL638677841039765822/SightSeeing/SightSeeingf6yeeH.jpg",
    "https://media.easemytrip.com/media/Deal/DL638677841039765822/SightSeeing/SightSeeingf6yeeH.jpg",
    "https://media.easemytrip.com/media/Deal/DL638677841039765822/SightSeeing/SightSeeingf6yeeH.jpg",
  ];

  return (
    <>
      <SplitContainer>
        <LeftDiv>
          <Heading
            line1="Home > Holidays"
            line2="EMT Exclusive Bali Fixed Departure with Guided Tours"
            line3="6 Nights / 7 Days, 4N Kuta + 2N Ubud"
          />
          <SliderComponent images={imageUrls} />
          <PageWrapper>

            <PackageOverview
              title={tabContents[activeTab].title}
              content={tabContents[activeTab].content}
            />
            <br></br>
            <OverviewWrapper>
            <Title>Iternary</Title>
     <TravelItinerary />
            <Highlight />
            </OverviewWrapper>
          </PageWrapper>
          <DynamicSlider
            title="Things to do in"
            highlightedWord="Bali"
            destinations={ThingsToDoInBali}
          />

          {/* <PricingTables /> */}
          <TabbedTable />
          <TermsAndConditions />
          <InclusionsExclusions />
        </LeftDiv>
        <RightDiv>
          
        <PriceCard price={16999} emiPrice={3590} emiLink="/emi-options" />
        <PackageCard />
     
        <HelpCard />
        </RightDiv>
      </SplitContainer>
    </>
  );
}
