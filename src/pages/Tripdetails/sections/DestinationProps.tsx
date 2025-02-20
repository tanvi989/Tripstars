import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

const Container = styled.div`
  padding: 0 15rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem  1rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  height: 100%; /* Ensure it takes the full height */
  cursor: pointer;
  display: flex;
  flex-direction: column; /* Aligns image and text */
  justify-content: space-between; /* Ensures text doesn’t stretch the card */
`;


const ImageWrapper = styled.div`
  width: 100%;
  height: 100%; /* Ensure it fully fills */
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex; /* Ensures image stretches properly */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures it fills without distortion */
  }
`;


const NameWrapper = styled.div`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #333;
  text-transform: capitalize;
  white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
`;
const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {  // Adjust the breakpoint as needed
    padding-top: 0;
    margin-top: 0;
  }
`;


const TitleHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const HighlightedWord = styled.span`
  color:gold; /* Highlight color */
  font-weight: 700;
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
    background: white;
    &:hover {
      background: black;
      svg path {
        fill: white;
      }
    }
    svg {
      width: 1rem;
      height: 1rem;
      path {
        fill: black;
      }
    }
  }
`;

type DestinationProps = {
  title: string;
  highlightWord: string;
  thingsToDo: { name: string; image: string }[];
};

export default function PopularDestinations({ title, highlightWord, thingsToDo }: DestinationProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const handleRedirect = (destination: string) => {
    navigate(`/${destination.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <Container>
      <SectionTitle>
        <TitleHeading>
          {title} <HighlightedWord>{highlightWord}</HighlightedWord>
        </TitleHeading>
        <NavIcons>
          {/* <button ref={prevRef}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s-12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
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
          </button> */}
        </NavIcons>
      </SectionTitle>
      <CardsWrapper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2.2}
          breakpoints={{
            1080: { slidesPerView: 6 },
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
          {thingsToDo.map((item, index) => (
            <SwiperSlide key={index}>
              <Card onClick={() => handleRedirect(item.name)}>
                <ImageWrapper>
                  <img src={item.image} alt={item.name} />
                </ImageWrapper>
                <NameWrapper>{item.name}</NameWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
}
