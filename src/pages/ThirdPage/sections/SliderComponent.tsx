import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const SliderWrapper = styled.div`
  width: 100%;
  height: 380px;
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 10px; /* Curved edges */
  overflow: hidden; /* Ensure content respects the border radius */
  background-color: #f8f8f8; /* Optional background color for slider wrapper */

  @media (max-width: 768px) {
    height: 250px; /* Adjust height for mobile */
  }

  .slick-slide img {
    border-radius: 15px; /* Curved edges for each slide */
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure images are properly scaled */
  }
`;

// TypeScript Props Interface
interface SliderComponentProps {
  images: string[]; // Array of image URLs
}

// Main Component
const SliderComponent: React.FC<SliderComponentProps> = ({ images }) => {
  const settings = {
    dots: true, // Show dots below the slider
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!images || images.length === 0) {
    return <p>No images to display.</p>; // Fallback if images array is empty
  }

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default SliderComponent;
