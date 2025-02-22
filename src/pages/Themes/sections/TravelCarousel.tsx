import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Styled Components
const Section = styled.div`
  background: #fff8f0;
  padding: 50px 0;
  text-align: center;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  position: relative;
  padding: 0 15rem;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem; /* Reduce padding for mobile */
  }
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 350px; /* Default width */
  height: 450px; /* Default height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 260px; /* Reduced width for mobile */
    height: 380px; /* Reduced height for mobile */
  }
`;

const PackageImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const PackageDetails = styled.div`
  padding: 15px;
  flex-grow: 1;
`;

const Tag = styled.span`
  background: gold;
  color: black;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 14px;
  color: #555;
`;

const ViewDetailsButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0 0 10px 10px;

  &:hover {
    background: #ff4f4f;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: #ffdfdf;
  }

  @media (max-width: 768px) {
    display: none; /* Hide navigation buttons on mobile */
  }
`;

const PrevButton = styled(NavButton)`
  left: 5%;
`;

const NextButton = styled(NavButton)`
  right: 5%;
`;

const travelPackages = [
  {
    image: "http://images.wanderon.in/gallery/new/2024/12/16/honeymoon-tour-to-bali-7n-8d-1.avif",
    title: "Dreamy Honeymoon Tour Package to Bali",
    duration: "5N/6D",
    location: "Denpasar Airport - Denpasar Airport",
  },
  {
    image: "http://images.wanderon.in/gallery/new/2024/12/16/honeymoon-tour-to-bali-7n-8d-1.avif",
    title: "Romantic Bali Tour Package with Nusa Penida Island",
    duration: "6N/7D",
    location: "Denpasar Airport - Denpasar Airport",
  },
  {
    image: "http://images.wanderon.in/gallery/new/2024/12/16/honeymoon-tour-to-bali-7n-8d-1.avif",
    title: "Romantic Escapade To The Tropical Paradise",
    duration: "7N/8D",
    location: "Denpasar Airport - Denpasar Airport",
  },
];

const TravelCarousel = () => {
  return (
    <Section>
      <Heading>Bali Honeymoon Packages</Heading>
      <CarouselContainer>
        <Swiper
          modules={[Navigation]}
          spaceBetween={15} // Proper spacing to avoid overlap
          slidesPerView={1.2} // Show 1.2 cards on mobile with proper spacing
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 }, // More spacing on tablets
            1024: { slidesPerView: 3, spaceBetween: 40 }, // More spacing on desktop
          }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        >
          {travelPackages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <PackageCard>
                <PackageImage src={pkg.image} alt={pkg.title} />
                <PackageDetails>
                  <Tag>Customised</Tag>
                  <Title>{pkg.title}</Title>
                  <Info>📅 {pkg.duration}</Info>
                  <Info>📍 {pkg.location}</Info>
                </PackageDetails>
                <ViewDetailsButton>View Details</ViewDetailsButton>
              </PackageCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <PrevButton className="prev-btn">
          <FaArrowLeft />
        </PrevButton>
        <NextButton className="next-btn">
          <FaArrowRight />
        </NextButton>
      </CarouselContainer>
    </Section>
  );
};

export default TravelCarousel;
