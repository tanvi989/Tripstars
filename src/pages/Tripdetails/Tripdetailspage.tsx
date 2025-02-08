// src/components/Tripdetailspage.js
import { useParams } from "react-router-dom";
import DynamicSlider from "./sections/DynamicSlider";
import TrendingOffers from "./sections/TrendingOffers";
import CherryBlossomsSection from "../Tripdetails/sections/CherryBlossomsSection";
import Ban from "./sections/Ban";
import Ban2 from "./sections/Ban2";
import { destinationsData } from "./data";
import CardSection from "./sections/CardSection";
import FAQ from "./sections/FAQ";
import ReviewSlider from "./sections/Review1";
import ChooseTravelStyle from "./sections/ChooseTravelStyle";
import TravelStyleCarousel from "./sections/TravelStyleCarousel";
import ExploreDestinations from "../Home/sections/ExploreDestinations";
import TrendingOffers2 from "../../components/TrendingOffers2";
import {Bali, similar, Vietnam, Thailand, Europe, Dubai} from "../../components/data";
import DestinationSlider from "./sections/DestinationSlider";
import Choose_your from "./sections/Choose_your";

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

  const { thingsToDo, trendingOffers, cherryBlossoms, banner } = locationData;

  return (
    <>
      <Ban2
        image={banner?.image}
        destination={banner?.title}
    
      />
      <DynamicSlider
        title={`Things to do in `}
        highlightedWord={location}
        destinations={thingsToDo}
      />

      {location == "bali" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Bali} />: ""}
      {location == "vietnam" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Vietnam} />: ""}
      {location == "dubai" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Dubai} />: ""}
      {location == "europe" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Europe} />: ""}
      {location == "thailand" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Thailand} />: ""}
      
      {/* <TrendingOffers title={`Trending Offers in ${location}`} data={trendingOffers}/> */}
      {/* <CherryBlossomsSection title={`Experience Best Selling Packages in ${location}`}images={cherryBlossoms}/> */}
      {/* <ChooseTravelStyle/> */}
      {/* <TrendingOffers title={`Trending Offers in ${location}`} cards={Bali} /> */}
      {/* <Loader /> */}
      {/* <Loader /> */}
      {/* <ExploreDestinations /> */}
     {/* <DestinationSlider/> */}
     
       <Choose_your />
      {/* <ReviewSlider  /> */}
      {/* <ReviewCard/> */}
      {/* <TravelStyleCarousel /> */}

      {/* <ReviewSlider /> */}
      <TrendingOffers title="Similar packages" cards={similar}/>
            <FAQ />
    </>
  );
}
