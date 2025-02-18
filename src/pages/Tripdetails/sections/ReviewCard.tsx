import React, { useRef, useState } from "react";
import styled from "styled-components";

// Styled Components
const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const SliderWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.translateX}px);
`;

const Slide = styled.div`
  min-width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const ReviewContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;

  svg {
    width: 24px;
    height: 24px;
    fill: #ffc107;

    &:nth-child(n + 5) {
      fill: #ccc;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  gap: 10px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #555;
  }

  .details {
    text-align: left;

    h3 {
      margin: 0;
      font-size: 1rem;
      color: #222;
    }

    span {
      font-size: 0.85rem;
      color: #888;
    }
  }
`;

// Star Icon Component
const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.793 1.564 8.307L12 18.897l-7.5 4.512 1.564-8.307-6.064-5.793 8.332-1.151L12 .587z" />
  </svg>
);

// Review Card Component
const ReviewCard: React.FC<{ review: string; name: string; date: string }> = ({
  review,
  name,
  date,
}) => (
  <ReviewContainer>
    <Stars>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <StarIcon key={index} />
        ))}
    </Stars>
    <p>"{review}"</p>
    <span>{date}</span>
    <User>
      <div className="avatar">{name.charAt(0)}</div>
      <div className="details">
        <h3>{name}</h3>
      </div>
    </User>
  </ReviewContainer>
);

// Main Slider Component
const ReviewSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const startX = useRef(0);

  const reviews = [
    { review: "ShudipG is best. Thanks buddy!", name: "Jasminder Sohal", date: "10 November 2024" },
    { review: "Excellent service and support!", name: "Alex Johnson", date: "5 January 2025" },
    { review: "Truly outstanding experience!", name: "Priya Mehta", date: "22 December 2024" },
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchMoveX = e.touches[0].clientX;
    const deltaX = touchMoveX - startX.current;
    setTranslateX(-currentIndex * window.innerWidth + deltaX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - startX.current;

    if (deltaX > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (deltaX < -50 && currentIndex < reviews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    setTranslateX(-currentIndex * window.innerWidth);
  };

  return (
    <SliderContainer>
      <SliderWrapper
        ref={sliderRef}
        translateX={translateX}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {reviews.map((review, index) => (
          <Slide key={index}>
            <ReviewCard {...review} />
          </Slide>
        ))}
      </SliderWrapper>
    </SliderContainer>
  );
};

export default ReviewSlider;
