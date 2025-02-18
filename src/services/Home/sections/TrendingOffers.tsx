import styled from "styled-components";
// import Title from "../../../components/common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import Australia from "../../../assets/images/TrendingOffers/Artboard 1.png";
import Bali from "../../../assets/images/TrendingOffers/Artboard 2.png";
import Dubai from "../../../assets/images/TrendingOffers/Artboard 3.png";
import Europe from "../../../assets/images/TrendingOffers/Artboard 4.png";
import HongKong from "../../../assets/images/TrendingOffers/Artboard 5.png";
import Mauritius from "../../../assets/images/TrendingOffers/Artboard 6.png";
import NewZealand from "../../../assets/images/TrendingOffers/Artboard 7.png";
import Turkey from "../../../assets/images/TrendingOffers/Artboard 9.png";
import Thailand from "../../../assets/images/TrendingOffers/Artboard 8.png";
import Vietnam from "../../../assets/images/TrendingOffers/Artboard 10.png";
import { useRef } from "react";
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
    padding: 0 1rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

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
  @media (max-width: 1340px) {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
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
  .left_btn,
  button {
    cursor: pointer;
    border: 1px solid #000;
    /* background-color: #000; */
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

const data = [
  {
    name: "Australia",
    imgUrl: Australia,
  },
  {
    name: "Bali",
    imgUrl: Bali,
  },
  {
    name: "Dubai",
    imgUrl: Dubai,
  },
  {
    name: "Europe",
    imgUrl: Europe,
  },
  {
    name: "HongKong",
    imgUrl: HongKong,
  },
  {
    name: "Mauritius",
    imgUrl: Mauritius,
  },
  {
    name: "NewZealand",
    imgUrl: NewZealand,
  },
  {
    name: "Thailand",
    imgUrl: Thailand,
  },
  {
    name: "Turkey",
    imgUrl: Turkey,
  },
  {
    name: "Vietnam",
    imgUrl: Vietnam,
  },
];

export default function TrendingOffers() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Container>
      {/* <Title title="Trending Offers" /> */}

      <SectionTitle>
        <TitileHeading>Trending Offers</TitileHeading>
        <NavIcons>
          <button ref={prevRef}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
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
              stroke-width="0"
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
              slidesPerView: 2.8,
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
          {data.map((item, index) => (
            <SwiperSlide>
              <Card key={index}>
                <ImageWrapper>
                  <img src={item.imgUrl} alt="" />
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
}
