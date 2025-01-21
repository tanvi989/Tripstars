import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "../../../assets/images/WhyTripstars/15k Customers.png";
import Img2 from "../../../assets/images/WhyTripstars/Award.png";
import Img3 from "../../../assets/images/WhyTripstars/Customer service.png";
import Img4 from "../../../assets/images/WhyTripstars/Experience.png";
import Img5 from "../../../assets/images/WhyTripstars/Google Rating.png";

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
  width: 100%;
  display: flex;
  margin: 2rem 0;
  img {
    width: 100%;
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

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const data = [
  {
    imageUrl: Img1,
  },
  {
    imageUrl: Img2,
  },
  {
    imageUrl: Img3,
  },
  {
    imageUrl: Img4,
  },
  {
    imageUrl: Img5,
  },
];

export default function WhyTripstars() {
  return (
    <Container>
      <SectionTitle>
        <TitileHeading>Why Tripstars?</TitileHeading>
      </SectionTitle>
      <CardsWrapper>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            1080: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <ImageWrapper>
                <img src={item.imageUrl} alt="" />
              </ImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsWrapper>
    </Container>
  );
}
