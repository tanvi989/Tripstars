import React from "react";
import styled from "styled-components";

// Styled Components
const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Default height for desktop */
  background: url("https://images.wanderon.in/category/honeymoon-cover?updatedAt=1692268658108")
    no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px; /* Reduce height on mobile */
  }
`;

// Stronger black overlay at the bottom
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px; /* Default height */
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));

  @media (max-width: 768px) {
    height: 120px; /* Adjust for mobile */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px; /* Moves text slightly up */

  @media (max-width: 768px) {
    padding-bottom: 60px; /* Adjust padding on mobile */
  }
`;

const CursiveText = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 36px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px; /* Smaller text on mobile */
  }
`;

const BookNowButton = styled.button`
  background-color: #ffcc00;
  color: black;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    background-color: #ffdb4d;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Reduce size for mobile */
    padding: 10px 20px;
  }
`;

// New wrapper to position icons at the very bottom
const IconsContainer = styled.div`
  position: absolute;
  bottom: 10px; /* Pushes icons near bottom */
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  z-index: 3;

  @media (max-width: 768px) {
    gap: 20px; /* Reduce spacing on mobile */
  }
`;

const RatingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    transform: scale(0.8); /* Shrink rating cards on mobile */
  }
`;

const RatingIcon = styled.img`
  width: 30px; /* Default size */
  height: 30px;

  @media (max-width: 768px) {
    width: 30px; /* Smaller icons on mobile */
    height: 30px;
  }
`;

const RatingStars = styled.div`
  font-size: 22px;
  color: gold;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px; /* Smaller text on mobile */
  }
`;

const ReviewCount = styled.div`
  font-size: 12px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller review count text */
  }
`;

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <Overlay />
      <ContentWrapper>
        <CursiveText>Romantic Escapes Await 💕</CursiveText>
        <BookNowButton>Book Now</BookNowButton>
      </ContentWrapper>
      <IconsContainer>
        <RatingCard>
          <RatingIcon
            src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/google.png"
            alt="Google"
          />
          <RatingStars>⭐ 4.9</RatingStars>
          <ReviewCount>(12,300 reviews)</ReviewCount>
        </RatingCard>
        <RatingCard>
          <RatingIcon
            src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/tripadvisor.png"
            alt="TripAdvisor"
          />
          <RatingStars>⭐ 5.0</RatingStars>
          <ReviewCount>(3,550 reviews)</ReviewCount>
        </RatingCard>
        <RatingCard>
          <RatingIcon
            src="https://ik.imagekit.io/workcations/gallery/landing-pages/social/facebook.png"
            alt="Facebook"
          />
          <RatingStars>⭐ 4.9</RatingStars>
          <ReviewCount>(1,031 reviews)</ReviewCount>
        </RatingCard>
      </IconsContainer>
    </BannerWrapper>
  );
};

export default Banner;
