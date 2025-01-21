import styled from "styled-components";
import homeBg from "../../../assets/images/backgrounds/homePage-bg.jpg";

import Europe from "../../../assets/images/ExploreDestinations/Europe 2.jpg";
import Australia from "../../../assets/images/ExploreDestinations/Australia.jpg";
import Maldives from "../../../assets/images/ExploreDestinations/Maldives 2.jpg";
import NewZealand from "../../../assets/images/ExploreDestinations/New zealand.jpg";
import Japan from "../../../assets/images/ExploreDestinations/Japan.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

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

// const RightBtn = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: end;
//   gap: 1rem;
//   @media (max-width: 768px) {
//     justify-content: center;
//     flex-wrap: wrap;
//   }
// `;

const TitleContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    padding-top: 2rem;
    p {
      font-size: 1.6rem;
    }
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// const ExploreButtons = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     justify-content: center;
//     flex-wrap: wrap;
//   }

//   button {
//     padding: 0.6rem 1rem;
//     border-radius: 2rem;
//     border: none;
//     background-color: white;
//     color: black;
//   }

//   &:first-of-type button {
//     background-color: black;
//     color: white;
//   }
// `;

// const LeftStar = styled.div`
//   padding-bottom: 1rem;
//   @media (max-width: 768px) {
//     text-align: center;
//   }
// `;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  gap: 0.7rem;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const UpperContent = styled.div`
  width: 100%;
  gap: 0.7rem;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BottomContent = styled.div`
  width: 100%;
  gap: 0.7rem;
  display: flex;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 70%;
  background-color: #fff;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: none;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  width: 40%;
  background-color: #fff;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    /* margin-top: 1rem; */
  }
`;

const SingleContent = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: none;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileCard = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.7rem;
    overflow: hidden;
  }
`;

const cards = [
  {
    image: Europe,
    location: "Europe",
  },
  {
    image: Australia,
    location: "Australia",
  },
  {
    image: Maldives,
    location: "Maldives 2",
  },
  {
    image: NewZealand,
    location: "New zealand",
  },
  {
    image: Japan,
    location: "Japan",
  },
];

const mobileCards = [
  {
    image: Australia,
    location: "Australia",
  },
  {
    image: Maldives,
    location: "Maldives 2",
  },
  {
    image: NewZealand,
    location: "New zealand",
  },
  {
    image: Japan,
    location: "Japan",
  },
];

export default function ExploreDestinations() {
  return (
    <Container>
      <TitleContainer>
        {" "}
        <Title>
          {" "}
          <p>Explore Destinations</p>
        </Title>
      </TitleContainer>
      {/* <RightBtn>
        <ExploreButtons>
          <button>Region</button>
        </ExploreButtons>
        <ExploreButtons>
          <button>Theme</button>
        </ExploreButtons>
      </RightBtn> */}
      {/* <LeftStar>
        <p>4.5 (256 reviews)</p>
      </LeftStar> */}

      <MainContent>
        <UpperContent>
          <LeftContent>
            <img src={cards[0].image} alt={cards[0].location} />
          </LeftContent>
          <RightContent>
            <img src={cards[1].image} alt={cards[1].location} />
          </RightContent>
        </UpperContent>
        <BottomContent>
          <SingleContent>
            <img src={cards[2].image} alt={cards[2].location} />
          </SingleContent>
          <SingleContent>
            <img src={cards[3].image} alt={cards[3].location} />
          </SingleContent>
          <SingleContent>
            <img src={cards[4].image} alt={cards[4].location} />
          </SingleContent>
        </BottomContent>
      </MainContent>

      <MobileWrapper>
        <Swiper slidesPerView={1} slidesPerGroupSkip={1} spaceBetween={20}>
          {mobileCards.map((item, index) => (
            <SwiperSlide key={index}>
              <MobileCard>
                <img src={item.image} alt="" />
              </MobileCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileWrapper>
    </Container>
  );
}
