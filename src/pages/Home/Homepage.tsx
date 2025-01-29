// import Loader from "../../components/common/Loader";
import BudgetFriendly from "./sections/BudgetFriendly";
import ExploreDestinations from "./sections/ExploreDestinations";
import ExploreEurope from "./sections/ExploreEurope";
import HeroSection from "./sections/HeroSection";
import MediaMentions from "./sections/MediaMentions";
import PartnersSection from "./sections/PartnersSection";
import PopularDestinations from "./sections/PopularDestinations";
import TrendingOffers from "./sections/TrendingOffers";
import VideoTestimonials from "./sections/VideoTestimonials";
import WhyTripstars from "./sections/WhyTripstars";
import NewComponent from "./sections/NewComponent";
import Popup from "../../components/common/Popup";
import ImageSlider from "./sections/ImageSlider";
import ResponsiveBanner from "./sections/ResponsiveBanner";
import CardSection from "./sections/CardSection";
import ExploreIndia from "./sections/ExploreIndia";
import SwipeableSlider from "./sections/SwipeableSlider";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
  
      <TrendingOffers title="Trending Offers"/>
      <SwipeableSlider/>
     
      {/* <CardSection 
        title="Trending Offers"
      /> */}
      <ExploreDestinations />
      {/* <Loader /> */}

      <VideoTestimonials />
      {/* <ImageSlider /> */}
    {/* <NewComponent /> */}
      <WhyTripstars />
      <ExploreEurope />
      <ExploreIndia title="Explore India"/>
      {/* <BudgetFriendly /> */}
      <PartnersSection />
     {/* <ResponsiveBanner /> */}
      {/* <MediaMentions /> */}
    </>
  );
}
