// import Loader from "../../components/common/Loader";
import BudgetFriendly from "./sections/BudgetFriendly";
import ExploreDestinations from "./sections/ExploreDestinations";
import ExploreEurope from "./sections/ExploreEurope";
import HeroSection from "./sections/HeroSection";
import MediaMentions from "./sections/MediaMentions";
import PartnersSection from "./sections/PartnersSection";
import PopularDestinations from "./sections/PopularDestinations";
import TrendingOffers from "./sections/TrendingOffers";
import TrendingOffers22 from  "../../pages/Tripdetails/sections/TrendingOffers";
import VideoTestimonials from "./sections/VideoTestimonials";
import {similar} from "../../components/data";
import WhyTripstars from "./sections/WhyTripstars";
import NewComponent from "./sections/NewComponent";
import Popup from "../../components/common/Popup";
import ImageSlider from "./sections/ImageSlider";
import ResponsiveBanner from "./sections/ResponsiveBanner";
import CardSection from "./sections/CardSection";
import ExploreIndia from "./sections/ExploreIndia";
import SwipeableSlider from "./sections/SwipeableSlider";
import Banner from "./sections/Banner";
import BenefitsSection from "./sections/BenefitsSection";
import BudgetSection from "./sections/BudgetSection";
import ContactForm from "./sections/ContactForm";
import VideoThumbnail from "./sections/VideoThumbnail";
import BendingCarosual from "./sections/BendingCarosual";
import TrendingOffers2 from "./sections/TrandingOffers2";
import TravelSection from "./sections/TravelSection";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <SwipeableSlider/>
      <TrendingOffers title="Trending Offers"/>
      {/* <SwipeableSlider/> */}
     
      {/* <CardSection 
        title="Trending Offers"
      /> */}
      <ExploreDestinations />
      {/* <Loader /> */}

      <VideoTestimonials />
      <VideoThumbnail/>
      {/* <ImageSlider /> */}
    {/* <NewComponent /> */}
      <WhyTripstars />
      <ExploreEurope />
  
      {/* <TrendingOffers2 title="Explore India"/> */}
      <TrendingOffers22 title="Explore India" cards={similar}/>
      {/* <BudgetFriendly /> */}
      <PartnersSection />
      <BudgetSection/>
      <BenefitsSection/>
      {/* <Banner/>  */}
      <ContactForm/>
      <BendingCarosual />
      {/* <TravelSection /> */}
     {/* <ResponsiveBanner /> */}
      {/* <MediaMentions /> */}
    </>
  );
}
