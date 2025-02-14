import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import thumbnil1 from "../../../assets/thumbnil/THUBNAIL 1a (1).jpg"
import thumbnil3 from "../../../assets/thumbnil/THUBNAIL 3.jpg"
import thumbnil4 from "../../../assets/thumbnil/THUBNAIL 4.jpg"
import thumbnil5 from "../../../assets/thumbnil/THUBNAIL 5.jpg"

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 15rem;

  @media (max-width: 1340px) {
    margin: 0 5rem;
  }
  @media (max-width: 1080px) {
    margin: 0 3rem;
  }
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    // padding: 3rem 2rem;
  }
`;

const Title = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #d5c156;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const VideoCard = styled.div`
  background: white;
  border-radius: 15px;
  border: 2px solid #b0e0e6;
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const VideoContainer = styled.a`
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

const PlayButton = styled.div`
display:none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 768px) {
  display:none;
    width: 70px;
    height: 70px;
  }
`;

const PlayIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fff;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const VideoText = styled.div`
  padding: 15px 10px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;

  @media (min-width: 768px) {
    // font-size: 16px;
    // padding: 20px 15px;
  }
`;

const VideoThumbnail = () => {
  const videos = [
    {
      thumbnail: "https://i.ytimg.com/vi/lrb93i4EUi4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDAlxvChgpICVVkOxVat_FQwNYD9g",
      link: "https://youtu.be/lrb93i4EUi4?si=CTVW5Owqiry78BKb",
      text: "Bali Bliss : Aditya Gadhvi's Unforgettable Journey"
    },
    {
      thumbnail: thumbnil1,
      link: "https://youtu.be/LyfnbIjW5Q0?si=cc1JVf0YM6gzFa_R",
      text: "Happy Travellers | Vietnam Tours | Tripstars Holidays"
    },
    {
      thumbnail: thumbnil3,
      link: "https://www.youtube.com/watch?v=ghi789",
      text: "Travel Guides | Destination Videos | WanderOn TV"
    },
    {
      thumbnail: thumbnil4,
      link: "https://www.youtube.com/watch?v=ghi789",
      text: "Travel Guides | Destination Videos | WanderOn TV"
    },
    {
      thumbnail: thumbnil5,
      link: "https://www.youtube.com/watch?v=ghi789",
      text: "Travel Guides | Destination Videos | WanderOn TV"
    }
  ];

  return (
    <SliderContainer>
      <Wrapper>
        <Title> Unforgettable Journeys, Captured in Moments ❤️</Title>
        
        {/* Swiper for Desktop and Mobile */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default for mobile
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 3 }, // Show 3 videos per row on desktop
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <VideoCard>
                <VideoContainer href={video.link} target="_blank" rel="noopener noreferrer">
                  <Thumbnail src={video.thumbnail} alt={`Video ${index + 1}`} />
                  <PlayButton>
                    <PlayIcon viewBox="0 0 24 24">
                      <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
                    </PlayIcon>
                  </PlayButton>
                </VideoContainer>
                <VideoText>{video.text}</VideoText>
              </VideoCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </SliderContainer>
  );
};

export default VideoThumbnail;
