import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SectionWrapper = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: linear-gradient(90deg, #e3f2fd, #bbdefb);
  border-radius: 8px;
  cursor: pointer;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: #333;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.2s ease-in-out;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const SectionContent = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  border: 1px solid #ddd;
  border-top: none;
  background-color: #f9f9f9;
  border-radius: 0 0 8px 8px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Main Component
const TermsAndConditions: React.FC = () => {
  const sections = [
    {
      title: "Travel Validity",
      content: "Fixed Travel Dates: (07, 13, 21 Feb) - (07, 14, 20, 27 March 2025)",
    },
    {
      title: "Easy Cancellation",
      content: "100% Non-refundable.",
    },
    {
      title: "Guaranteed Dates",
      content: "Travel dates are fixed and non-changeable.",
    },
    {
      title: "Visa Easy",
      content: "Visa assistance will be provided by our visa specialist.",
    },
  ];

  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter((i) => i !== index) // Close section
        : [...prevOpenSections, index] // Open section
    );
  };

  return (
    <Container>
      <h2>Terms & Conditions</h2>
      {sections.map((section, index) => (
        <SectionWrapper key={index}>
          <SectionHeader
            onClick={() => toggleSection(index)}
            isOpen={openSections.includes(index)}
          >
            <h3>{section.title}</h3>
            <span>{openSections.includes(index) ? "▲" : "▼"}</span>
          </SectionHeader>
          {openSections.includes(index) && (
            <SectionContent>{section.content}</SectionContent>
          )}
        </SectionWrapper>
      ))}
    </Container>
  );
};

export default TermsAndConditions;
