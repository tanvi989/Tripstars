import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const EuropeSliderWrapper = styled.div`
  max-width: 1000px; /* Make the box wider for Explore Europe */
  margin: 20px auto; /* Center the box horizontally */
  padding: 10px; /* Add some padding for aesthetics */
  border-radius: 8px; /* Rounded corners for the box */
`;

const CircularImage = styled.img`
  width: 80px; /* Adjust size for close spacing */
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px;
   @media (max-width: 480px) {
    width: 66px; /* Adjust for mobile */
    height: 65px;
  }
`;

const DestinationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 5px; /* Adjust spacing between cards */
`;

const DestinationName = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-top: 5px;
   @media (max-width: 480px) {
    font-size: 8px; /* Adjust font size for mobile */
  }
`;

const ExploreTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin: 30px 0;

    span {
    color: gold; /* Highlight Bali in gold */
    font-weight: bold; /* Optional: Make it bold */
  }
`;

const ExploreEuropeSlider: React.FC = () => {
  const europeSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9, // Number of images visible at once
    slidesToScroll: 1, // Smooth scroll per card
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile landscape
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust for small screens
        settings: {
          slidesToShow: 5, // Show 5 countries on mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const europeDestinations = [
    { name: "France", image: "https://images.pickyourtrail.com/france_min_3510647d1e.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "United Kingdom", image: "https://images.pickyourtrail.com/uk_min_32ffe790a9.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "Turkey", image: "https://images.pickyourtrail.com/turkey_min_2529e81509.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "Spain", image: "https://images.pickyourtrail.com/spain_min_b811280a6a.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "Austria", image: "https://images.pickyourtrail.com/austria_min_3bcfd0c970.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "Finland", image: "https://images.pickyourtrail.com/finland_min_6b2b83ba7b.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "Norway", image: "https://images.pickyourtrail.com/norway_min_b6c1dbb1da.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "Italy", image: "https://images.pickyourtrail.com/italy_min_6b0dbc2ad0.png?w=99&h=99&crop=fit&dpr=2&q=20" },
    { name: "Switzerland", image: "https://images.pickyourtrail.com/switzerland_min_523a70365c.png?w=99&h=99&crop=fit&dpr=2&q=20" },
  ];

  return (
    <>
      <ExploreTitle> Things to do in <span>Bali</span></ExploreTitle>
      <EuropeSliderWrapper>
        <Slider {...europeSliderSettings}>
          {europeDestinations.map((destination, index) => (
            <DestinationCard key={index}>
              <CircularImage src={destination.image} alt={destination.name} />
              <DestinationName>{destination.name}</DestinationName>
            </DestinationCard>
          ))}
        </Slider>
      </EuropeSliderWrapper>
    </>
  );
};

export default ExploreEuropeSlider;
