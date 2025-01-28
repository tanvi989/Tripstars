import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useSwipeable } from 'react-swipeable';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// TypeScript interfaces
interface ImageData {
  src: string;
  captionTitle: string;
  captionSub: string;
  price: string;
}

// Styled components
const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 40vh; // Set the height of the slider container
  max-width:70%;
  padding : 20px 0;
  overflow: hidden;
  margin: auto;
    @media (max-width: 768px) {
    max-width: 90%;
    height: 20vh ;
border-radius:20px;
  }
`;

const Slides = styled.div<{ index: number }>`
  display: flex;
  transform: ${props => `translateX(-${props.index * 100}%)`};
  transition: transform 0.5s ease-in-out;
`;
const Slide = styled.div`
  flex: 0 0 100%; // This ensures the slide only takes up exactly 100% of the flex container's width
  height: 300px; // Reduced height for each slide
  position: relative;
  overflow: hidden;



`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

  h2 {
    font-size: 1.5rem; /* Adjust the font size */
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 1.2rem; /* Adjust the font size */
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem; /* Adjust the font size */
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1rem; /* Smaller font size on mobile */
    }

    h1 {
      font-size: 0.8rem; /* Smaller font size on mobile */
    }

    p {
      font-size: 0.7rem; /* Smaller font size on mobile */
    }
  }
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
`;

const Dot = styled.span<{ active: boolean }>`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.6)')};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

// React component
const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images: ImageData[] = [

    
    { src: "https://images.emtcontent.com/holiday-img/home-img/egypt-bnnr.webp", captionTitle: "Discover", captionSub: "Beautiful Places of Egypt", price: "₹ 45990" },
    { src: "https://images.emtcontent.com/holiday-img/home-img/gems_jamaica.webp", captionTitle: "Discover", captionSub: "Beautiful Places of Egypt", price: "₹ 45990" },
    { src: "https://images.emtcontent.com/holiday-img/home-img/gems_fiji.webp", captionTitle: "Discover", captionSub: "Beautiful Places of Egypt", price: "₹ 45990" },
    { src: "https://images.emtcontent.com/holiday-img/home-img/egypt-bnnr.webp", captionTitle: "Explore", captionSub: "The Great Pyramids", price: "₹ 39990" },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide(prev => (prev + 1) % images.length),
    onSwipedRight: () => setCurrentSlide(prev => (prev - 1 + images.length) % images.length),
    
    trackMouse: true
  });

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide(prev => (prev + 1) % images.length), 5000); // Auto-advance slides every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <GlobalStyle />
      <Slider>
        <Slides index={currentSlide} {...handlers}>
          {images.map((img, index) => (
            <Slide key={index}>
              <Image src={img.src} alt={`Slide ${index + 1}`} />
              <Caption>
                <h2>{img.captionTitle}</h2>
                <h1>{img.captionSub}</h1>
                <p>{img.price}</p>
              </Caption>
            </Slide>
          ))}
        </Slides>
        <Navigation>
          {images.map((_, index) => (
            <Dot key={index} active={index === currentSlide} onClick={() => setCurrentSlide(index)} />
          ))}
        </Navigation>
      </Slider>
    </>
  );
};

export default ImageSlider;
