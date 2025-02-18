import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react"; // Import React explicitly
import Logo1 from "../../../assets/images/logo/brandLogos/Singapore.png";
import Logo2 from "../../../assets/images/logo/brandLogos/Untitled design (14).png";
import Logo3 from "../../../assets/images/logo/brandLogos/Untitled design (16).png";
import Logo4 from "../../../assets/images/logo/brandLogos/Untitled design (17).png";
import Logo5 from "../../../assets/images/logo/brandLogos/Untitled design (18).png";
import Logo6 from "../../../assets/images/logo/brandLogos/Untitled design (19).png";
import Logo7 from "../../../assets/images/logo/brandLogos/Untitled design (20).png";
import Logo8 from "../../../assets/images/logo/brandLogos/Untitled design (21).png";
import { Autoplay } from "swiper/modules";

const Container = styled.div`
  padding: 0 15rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
`;

const LogoWrapper = styled.div`
  margin: 2rem 0;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1340px) {
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

const Logo = styled.div`
  /* width: 10rem;
  height: 10rem; */

  .partner_img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    object-fit: contain;
  }
`;

const logosData = [
  {
    name: "",
    imgUrl: Logo1,
  },
  {
    name: "",
    imgUrl: Logo2,
  },
  {
    name: "",
    imgUrl: Logo3,
  },
  {
    name: "",
    imgUrl: Logo4,
  },
  {
    name: "",
    imgUrl: Logo5,
  },
  {
    name: "",
    imgUrl: Logo6,
  },
  {
    name: "",
    imgUrl: Logo7,
  },
  {
    name: "",
    imgUrl: Logo8,
  },
];

export default function PartnersSection() {
  return (
    <Container>
      {/* <SectionTitle title="Tourism Board Partners" /> */}
      <SectionTitle>
        <TitileHeading>Tourism Board Partners</TitileHeading>
      </SectionTitle>
      <LogoWrapper>
        <Swiper
          loop
          speed={1200}
          autoplay={{ delay: 1800 }}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          direction="horizontal"
          breakpoints={{
            1080: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {logosData.map((item, index) => (
            <SwiperSlide key={index}>
              <Logo>
                <img className="partner_img" src={item.imgUrl} alt="" />
              </Logo>
            </SwiperSlide>
          ))}
        </Swiper>
      </LogoWrapper>
    </Container>
  );
}
