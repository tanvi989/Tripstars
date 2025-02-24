import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

// Import your images
import Australia from "../../../assets/PopularDestination/Australia.webp";
import Bali from "../../../assets/PopularDestination/Bali.webp";
import Dubai from "../../../assets/PopularDestination/Dubai.webp";
import Europe from "../../../assets/PopularDestination/Europe.webp";
import HongKong from "../../../assets/PopularDestination/Hong kong.webp";
import Malaysia from "../../../assets/PopularDestination/Malaysia.webp";
import Thailand from "../../../assets/PopularDestination/Thailand.webp";
import Vietnam from "../../../assets/PopularDestination/Vietnam.webp";
import Singapore from "../../../assets/PopularDestination/Singapore.webp";

// Styled components
const Container = styled.div`
  padding: 0 15rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  height: 100%;
  cursor: pointer; /* Make the cards clickable */
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 1340px) {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 2 rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
`;

const TitileHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 1080px) {
    font-size: 2.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 0.8rem;
      path {
        fill: #000;
      }
    }
  }
`;

// Type definition for destinations
type Destination = {
  name: string;
  imgUrl: string;
};

// Destination data
const popularDestinationsData: Destination[] = [
  { name: "Malaysia", imgUrl: Malaysia },
  { name: "Thailand", imgUrl: Thailand },
  { name: "Vietnam", imgUrl: Vietnam },
  { name: "Australia", imgUrl: Australia },
  { name: "Bali", imgUrl: Bali },
  { name: "Dubai", imgUrl: Dubai },
  { name: "Europe", imgUrl: Europe },
  { name: "HongKong", imgUrl: HongKong },
  { name: "Singapore", imgUrl: Singapore },
];

export default function PopularDestinations() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const handleRedirect = (destination: string) => {
    console.log(`Navigating to: /${destination.toLowerCase()}`);
    navigate(`/${destination.toLowerCase()}`);
  };
  

  return (
    <Container>
      <SectionTitle>
        <TitileHeading>Popular Destinations</TitileHeading>
        <NavIcons>
          <button ref={prevRef}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
            </svg>
          </button>
          <button ref={nextRef}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg>
          </button>
        </NavIcons>
      </SectionTitle>
      <CardsWrapper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.8}
          breakpoints={{
            1080: {
              slidesPerView: 4.8,
            },
            768: {
              slidesPerView: 4,
            },
            400: {
              slidesPerView: 2,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
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
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
}
