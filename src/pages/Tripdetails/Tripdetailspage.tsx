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
import ReviewSlider from "./sections/ReviewSlider";
import ChooseTravelStyle from "./sections/ChooseTravelStyle";
import TravelStyleCarousel from "./sections/TravelStyleCarousel";
import ExploreDestinations from "../Home/sections/ExploreDestinations";
import TrendingOffers2 from "../../components/TrendingOffers2";
import {Bali, similar, Vietnam, Thailand, Europe, Dubai, Australia , Baku, Hongkong, Japan, Malaysia,Maldives, Mauritius, Singapore, southAfrica, Turkey} from "../../components/data";
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

  const { thingsToDo,  banner } = locationData;

  return (
    <>
      <Ban2
        image={banner?.image}
        destination={banner?.title}
    
      />
      <DynamicSlider
        title={`Things to do in `}
        highlightedWord={banner?.title}
        destinations={thingsToDo}
      />
{location == "turkey" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Turkey} />: ""}
{location == "southAfrica" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={southAfrica} />: ""}
{location == "singapore" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Singapore} />: ""} 
 {location == "mauritius" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Mauritius} />: ""}     
{location == "malaysia" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Malaysia} />: ""}
      
{location == "maldives" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Maldives} />: ""}

{location == "japan" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Japan} />: ""}
{location == "hongkong" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Hongkong} />: ""}
{location == "baku" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Baku} />: ""}
      {location == "bali" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Bali} />: ""}
      {location == "vietnam" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Vietnam} />: ""}
      {location == "dubai" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Dubai} />: ""}
      {location == "europe" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Europe} />: ""}
      {location == "thailand" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Thailand} />: ""}
      {location == "australia" ? <TrendingOffers title={`Trending Offers in ${location}`} cards={Australia} />: ""}
      {/* <TrendingOffers title={`Trending Offers in ${location}`} data={trendingOffers}/> */}
      {/* <CherryBlossomsSection title={`Experience Best Selling Packages in ${location}`}images={cherryBlossoms}/> */}
      {/* <ChooseTravelStyle/> */}
      {/* <TrendingOffers title={`Trending Offers in ${location}`} cards={Bali} /> */}
      {/* <Loader /> */}
      {/* <Loader /> */}
      {/* <ExploreDestinations /> */}
      {/* <DestinationSlider/>
       */}
       <Choose_your />
      <ReviewSlider  />
      {/* <ReviewCard/> */}
      {/* <TravelStyleCarousel /> */}
      {/* <FAQ /> */}
      <TrendingOffers title="Similar packages" cards={similar}/>
    </>
  );
}
