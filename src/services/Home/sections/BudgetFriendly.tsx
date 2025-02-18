import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import Kashmir from "../../../assets/images/BudgetFriendly/Artboard 1.png";
import Kerala from "../../../assets/images/BudgetFriendly/Artboard 2.png";
import Andaman from "../../../assets/images/BudgetFriendly/Artboard 3.png";
import NorthEast from "../../../assets/images/BudgetFriendly/Artboard 4.png";
import Goa from "../../../assets/images/BudgetFriendly/Artboard 5.png";
import Ladakh from "../../../assets/images/BudgetFriendly/Artboard 6.png";
import Himachal from "../../../assets/images/BudgetFriendly/Artboard 7.png";
import Nepal from "../../../assets/images/BudgetFriendly/Artboard 8.png";
import Bhutan from "../../../assets/images/BudgetFriendly/Artboard 9.png";
import Nanital from "../../../assets/images/BudgetFriendly/Artboard 10.png";
import { useRef } from "react";
import { Navigation } from "swiper/modules";

const Container = styled.div`
  padding: 0 15rem;
  margin-top: 2rem;
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
  gap: 2rem;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fcfcfd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 1rem;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  /* width: 100%; */
  position: relative;
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

const cardsData = [
  {
    imgUrl: Kashmir,
    name: "Kashmir",
    url: "",
  },
  {
    imgUrl: Kerala,
    name: "Kerala",
    url: "",
  },
  {
    imgUrl: Andaman,
    name: "Andaman",
    url: "",
  },
  {
    imgUrl: NorthEast,
    name: "NorthEast",
    url: "",
  },
  {
    imgUrl: Goa,
    name: "Goa",
    url: "",
  },
  {
    imgUrl: Ladakh,
    name: "Ladakh",
    url: "",
  },
  {
    imgUrl: Himachal,
    name: "Himachal",
    url: "",
  },

  {
    imgUrl: Nepal,
    name: "Nepal",
    url: "",
  },
  {
    imgUrl: Bhutan,
    name: "Bhutan",
    url: "",
  },
  {
    imgUrl: Nanital,
    name: "Nanital",
    url: "",
  },
];

export default function BudgetFriendly() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Container>
      {/* <SectionTitle title="Budget-Friendly Options" /> */}
      <SectionTitle>
        <TitileHeading>Explore India</TitileHeading>
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
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.8}
        breakpoints={{
          1080: {
            slidesPerView: 4.9,
          },
          768: {
            slidesPerView: 3,
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
        <CardsWrapper>
          {cardsData.map((item, index) => (
            <SwiperSlide>
              <Card key={index}>
                <ImageWrapper>
                  <img src={item.imgUrl} alt="" />
                </ImageWrapper>
              </Card>
            </SwiperSlide>
          ))}
        </CardsWrapper>
      </Swiper>
    </Container>
  );
}
