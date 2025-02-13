import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import profile from "../../../assets/icons/Ellipse 13.png"

// Styled Components
const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;
  margin-bottom: 40px;
  @media (max-width: 1340px) {
    margin: 0 5rem;
    margin-bottom: 30px;
  }
  @media (max-width: 1080px) {
    margin: 0 3rem;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-bottom: 20px;
  }
`;

const PageContainer = styled.div`

  padding: 32px;
  font-family: "Arial", sans-serif;
  color: #333;
  border-radius: 16px;


  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const OverallRatingSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 32px;
  border-radius: 20px;

  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    margin: 0;
    color: #444;
    text-transform: uppercase;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;

    svg {
      width: 32px;
      height: 32px;
      fill: #ffcc00;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
      }

      &:nth-child(n + 4) {
        fill: #d1d1d1;
      }
    }
  }

  .summary {
    font-size: 1.2rem;
    margin: 12px 0;
    color: #555;

    strong {
      font-weight: bold;
      color: #111;
    }
  }

  .trust-badge {
    margin-top: 16px;
    font-size: 1.1rem;
    color: #4caf50;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const ReviewContainer = styled.div`
  background: linear-gradient(145deg, #ffffff, #f7f8fa);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.12);
  text-align: center;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;

  svg {
    width: 22px;
    height: 22px;
    fill: #ffcc00;

    &:nth-child(n + 5) {
      fill: #d1d1d1;
    }

   
  }
`;

const ReviewText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin: 16px 0;
  font-style: italic;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 12px;

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #5a5a5a;
    border: 3px solid #d1d5db;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .details {
    text-align: left;

    h3 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
      color: #222;
    }

    span {
      font-size: 0.9rem;
      color: #555;
    }
  }
`;

const TitleHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #333;
  margin-top: 40px;

  @media (max-width: 1080px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// Icons
const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.793 1.564 8.307L12 18.897l-7.5 4.512 1.564-8.307-6.064-5.793 8.332-1.151L12 .587z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 21.5l-7-7L3.5 12l5.5 5.5L20.5 5l2.5 2.5-14 14z" />
  </svg>
);

interface ReviewCardProps {
  review:string,
  name:string,
  date:string
}

// Review Card
const ReviewCard = ({ review, name, date }:ReviewCardProps) => (
  <ReviewContainer>
    <Stars>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <StarIcon key={index} />
        ))}
    </Stars>
    <ReviewText>"{review}"</ReviewText>
    <User>
      <div className="avatar"><img src={profile}></img></div>
      <div className="details">
        <h3>{name}</h3>
        <span>{date}</span>
      </div>
    </User>
  </ReviewContainer>
);

const ReviewSlider = () => {
  const reviews = [
    { review: "ShudipG is best. Thanks buddy!", name: "Jasminder Sohal", date: "10 Nov 2024" },
    { review: "Excellent service and support!", name: "Alex Johnson", date: "5 Jan 2025" },
    { review: "Outstanding experience!", name: "Priya Mehta", date: "22 Dec 2024" },
    { review: "Fantastic work! Will recommend.", name: "Michael Lee", date: "15 Feb 2025" },
    { review: "Simply amazing!", name: "Sophie Turner", date: "3 Mar 2025" },
  ];

  return (
    <SliderContainer>
      <TitleHeading>Reviews</TitleHeading>
      <PageContainer>
        {/* <OverallRatingSection>
          <h1>Good</h1>
          <div className="stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="summary">
            Based on <strong>4,797 reviews</strong>
          </p>
          <div className="trust-badge">
            <CheckIcon />
            Trusted Reviews
          </div>
        </OverallRatingSection> */}
        <SwiperContainer>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </PageContainer>
    </SliderContainer>
  );
};

export default ReviewSlider;
