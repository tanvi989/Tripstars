import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";

// Define the types for the PolicySectionProps
interface PolicySectionProps {
  title: string;
  content: string[];
}

// Reusable Policy Section component with proper typing
const PolicySection: React.FC<PolicySectionProps> = ({ title, content }) => (
  <div>
    <SubHeading>{title}</SubHeading>
    {content.map((text, index) => (
      <Paragraph key={index}>{text}</Paragraph>
    ))}
  </div>
);

// Keyframes for the loading spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Wrapper for the entire section
const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

// Yellow background styled div with better mobile responsiveness
const YellowDiv = styled.div`
  margin-top: 78px;
  height: 200px;
  background-color: #efdc63;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 1.75rem;
  font-weight: bold;
  font-family: Arial, sans-serif;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    height: 150px;
     margin-top: 53px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    height: 120px;
    font-size: 1.2rem;
    padding: 1rem;
  }
`;

// Section with a clean box-shadow, padding, and margin adjustments
const Section = styled.section`
  padding: 8rem;
  max-width: 900px;
  margin: -2rem auto 2rem auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  line-height: 1.6;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 4rem;
    margin: -1rem auto 1rem auto;
  }

  @media (max-width: 480px) {
    padding: 2rem;
    margin: -1rem auto 1rem auto;
  }
`;

// Subheading with better readability and accessibility
const SubHeading = styled.h3`
  font-size: 1.25rem;
  color: #333333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Paragraph with better contrast and mobile-responsive typography
const Paragraph = styled.p`
  font-size: 1rem;
  color: #555555;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
`;

// Loading spinner styled component
const LoadingSpinner = styled.div`
  margin-top: 2rem;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

export default function PolicySectionPage({ title }: { title: string }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Set the content based on the title passed through the route
  const getContent = () => {
    if (title === "Terms & Conditions") {
      return [
        "These are the terms and conditions of using TripStars services.",
        "By accessing this website, you agree to be bound by these terms and conditions.",
        "TripStars reserves the right to modify or terminate the service at any time.",
        "Please review our privacy policy for further details.",
        "These terms govern your use of the TripStars platform, including booking services, refunds, and more."
        , "These are the terms and conditions of using TripStars services.",
        "By accessing this website, you agree to be bound by these terms and conditions.",
        "TripStars reserves the right to modify or terminate the service at any time.",
        "Please review our privacy policy for further details.",
        "These terms govern your use of the TripStars platform, including booking services, refunds, and more."
      ];
    } else if (title === "Cancellation Policy") {
      return [
        "The cancellation policy is effective for all vacations crafted by TripStars.",
        "Customers eligible for refunds will receive the refund within 90 working days from cancellation.",
        "Refunds are subject to international exchange rates and supplier payment status.",
        "Cancellations made more than 30 days before the trip are eligible for a full refund minus administrative fees.",
        "No refunds are given for cancellations made less than 30 days before the departure date."
      ];
    } else if (title === "Privacy Policy") {
      return [
        "We respect your privacy and are committed to protecting the personal information you share with us.",
        "We collect personal information necessary for booking and travel management purposes.",
        "TripStars does not share your personal information with third parties unless required by law.",
        "You can access and update your personal data by contacting us directly.",
        "For further details on how we process and protect your personal data, please refer to our full Privacy Policy."
      ];
    }
    return []; // Default case
  };

  if (loading) {
    return (
      <Wrapper>
        <YellowDiv>{title}</YellowDiv>
        <LoadingSpinner aria-live="assertive" />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Read Tripstars' ${title.toLowerCase()}.`} />
      </Helmet>
      <YellowDiv>{title}</YellowDiv>
      <Section>
        <PolicySection title={title} content={getContent()} />
      </Section>
    </Wrapper>
  );
}
