import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
`;

const MainTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  text-align: center;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: white;
  padding-top:20px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  padding: 2.5rem 2rem;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
    min-height: 300px;
  }
`;

const RatingTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;
interface StarProps {
  filled: boolean;
}

const Star = styled.span<StarProps>`
  color: ${props => props.filled ? '#F59E0B' : '#CBD5E0'};
  font-size: 2rem;
`;

const ReviewCount = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  
  strong {
    color: #2d3748;
    font-weight: 600;
  }
`;

const TrustBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 80px;
    height: auto;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const RightSection = styled.div`
  width: 70%;
  position: relative;
  padding: 2rem;

  .slider-viewport {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 1rem; /* Add padding for the control buttons */
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    
    .slider-viewport {
      padding: 0; /* Remove padding on mobile */
    }
  }
`;

interface SliderProps {
  $translateX: number;
}

const Slider = styled.div<SliderProps>`
  display: flex;
  transform: translateX(${props => props.$translateX}px);
  transition: transform 0.5s ease-in-out;
  gap: 1.5rem;
  width: fit-content; /* Allow the slider to be as wide as needed */
`;
const ReviewCard = styled.div`
  flex: 0 0 300px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex: 0 0 calc(100vw - 4rem); /* Full width minus padding */
    padding: 1.25rem;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem; // Reduce gap on mobile
  }
`;

const ProfileInitial = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #4a5568;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 40px; // Smaller profile initial on mobile
    height: 40px;
    font-size: 1rem;
  }
`;

const ReviewInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.25rem;

    @media (max-width: 768px) {
      font-size: 0.875rem; // Smaller font size on mobile
    }
  }

  p {
    font-size: 0.875rem;
    color: #718096;

    @media (max-width: 768px) {
      font-size: 0.75rem; // Smaller font size on mobile
    }
  }
`;

const ReviewLogo = styled.img`
  width: 24px;
  height: auto;

  @media (max-width: 768px) {
    width: 20px; // Smaller logo on mobile
  }
`;

const ReviewStars = styled.div`
  color: #f59e0b;
  font-size: 1.25rem;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    font-size: 1rem; // Smaller stars on mobile
  }
`;

interface ReviewTextProps {
  $expanded: boolean;
}

const ReviewText = styled.p<ReviewTextProps>`
  font-size: 0.875rem;
  color: #4a5568;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem; /* Slightly larger font for better readability */
    max-height: none; /* Always show full content on mobile */
  }
`;

const ReadMoreButton = styled.button`
  font-size: 0.875rem;
  color: #4a5568;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;

  &:hover {
    color: #2d3748;
  }

  @media (max-width: 768px) {
    display: none; /* Hide read more button on mobile since content is always expanded */
  }
`;

const Controls = styled.div`
  position: absolute;
  top: -1rem; /* Move it slightly higher */
  right: 1rem; /* Keep it aligned to the right */
  display: flex;
  gap: 0.5rem;

  @media (max-width: 1080px) {
    display:none;
  }
`;


const ControlButton = styled.button`
  background: white;
  color: black;
  border: 2px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: #f3f3f3;
  }

  &:focus {
    outline: none;
  }
`;






const ReviewSlider = ({ title }: { title: string }) => {
  const [translateX, setTranslateX] = useState(0);
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(2);

  const reviews = [
    {
      id: 1,
      name: "Anna Smith",
      date: "5 January 2024",
      text: "Amazing service! They went above and beyond Amazing service! They went above and beyond to help me with my travel plans. Am to help me with my travel plans. Amazing service! They went above and beyond to help me with my travel plans",
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
      name: "Mark Johnson",
      date: "15 February 2024",
      text: "I had a great experience. They are very professional and responsive.",
    },
    {
      id: 5,
      name: "Sarah Wilson",
      date: "15 February 2024",
      text: "I had a great experience. They are very professional and responsive.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
        setExpandedReview(null);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    const cardWidth = 300; // Width of each card
    const gapWidth = 24; // Gap between cards (1.5rem = 24px)
    const moveAmount = cardWidth + gapWidth; // Move only one card width + gap
    const totalWidth = reviews.length * moveAmount;
    const maxScroll = -(totalWidth - (moveAmount * slidesPerView));

    setTranslateX((prev) => {
      const next = prev - moveAmount;
      return Math.max(maxScroll, next);
    });
  };

  const handlePrev = () => {
    const cardWidth = 300; // Width of each card
    const gapWidth = 24; // Gap between cards (1.5rem = 24px)
    const moveAmount = cardWidth + gapWidth; // Move only one card width + gap

    setTranslateX((prev) => Math.min(prev + moveAmount, 0));
  };

  const toggleExpanded = (reviewId: number) => {
    setExpandedReview((current) => (current === reviewId ? null : reviewId));
  };

  return (
    <Wrapper>
      <MainTitle>{title}</MainTitle>
      <Container>
        <LeftSection>
          <RatingTitle>GOOD</RatingTitle>
          <StarsContainer>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Star key={index} filled={index < 4}>
                ★
              </Star>
            ))}
          </StarsContainer>
          <ReviewCount>
            Based on <strong>4,787 reviews</strong>
          </ReviewCount>
          <TrustBadge>
            <img
              src="https://cdn.trustindex.io/assets/platform/Trustindex/icon.svg"
              alt="Trustindex"
            />
          </TrustBadge>
        </LeftSection>

        <RightSection>
          <div className="slider-viewport">
            <Slider $translateX={translateX}>
              {reviews.map((review) => (
                <ReviewCard key={review.id}>
                  <ReviewHeader>
                    <ProfileInitial>{review.name[0]}</ProfileInitial>
                    <ReviewInfo>
                      <h4>{review.name}</h4>
                      <p>{review.date}</p>
                    </ReviewInfo>
                    <ReviewLogo
                      src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                      alt="Google"
                    />
                  </ReviewHeader>
                  <ReviewStars>★★★★★</ReviewStars>
                  <ReviewText $expanded={expandedReview === review.id}>
                    {review.text}
                  </ReviewText>
                  <ReadMoreButton onClick={() => toggleExpanded(review.id)}>
                    {expandedReview === review.id ? "Show less" : "Read more"}
                  </ReadMoreButton>
                </ReviewCard>
              ))}
            </Slider>
          </div>
          <Controls>
            <ControlButton onClick={handlePrev}>❮</ControlButton>
            <ControlButton onClick={handleNext}>❯</ControlButton>
          </Controls>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default ReviewSlider;