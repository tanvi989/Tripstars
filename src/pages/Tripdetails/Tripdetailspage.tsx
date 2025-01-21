// src/components/Tripdetailspage.js

import HeroSection2 from "./sections/HeroSection2";
import { useParams } from "react-router-dom"; 
import DynamicSlider from "./sections/DynamicSlider";
import TrendingOffers from "../Tripdetails/sections/TrandingOffers";
import CherryBlossomsSection from "../Tripdetails/sections/CherryBlossomsSection";
import Ban from "./sections/Ban";
import { destinationsData } from './data'



// Define a union type for location keys
type LocationKey = keyof typeof destinationsData;
export default function Tripdetailspage() {
  // const location = "Bali"; // Set to "Bali" for now
  // const location = "dubai"; // Set to "Bali" for now
  // const location = "singapore";
  // const location = "thailand";
  const { location } = useParams<{ location: string }>();

  // Narrow the type of location to a valid key or undefined
  const validLocation = location as LocationKey;

  const locationData = destinationsData[validLocation];
  // const locationData = destinationsData[location];

  if (!locationData) {
    return <p>No data available for this location.</p>;
  }

  const { thingsToDo, trendingOffers, cherryBlossoms,banner } = locationData;

  return (
    <>
       <Ban
        image={banner?.image}
        title={banner?.title}
        description={banner?.description}
      />
      <DynamicSlider
        title={`Things to do in ${location}`}
        highlightedWord={location}
        destinations={thingsToDo}
      />
      <TrendingOffers
        title={`Trending Offers in ${location}`}
        data={trendingOffers}
      />
      <CherryBlossomsSection
        title={`Experience Best Selling Packages in ${location}`}
        images={cherryBlossoms}
      />
    </>
  );
}
