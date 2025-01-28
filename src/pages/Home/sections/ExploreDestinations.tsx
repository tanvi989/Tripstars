import { useNavigate } from "react-router-dom"; 
// Import the navigation hook
import React from "react"; // Import React explicitly
import styled from "styled-components";
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding-top: 1rem;
  }
`;

const MobileCard = styled.div`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.7rem;
    overflow: hidden;
  }
`;

const MobileOverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const cards = [
  {
    image: "https://www.unimoni.in/blog/wp-content/uploads/2023/09/Eiffel-Tower-Europe.webp",
    location: "Europe",
    price: "₹ 89,999/-",
    url: "/europe",
  },
  {
    image: "https://www.shutterstock.com/image-photo/sydney-australia-october-20-2023-600nw-2465212583.jpg",
    location: "Australia",
    price: "₹ 2,49,999/-",
    url: "/australia",
  },
  {
    image: "https://www.unimoni.in/blog/wp-content/uploads/2023/09/Eiffel-Tower-Europe.webp",
    location: "Maldives",
    price: "₹ 89,999/-",
    url: "/maldives",
  },
  {
    image: "https://www.shutterstock.com/image-photo/sydney-australia-october-20-2023-600nw-2465212583.jpg",
    location: "New Zealand",
    price: "₹ 2,49,999/-",
    url: "/new-zealand",
  },
  {
    image: "https://www.shutterstock.com/image-photo/sydney-australia-october-20-2023-600nw-2465212583.jpg",
    location: "Japan",
    price: "₹ 89,999/-",
    url: "/japan",
  },
];

export default function ExploreDestinations() {
  const navigate = useNavigate();

  const handleCardClick = (url: string) => {
    navigate(url); // Navigate to the destination URL
  };
  
  return (
    <Container>
      <TitleContainer>
        <Title>
          <p>Explore Destinations</p>
        </Title>
      </TitleContainer>
      <MainContent>
        <UpperContent>
          <ImageWrapper onClick={() => handleCardClick(cards[0].url)}>
            <img src={cards[0].image} alt={cards[0].location} />
            <OverlayText>
              {cards[0].location}
              <br />
              {cards[0].price}
            </OverlayText>
          </ImageWrapper>
          <ImageWrapper onClick={() => handleCardClick(cards[1].url)}>
            <img src={cards[1].image} alt={cards[1].location} />
            <OverlayText>
              {cards[1].location}
              <br />
              {cards[1].price}
            </OverlayText>
          </ImageWrapper>
        </UpperContent>
        <BottomContent>
          {cards.slice(2).map((card, index) => (
            <ImageWrapper key={index} onClick={() => handleCardClick(card.url)}>
              <img src={card.image} alt={card.location} />
              <OverlayText>
                {card.location}
                <br />
                {card.price}
              </OverlayText>
            </ImageWrapper>
          ))}
        </BottomContent>
      </MainContent>
      <MobileWrapper>
        <Swiper slidesPerView={1} slidesPerGroupSkip={1} spaceBetween={20}>
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <MobileCard onClick={() => handleCardClick(item.url)}>
                <img src={item.image} alt={item.location} />
                <MobileOverlayText>
                  {item.location}
                  <br />
                  {item.price}
                </MobileOverlayText>
              </MobileCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileWrapper>
    </Container>
  );
}
