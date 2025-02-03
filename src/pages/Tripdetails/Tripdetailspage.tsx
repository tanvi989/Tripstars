// src/components/Tripdetailspage.js
import { useParams } from "react-router-dom";
import DynamicSlider from "./sections/DynamicSlider";
import TrendingOffers from "./sections/TrendingOffers";
import CherryBlossomsSection from "../Tripdetails/sections/CherryBlossomsSection";
import Ban from "./sections/Ban";
import { destinationsData } from "./data";
import CardSection from "./sections/CardSection";
import ReviewSlider from "./sections/ReviewSlider";
import ChooseTravelStyle from "./sections/ChooseTravelStyle";
import TravelStyleCarousel from "./sections/TravelStyleCarousel";
import ExploreDestinations from "../Home/sections/ExploreDestinations";
import TrendingOffers2 from "../../components/TrendingOffers2";
import {Bali, similar, Vietnam, Thailand, Europe, Dubai} from "../../components/data";
import DestinationSlider from "./sections/DestinationSlider";

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
      <Ban
        image={banner?.image}
        title={banner?.title}
        description={banner?.description}
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
      <DestinationSlider/>
      <ReviewSlider  />
      {/* <ReviewCard/> */}
      {/* <TravelStyleCarousel /> */}
      <TrendingOffers title="Similar packages" cards={similar}/>
    </>
  );
}
