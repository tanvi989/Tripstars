import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1600px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  border-right: 1px solid #ddd;
  height: 300px;
  gap: 16px; /* Even spacing between elements */

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      font-size: 28px;
      color: #f4b400;
    }

    .half-star {
      font-size: 28px;
      color: #f4b400;
      position: relative;
    }

    .half-star:after {
      content: "★";
      position: absolute;
      left: 0;
      color: #ddd; /* Gray color to show half-fill */
      width: 50%;
      overflow: hidden;
    }
  }

  .rating-number {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-left: 8px;
  }

  .review-count {
    font-size: 14px;
    color: #555;

    strong {
      font-weight: bold;
      color: #333;
    }
  }

  .trust-index {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 80px; /* Larger logo */
      height: auto;
      transition: transform 0.3s ease;
    }

    img:hover {
      transform: scale(1.1); /* Slight zoom on hover */
    }

    p {
      margin-top: 8px;
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  }
`;


const ReviewSummary = styled.div`
  text-align: center;

  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 8px;
  }

  .stars {
    font-size: 24px;
    color: #f4b400;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;

    span {
      margin: 0 2px;
    }
  }

  .review-count {
    font-size: 14px;
    color: #555;
    margin-bottom: 16px;

    strong {
      font-weight: bold;
    }
  }

  .trust-index img {
    width: 60px;
    height: auto;
  }
`;

const RightSection = styled.div`
  width: 70%;
  overflow: hidden;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Slider = styled.div<{ translateX: number }>`
  display: flex;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  transition: transform 0.5s ease-in-out;
  align-items: flex-start; /* Ensures cards are independently aligned */

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
`;

const ReviewCard = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  flex: 0 0 auto; /* Prevents the card from resizing with others */

  @media (max-width: 768px) {
    flex: 0 0 90%;
    margin: 0 5%;
    scroll-snap-align: start;
  }
`;

const ReviewText = styled.p<{ expanded: boolean }>`
  font-size: 12px;
  color: #333;
  line-height: 1.4;
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? "500px" : "70px")};
  transition: max-height 0.5s ease, padding 0.5s ease;
  margin-bottom: ${({ expanded }) => (expanded ? "16px" : "0")}; /* Smooth margin transition */
`;


const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  .profile-initial {
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
  }

  .google-logo {
    margin-left: auto;
    width: 35px;
    height: auto;
  }
`;

const Stars = styled.div`
  color: #f4b400;
  font-size: 24px;
  margin: 0 0 10px 0;
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

const Controls = styled.div`
  position: absolute; /* Position it absolutely */
  top: 50%; /* Vertically center the controls */
  transform: translateY(-50%); /* Center it properly */
  width: 100%; /* Full width to align buttons properly */
  display: flex;
  justify-content: space-between; /* Space arrows on the left and right */
  padding: 0 20px; /* Add some padding for better spacing */
  pointer-events: none; /* Prevent blocking content clicks */

  button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    opacity: 0.7;
    border-radius: 5px;
    pointer-events: all; /* Re-enable clicks for buttons */

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide controls on smaller screens */
  }
`;


const Title2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

interface ReviewSliderInterface {
  title: string; // Title for the section
}

// React Component
const ReviewSlider: React.FC<ReviewSliderInterface> = ({ title }) => {
  const [translateX, setTranslateX] = useState(0);
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const handlePrev = () => {
    setTranslateX((prev) => Math.min(prev + 410, 0)); // Prevent moving beyond the first card
  };
  
  const handleNext = () => {
    const maxTranslateX = -(410 * (reviews.length - 1)); // Maximum leftward movement
    setTranslateX((prev) => {
      const newTranslateX = prev - 410;
      return newTranslateX < maxTranslateX ? maxTranslateX : newTranslateX; // Stop at the last card
    });
  };
  
  
  
  const reviews = [
    {
      id: 1,
      name: "Anna Smith",
      date: "5 January 2024",
      text: "Amazing service! They went above and beyond Amazing service! They went above and beyond to help me with my travel plans.Am to help me with my travel plans.Amazing service! They went above and beyond to help me with my travel plans",
    },
    {
      id: 2,
      name: "John Doe",
      date: "10 February 2024",
      text: "The response was quick and professional. I recommend them highly!",
    },
    {
      id: 3,
      name: "Jane Doe",
      date: "15 February 2024",
      text: "I had a great experience. They are very professional and responsive.",
    },
    {
      id: 4,
      name: "Jane Doe",
      date: "15 February 2024",
      text: "I had a great experience. They are very professional and responsive.",
    },
    {
      id: 5,
      name: "Jane Doe",
      date: "15 February 2024",
      text: "I had a great experience. They are very professional and responsive.",
    },
  ];

  return (
    <div>
      <Title2>{title}</Title2>
      <Container>
        <LeftSection>
          <ReviewSummary>
            <h2>GOOD</h2>
            <div className="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span style={{ color: "#ccc" }}>★</span>
            </div>
            <p className="review-count">
              Based on <strong>4787 reviews</strong>
            </p>
            <div className="trust-index">
              <img
                src="https://cdn.trustindex.io/assets/platform/Trustindex/icon.svg"
                alt="Trustindex"
              />
            </div>
          </ReviewSummary>
        </LeftSection>
        <RightSection>
          <Slider translateX={translateX}>
            {reviews.map((review) => (
              <ReviewCard key={review.id}>
                <ReviewHeader>
                  <div className="profile-initial">
                    {review.name[0].toUpperCase()}
                  </div>
                  <div>
                    <h4>{review.name}</h4>
                    <p>{review.date}</p>
                  </div>
                  <img
                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                    alt="Google"
                    className="google-logo"
                  />
                </ReviewHeader>
                <Stars>★★★★★</Stars>
                <ReviewText expanded={expandedReview === review.id}>
                  {review.text}
                </ReviewText>
                <ReadMore
                  onClick={() =>
                    setExpandedReview(
                      expandedReview === review.id ? null : review.id
                    )
                  }
                >
                  {expandedReview === review.id ? "Show less" : "Read more"}
                </ReadMore>
              </ReviewCard>
            ))}
          </Slider>
          <Controls>
            <button onClick={handlePrev}>❮</button>
            <button onClick={handleNext}>❯</button>
          </Controls>
        </RightSection>
      </Container>
    </div>
  );
};

export default ReviewSlider;
