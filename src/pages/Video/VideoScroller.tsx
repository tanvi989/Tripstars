import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaHeart, FaShare, FaBookmark } from "react-icons/fa";

// Import videos
import Video1 from "../../assets/Videos/Testimonial/1.mp4";
import Video2 from "../../assets/Videos/Testimonial/2.mp4";
import Video3 from "../../assets/Videos/Testimonial/3.mp4";
import Video4 from "../../assets/Videos/Testimonial/4.mp4";
import Video5 from "../../assets/Videos/Testimonial/5.mp4";
import Video6 from "../../assets/Videos/Testimonial/6.mp4";
import Video7 from "../../assets/Videos/Testimonial/7.mp4";

// Video details with tags included
const videoData = [
  {
    title: "Aishwarya's Bali Vacation",
    description:
      "Take an unforgettable trip with Pickyourtrail, just like Aishwarya Rajesh did. Enjoy stunning beaches and cultural vibes.",
    tags: ["Bali", "Vacation", "Culture"],
  },
  {
    title: "Dubai's Iconic Landmarks",
    description:
      "Explore iconic landmarks and vibrant cultural moments in the city of gold.",
    tags: ["Dubai", "Landmarks", "Culture"],
  },
  {
    title: "Vidyu Lekha's Vietnam Vacation",
    description:
      "Vidyu Lekha's adventure in Vietnam was full of culture and breathtaking landscapes.",
    tags: ["Vietnam", "Hanoi", "Ha Long Bay", "Culture", "Beaches"],
  },
  {
    title: "Taste of Vietnam",
    description:
      "Indulge in authentic Vietnamese cuisine while experiencing the rich history of Vietnam.",
    tags: ["Cuisine", "Street Food", "Traditional Dishes"],
  },
  {
    title: "Vietnam’s Hidden Gems",
    description:
      "Relax at peaceful beaches or explore historic temples in Vietnam.",
    tags: ["Beaches", "Temples", "Nature"],
  },
  {
    title: "Dubai’s Ultimate Luxury",
    description:
      "Aishwarya Rajesh enjoyed luxurious stays and world-class dining in Dubai.",
    tags: ["Luxury", "Hotels", "Fine Dining"],
  },
  {
    title: "Scenic Wonders & Adventure",
    description:
      "From hidden gems to picture-perfect destinations, explore unique travel experiences.",
    tags: ["Adventure", "Scenic Views", "Experiences"],
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

const FloatingButtons = styled.div`
  position: absolute;
  right: 10px;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1024px) {
    display: none; /* Hide on desktop */
  }
`;

const ActionButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) =>
    active ? "#e63946" : "rgba(0, 0, 0, 0.6)"};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  font-size: 18px;

  &:hover {
    background: ${({ active }) =>
      active ? "#d62828" : "rgba(255, 255, 255, 0.3)"};
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh; /* Full height for each video */
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  position: relative;

  @media (max-width: 1024px) {
    min-height: 100vh;
    max-height: 100vh;
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

// Overlay appears only on small screens
const Overlay = styled.div`
  position: absolute;
  bottom: 85px;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  @media (min-width: 1024px) {
    display: none;
  }
`;

const OverlayTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const OverlayDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  max-width: 90%;
`;

const OverlayTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const OverlayTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.7rem;
  border-radius: 15px;
  font-size: 0.9rem;
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
  background: linear-gradient(90deg, #c99603, #f4e628, #cd9c01, #b38201);
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

const ViewButton = styled.button`
  background: #ffd700;
  color: black;
  font-weight: bold;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;

  &:hover {
    background: #ffd700;
  }
`;

const VideoScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted

  const videoSources = [
    Video1,
    Video2,
    Video3,
    Video4,
    Video5,
    Video6,
    Video7,
  ];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === activeIndex) {
        video?.play().catch((error) =>
          console.error("Auto-play failed:", error)
        );
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
        video.muted = isMuted;
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: videoData[activeIndex].title,
          text: videoData[activeIndex].description,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing not supported on this browser.");
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
              loop
              playsInline
              autoPlay
              onClick={() => {
                setIsMuted(false);
                togglePlayPause(index);
              }}
              muted={isMuted}
            />

            {/* Overlay appears only on small screens */}
            <Overlay>
              <OverlayTitle>{videoData[index].title}</OverlayTitle>
              <OverlayDescription>
                {videoData[index].description.length > 80
                  ? `${videoData[index].description.substring(0, 80)}...`
                  : videoData[index].description}
              </OverlayDescription>
              {videoData[index].tags && videoData[index].tags.length > 0 && (
                <OverlayTags>
                  {videoData[index].tags.map((tag, idx) => (
                    <OverlayTag key={idx}>{tag}</OverlayTag>
                  ))}
                </OverlayTags>
              )}
              <ViewButton>View Packages</ViewButton>
            </Overlay>

            {/* Floating Like, Share, Save Buttons (Mobile only) */}
            <FloatingButtons>
              <ActionButton active={liked} onClick={() => setLiked(!liked)}>
                <FaHeart />
              </ActionButton>
              <ActionButton onClick={handleShare}>
                <FaShare />
              </ActionButton>
              <ActionButton active={saved} onClick={() => setSaved(!saved)}>
                <FaBookmark />
              </ActionButton>
            </FloatingButtons>
          </VideoWrapper>
        ))}
      </VideoContainer>

      {/* Desktop Description Container */}
      <DescriptionContainer>
        <Title>{videoData[activeIndex].title}</Title>
        {videoData[activeIndex].tags && videoData[activeIndex].tags.length > 0 && (
          <Tags>
            {videoData[activeIndex].tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </Tags>
        )}
        <Hr />
        <Text>{videoData[activeIndex].description}</Text>
        <ViewButton>View Packages</ViewButton>
      </DescriptionContainer>
    </Container>
  );
};

export default VideoScroller;
