import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa"; // Import Play/Pause Icons

// Import videos
import Video1 from "../../assets/Videos/Testimonial/1.mp4";
import Video2 from "../../assets/Videos/Testimonial/2.mp4";
import Video3 from "../../assets/Videos/Testimonial/3.mp4";
import Video4 from "../../assets/Videos/Testimonial/4.mp4";
import Video5 from "../../assets/Videos/Testimonial/5.mp4";
import Video6 from "../../assets/Videos/Testimonial/6.mp4";
import Video7 from "../../assets/Videos/Testimonial/7.mp4";

// Video details with tags and descriptions
const videoData = [
  {
    title: "Aishwarya's Dubai Vacation",
    tags: ["Dubai", "Skyline", "Luxury", "Shopping", "Cultural Moments"],
    description: "Take an unforgettable Dubai trip with Pickyourtrail, just like Aishwarya Rajesh.",
  },
  {
    title: "Dubai's Iconic Landmarks",
    tags: ["Landmarks", "Shopping", "Culture"],
    description: "Explore iconic landmarks and vibrant cultural moments in the city of gold.",
  },
  {
    title: "Vidyu Lekha's Vietnam Vacation",
    tags: ["Vietnam", "Hanoi", "Ha Long Bay", "Culture", "Beaches"],
    description: "Vidyu Lekha's adventure in Vietnam was full of culture and breathtaking landscapes.",
  },
  {
    title: "Taste of Vietnam",
    tags: ["Cuisine", "Street Food", "Traditional Dishes"],
    description: "Indulge in authentic Vietnamese cuisine while experiencing the rich history of Vietnam.",
  },
  {
    title: "Vietnam’s Hidden Gems",
    tags: ["Beaches", "Temples", "Nature"],
    description: "Relax at peaceful beaches or explore historic temples in Vietnam.",
  },
  {
    title: "Dubai’s Ultimate Luxury",
    tags: ["Luxury", "Hotels", "Fine Dining"],
    description: "Aishwarya Rajesh enjoyed luxurious stays and world-class dining in Dubai.",
  },
  {
    title: "Scenic Wonders & Adventure",
    tags: ["Adventure", "Scenic Views", "Experiences"],
    description: "From hidden gems to picture-perfect destinations, explore unique travel experiences.",
  },
];

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 0 15rem;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const PlayPauseButton = styled.button<{ show: boolean }>`
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;

  /* Hide button when playing */
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};

  /* Mobile: Centered */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    /* Desktop: Move to bottom center */
    top: auto;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;



const DescriptionContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 50%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    background: #1a1a1a;
    color: white;
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: linear-gradient(90deg, #C99603, #F4E628, #CD9C01, #B38201);
  color: white;
  padding: 0.3rem 0.7rem;
  margin: 0.3rem;
  font-size: 0.9rem;
  border-radius: 20px;
`;

const Hr = styled.hr`
  width: 100%;
  border: 0.5px solid #777;
  margin: 1rem 0;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const VideoScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoSources = [Video1, Video2, Video3, Video4, Video5, Video6, Video7];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === activeIndex) {
        video?.play();
      } else {
        video?.pause();
      }
    });
  }, [activeIndex]);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const videos = containerRef.current.children;
    let newIndex = activeIndex;

    for (let i = 0; i < videos.length; i++) {
      const rect = videos[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        newIndex = i;
        break;
      }
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Container>
      <VideoContainer ref={containerRef} onScroll={handleScroll}>
        {videoSources.map((video, index) => (
          <VideoWrapper key={index}>
            <Video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              muted
              loop
              playsInline
              onClick={() => togglePlayPause(index)}
            />
           <PlayPauseButton 
  show={!isPlaying}  // Show button when video is paused
  onClick={() => togglePlayPause(index)}
>
  {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
</PlayPauseButton>

          </VideoWrapper>
        ))}
      </VideoContainer>

      <DescriptionContainer>
        <Title>{videoData[activeIndex].title}</Title>
        <Tags>
          {videoData[activeIndex].tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Hr />
        <Text>{videoData[activeIndex].description}</Text>
      </DescriptionContainer>
    </Container>
  );
};

export default VideoScroller;
