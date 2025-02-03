import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";


const Container = styled.div`
position: relative;
overflow: hidden;
margin: 0 15rem;
@media (max-width: 1340px) {
  margin: 0 5rem;
}
@media (max-width: 1080px) {
  margin: 0 3rem;
}
@media (max-width: 768px) {
  margin: 0 1rem;
}
`;

// Styled Components
const SliderContainer = styled.div`
  background: linear-gradient(to bottom, #ffd700, #b8860b); /* Gold Gradient */
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const StyledSwiper = styled(Swiper)`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const NavigationButton = styled.div`
  color: white;
`;


const DestinationSlider: React.FC = () => {
  return (
    <Container>
    <SliderContainer>
      <Title>Choose your travel style</Title>

      <StyledSwiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
      >
        <Slide>
          <SlideImage
            src="https://www.tripzygo.in/images/interest/Family.jpg"
            alt="Singapore"
          />
        </Slide>
        <Slide>
          <SlideImage
            src="https://www.tripzygo.in/images/interest/Couple.jpg"
            alt="Dubai"
          />
        </Slide>
        <Slide>
          <SlideImage
            src="https://www.tripzygo.in/images/interest/Group.jpg"
            alt="Maldives"
          />
        </Slide>
        <Slide>
          <SlideImage
            src="https://www.tripzygo.in/images/interest/Honeymoon.jpg"
            alt="Thailand"
          />
        </Slide>
      </StyledSwiper>
    </SliderContainer>
    </Container>
  );
};

export default DestinationSlider;