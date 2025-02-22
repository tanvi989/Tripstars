import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Provided Gallery Images
const galleryImages = [
  "https://wanderon.in/_next/image?url=https%3A%2F%2Fimages.wanderon.in%2Fhoneymoon-pic-1&w=1920&q=75",
  "https://wanderon.in/_next/image?url=https%3A%2F%2Fimages.wanderon.in%2Fhoneymoon-pic-4&w=1920&q=75",
  "https://wanderon.in/_next/image?url=https%3A%2F%2Fimages.wanderon.in%2Fhoneymoon-pic-2&w=1920&q=75",
  "https://wanderon.in/_next/image?url=https%3A%2F%2Fimages.wanderon.in%2Fhoneymoon-pic-3&w=1920&q=75",
  "https://wanderon.in/_next/image?url=https%3A%2F%2Fimages.wanderon.in%2Fhoneymoon-pic-5&w=1920&q=75",
];

// Styled Components
const SectionWrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #064663;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #0288d1;
  margin-bottom: 20px;
  font-weight: 500;
`;

const TitleUnderline = styled.div`
  width: 50px;
  height: 4px;
  background-color: #fdd835;
  margin: 0 auto 30px;
`;

const DesktopGallery = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const SmallImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

// **FIXED: Mobile Slider with Consistent Height**
const MobileSlider = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 20px;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImage = styled.img`
  width: 100%;
  max-height: 280px; /* Set a max height */
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  aspect-ratio: 16/9; /* Enforces uniform size */
`;

const Gallery: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>Gallery</Title>
      <Subtitle>Best of our “Kodak” Moments!</Subtitle>
      <TitleUnderline />

      {/* Desktop Grid Layout */}
      <DesktopGallery>
        <LargeImage src={galleryImages[0]} alt="Main Gallery Image" />
        <SmallImagesGrid>
          {galleryImages.slice(1).map((image, index) => (
            <SmallImage key={index} src={image} alt={`Gallery ${index + 1}`} />
          ))}
        </SmallImagesGrid>
      </DesktopGallery>

      {/* Mobile Touch Slider - Fixed Heights */}
      <MobileSlider>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <SliderWrapper>
                <SliderImage src={image} alt={`Gallery ${index + 1}`} />
              </SliderWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileSlider>
    </SectionWrapper>
  );
};

export default Gallery;
