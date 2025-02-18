import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import TestimonialSectionComponent from "./TestimonialComponent";

// Styled Components for TravelSection
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background-color: #ffffff;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row; /* Desktop: Side by side */
    justify-content: center;
    align-items: stretch; /* Ensures equal height */
  }
`;

const VideoContainer = styled.div`
  position: relative;
  flex: 1; /* Equal width */
  max-width: 50%; /* On desktop, each takes half width */
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
  border-radius: 5px;
`;

const HighlightText = styled.span`
  color: #ffcc00;
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00b050;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #008040;
  }
`;

const TestimonialContainer = styled.div`
  flex: 1; /* Equal width */
  max-width: 50%; /* Ensures half width */
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// TravelSection Component
const TravelSection = () => {
  return (
    <Section>
      {/* Video Section */}
      <VideoContainer>
        <ReactPlayer
          url="https://youtu.be/lrb93i4EUi4?si=y458i_-ru_vfYgtm"
          width="100%"
          height="100%"
          playing={false}
          controls={true}
        />
        <VideoOverlay>
          Travel the world like <HighlightText>NEERAJ</HighlightText>
        </VideoOverlay>
        <Button href="#">Watch Videos ➜</Button>
      </VideoContainer>

      {/* Testimonial Section */}
      <TestimonialContainer>
        <TestimonialSectionComponent />
      </TestimonialContainer>
    </Section>
  );
};

export default TravelSection;
