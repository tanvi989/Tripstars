import React from "react";
import styled from "styled-components";

// Sample Testimonial Data
const testimonials = [
  { id: 1, image: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204", top: "10%", left: "20%" },
  { id: 2, image: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204", top: "15%", left: "60%" },
  { id: 3, image: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204", top: "35%", left: "10%" },
  { id: 4, image: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204", top: "50%", left: "80%" },
  { id: 5, image: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204", top: "65%", left: "30%" },
  { id: 6, image: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204", top: "75%", left: "70%" },
];

// Styled Components
const TestimonialSection = styled.div`
  width: 100%;
  background: #fdfaf5;
  padding: 50px 20px;
  text-align: center;
  position: relative;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const CursiveTitle = styled.span`
  font-size: 26px;
  font-style: italic;
  color: #e91e63;
  font-family: "Dancing Script", cursive;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 200px;
  margin: 30px auto;
`;

const LargeProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #f8d66d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SmallProfileImage = styled.img<{ top: string; left: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Quote = styled.p`
  font-size: 18px;
  color: #444;
  font-style: italic;
  margin: 20px auto;
  max-width: 600px;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: #333;
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

// Component
const TestimonialSectionComponent = () => {
  return (
    <TestimonialSection>
      <Title>
        FANBOOK <CursiveTitle>Testimonials</CursiveTitle>
      </Title>

      <ProfileContainer>
        {/* Small scattered images */}
        {testimonials.map((item) => (
          <SmallProfileImage
            key={item.id}
            src={item.image}
            alt="User"
            top={item.top}
            left={item.left}
          />
        ))}
        {/* Center Large Image */}
        <LargeProfileImage src="https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204" alt="Featured User" />
      </ProfileContainer>

      <Quote>
        “Our honeymoon trip to Singapore was seamlessly planned by the Pickyourtrail team.”
        <br />
        <BoldText>Sachin & Shalini</BoldText>
      </Quote>

      <Button href="#">View More Testimonials ➜</Button>
    </TestimonialSection>
  );
};

export default TestimonialSectionComponent;
