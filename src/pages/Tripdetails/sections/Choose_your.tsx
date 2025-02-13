import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

// Importing images
import family from "../../../assets/travelstyle/family.jpg";
import couple from "../../../assets/travelstyle/couple.jpg";
import group from "../../../assets/travelstyle/group.jpg";
import honeymoon from "../../../assets/travelstyle/honeymoon.jpg";
import adventure from "../../../assets/travelstyle/adventure.jpg";
import beach from "../../../assets/travelstyle/beach.jpg";
// Importing golden icons
import familyIcon from "../../../assets/icons/family.png";
import coupleIcon from "../../../assets/icons/couple.png";
import groupIcon from "../../../assets/icons/group.png";
import honeymoonIcon from "../../../assets/icons/honeymoon.png";
import adventureIcon from "../../../assets/icons/adventure.png";
import beachIcon from "../../../assets/icons/beach.png";

// Styled components
const Container = styled.div`
  padding: 0 15rem;
  text-align: center;

  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

// Title Wrapper
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

// Styled "Travel Style" with gold linear gradient and cursive font
const TravelStyleText = styled.span`
  font-family: "Dancing Script", cursive; /* Ensure this font is available */
  background: linear-gradient(to right, #FFD700, #FFA500); /* Gold gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
`;

// Cards Wrapper
const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

// Swiper Card Styling
const Card = styled.div`
  height: 100%;
  cursor: pointer;
  position: relative;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

// Image Wrapper
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Dark gradient overlay
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
 background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), transparent);
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

// Icon styling
const Icon = styled.img`
  width: 46px !important;
  height: 46px !important;
`;

// Category Name - Removed underline
const CategoryName = styled.span`
  color: white;
  font-family:'Dancing Script';
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 10px;
`;

// Type definition for destinations
type Destination = {
  name: string;
  imgUrl: string;
  icon: string;
};

// Adding icons to destinations
const popularDestinationsData: Destination[] = [
  { name: "Family", imgUrl: family, icon: familyIcon },
 
  { name: "Group", imgUrl: group, icon: groupIcon },
  { name: "Honeymoon", imgUrl: honeymoon, icon: honeymoonIcon },
  { name: "Adventure", imgUrl: adventure, icon: adventureIcon },
  { name: "Beach", imgUrl: beach, icon: beachIcon },
  { name: "Couple", imgUrl: couple, icon: coupleIcon },
];

export default function ChooseYour() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const handleRedirect = (destination: string) => {
    navigate(`/${destination.toLowerCase()}`);
  };

  return (
    <Container>
      {/* Title Section */}
      <Title>
        Choose Your <TravelStyleText>Travel Style</TravelStyleText>
      </Title>

      {/* Travel Cards */}
      <CardsWrapper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.8}
          breakpoints={{
            1080: { slidesPerView: 4.8 },
            768: { slidesPerView: 4 },
            400: { slidesPerView: 2 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {popularDestinationsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card onClick={() => handleRedirect(item.name)}>
                <ImageWrapper>
                  <img src={item.imgUrl} alt={item.name} />
                  <Overlay>
                    <Icon src={item.icon} alt={`${item.name} icon`} />
                    <CategoryName>{item.name}</CategoryName>
                  </Overlay>
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
}
