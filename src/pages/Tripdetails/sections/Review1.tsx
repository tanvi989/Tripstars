import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const reviews = [
  { name: "Ravinder Kaur", date: "8 December 2024", initials: "R", rating: 5, text: "I was very frustrated, stressed out, panicked, when I had an issue with the airline..." },
  { name: "John Doe", date: "15 November 2024", initials: "J", rating: 4, text: "The customer service was great, but I had to wait a little longer than expected..." },
  { name: "Maria Gonzalez", date: "22 October 2024", initials: "M", rating: 3, text: "The service was okay. I had higher expectations, but the staff was friendly..." },
  { name: "Steve Brown", date: "10 September 2024", initials: "S", rating: 5, text: "Outstanding service! They went above and beyond to make sure my problem was solved..." },
  { name: "Emily Johnson", date: "3 August 2024", initials: "E", rating: 2, text: "The process was complicated, and I had to call multiple times to get an answer..." },
];

const SliderContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  overflow: hidden;
  margin: auto;
  padding: 20px 0;
`;

const SliderWrapper = styled.div<{ index: number }>`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ index }) => `translateX(-${index * 100}%)`};
  will-change: transform;
`;

const ReviewCard = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 250px;
  flex: 0 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const ProfileInitial = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #6b6b6b;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleLogo = styled.img`
  margin-left: auto;
  width: 35px;
  height: auto;
`;

const ReviewDate = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
`;

const Stars = styled.div`
  color: #f4b400;
  font-size: 24px;
  margin: 0;
`;

const ReviewText = styled.p`
  font-size: 12px;
  color: #333;
  line-height: 1.4;
`;

const ReadMore = styled.span`
  font-size: 12px;
  color: gray;
  cursor: pointer;
  margin-top: 4px;
  text-decoration: underline;
  transition: color 0.3s ease;
  &:hover {
    color: #f4b400;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 50%;
  z-index: 10;
  &:hover {
    background: black;
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ReviewSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  let visibleCards = window.innerWidth >= 768 ? 5 : 1;
  const maxIndex = reviews.length - visibleCards;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
    }, 1000); // Slide every second
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const touchEndX = moveEvent.touches[0].clientX;
      if (touchEndX - touchStartX > 50) {
        prevSlide();
      } else if (touchStartX - touchEndX > 50) {
        nextSlide();
      }
      document.removeEventListener("touchmove", handleTouchMove);
    };

    document.addEventListener("touchmove", handleTouchMove);
  };

  return (
    <SliderContainer>
      <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
      <div
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        style={{ overflow: "hidden" }}
      >
        <SliderWrapper index={index}>
          {reviews.map((review, idx) => (
            <ReviewCard key={idx}>
              <ReviewHeader>
                <ProfileInitial>{review.initials}</ProfileInitial>
                <div>
                  <h4 style={{ margin: 0, fontSize: "17px" }}>{review.name}</h4>
                  <ReviewDate>{review.date}</ReviewDate>
                </div>
                <GoogleLogo
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  alt="Google"
                />
              </ReviewHeader>
              <Stars>{"★".repeat(review.rating)}</Stars>
              <ReviewText>{review.text}</ReviewText>
              <ReadMore>Read more</ReadMore>
            </ReviewCard>
          ))}
        </SliderWrapper>
      </div>
      <NextButton onClick={nextSlide}>&#10095;</NextButton>
    </SliderContainer>
  );
};

export default ReviewSlider;
