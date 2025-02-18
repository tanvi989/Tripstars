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
import Popup from "../../components/common/Popup";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <TrendingOffers />
      <ExploreDestinations />
      {/* <Loader /> */}
      <VideoTestimonials />
      <WhyTripstars />
      <ExploreEurope />
      <BudgetFriendly />
      <PartnersSection />
      {/* <MediaMentions /> */}
    </>
  );
}
