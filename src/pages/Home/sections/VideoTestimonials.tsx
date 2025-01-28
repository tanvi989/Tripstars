import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import bgImage from "../../../assets/images/backgrounds/Videotestimonials-bg.png";

import Video1 from "../../../assets/Videos/Testimonial/1.mp4";
import Video2 from "../../../assets/Videos/Testimonial/2.mp4";
import Video3 from "../../../assets/Videos/Testimonial/3.mp4";
import Video4 from "../../../assets/Videos/Testimonial/4.mp4";
import Video5 from "../../../assets/Videos/Testimonial/5.mp4";
import Video6 from "../../../assets/Videos/Testimonial/6.mp4";
import Video7 from "../../../assets/Videos/Testimonial/7.mp4";

const Container = styled.div`
  padding: 0 10rem;
  background-image: url(${bgImage});
  background-size: cover;
  margin: 10rem 0;
  margin-bottom: 0;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 3rem;
    padding-right: 0;
  }
`;

const Title = styled.div`
  border-bottom: 1px solid #fff;
  padding-bottom: 5rem;
  margin-top: 5rem;
  h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 700;
  }
  @media (max-width: 1080px) {
    padding-bottom: 2rem;
    margin-top: 2rem;
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const ContentWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  @media (max-width: 1080px) {
    margin: 1rem 0;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 30%;
  color: #fff;
  @media (max-width: 1080px) {
    p {
      font-size: 0.9rem;
    }
    width: 80%;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
    width: 100%;
  }
`;

const CardsWrapper = styled.div`
  width: 60%;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const Card = styled.div``;

const ImageWrapper = styled.div`
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const testimonials = [
  {
    videoUrl: Video1,
  },
  {
    videoUrl: Video2,
  },
  {
    videoUrl: Video3,
  },
  {
    videoUrl: Video4,
  },
  {
    videoUrl: Video5,
  },
  {
    videoUrl: Video6,
  },
  {
    videoUrl: Video7,
  },
];

export default function VideoTestimonials() {
  const handlePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Pause and mute all videos
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      if (video !== e.currentTarget) {
        video.pause();
        video.muted = true;
      }
    });

    // Unmute the current video
    e.currentTarget.muted = false;
  };

  return (
    <Container>
      <Title>
        <h2>Video testimonials</h2>
      </Title>
      <ContentWrapper>
        <LeftContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="btn">See all</div>
        </LeftContent>
        <CardsWrapper>
          <Swiper
            spaceBetween={20}
            slidesPerView={2.3}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Card>
                  <ImageWrapper>
                    <video
                      src={item.videoUrl}
                      autoPlay
                      playsInline
                      loop
                      muted
                      controls
                      onPlay={handlePlay}
                    />
                  </ImageWrapper>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardsWrapper>
      </ContentWrapper>
    </Container>
  );
}
