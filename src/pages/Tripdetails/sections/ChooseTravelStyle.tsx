import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #222;
  font-weight: bold;
`;

const SeeAllButton = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004999;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding:10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: #444;
  text-align: center;
  margin: 0.8rem 0;
`;

const travelStyles = [
  { title: "Honeymoon Trip", image: "https://images.pexels.com/photos/21787/pexels-photo.jpg" },
  { title: "Beach Holiday", image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg" },
  { title: "Family Vacation", image: "https://images.pexels.com/photos/5868486/pexels-photo-5868486.jpeg" },
  { title: "Adventure Trip", image: "https://images.pexels.com/photos/287398/pexels-photo-287398.jpeg" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ChooseTravelStyle: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Choose your travel style</Title>
        <SeeAllButton>See All</SeeAllButton>
      </Header>
      <SliderWrapper>
        <Slider {...sliderSettings}>
          {travelStyles.map((style, index) => (
            <Card key={index}>
              <CardImage src={style.image} alt={style.title} />
              <CardTitle>{style.title}</CardTitle>
            </Card>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default ChooseTravelStyle;
