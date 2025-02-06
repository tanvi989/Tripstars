import React, { useState } from "react";
import styled from "styled-components";

// FAQ Data
const faqData = [
  {
    title: "General FAQs",
    questions: [
      { question: "What is the capital of Meghalaya?", answer: "The capital of Meghalaya is Shillong, often referred to as the 'Scotland of the East.'" },
      { question: "What language is spoken in Meghalaya?", answer: "Khasi, Garo, and Jaintia are the main languages spoken in Meghalaya. English is also widely used." },
      { question: "How safe is Meghalaya for tourists?", answer: "Meghalaya is considered a very safe place for tourists. The locals are friendly, and crime rates are low." },
      { question: "Is Meghalaya an expensive travel destination?", answer: "No, Meghalaya is quite affordable compared to other hill stations in India. Budget travelers can find cheap stays and food." }
    ]
  },
  {
    title: "Travel & Adventure FAQs",
    questions: [
      { question: "What is the best trekking spot in Meghalaya?", answer: "The Double Decker Living Root Bridge trek in Nongriat is one of the best trekking experiences in Meghalaya." },
      { question: "Is Dawki worth visiting?", answer: "Yes! Dawki is famous for its crystal-clear river, the Umngot River, where you can enjoy boat rides with stunning underwater visibility." },
      { question: "What are the best waterfalls in Meghalaya?", answer: "Some famous waterfalls include Nohkalikai Falls, Seven Sisters Falls, and Elephant Falls." },
      { question: "What are the adventure activities in Meghalaya?", answer: "You can enjoy trekking, river rafting, zip-lining, caving, and rock climbing in Meghalaya." }
    ]
  },
];

// Styled Components
const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
padding: 0;
  }
`;

const Banner = styled.div`
  width: 100vw; /* Full viewport width */
  max-width: 100%; /* Ensure it doesn't shrink */
  text-align: center;
  overflow: hidden;
  position: relative; /* Ensures it stays independent from other elements */

  img {
    width: 100vw; /* Ensures full width */
    height: auto;
    max-height: 400px;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 1200px) {
   
    
  }
`;


const FaqSections = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  padding: 0 10%; /* Added padding for spacing */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5%; /* Added padding for spacing */
  }
`;

const FaqSection = styled.div`
  flex: 1;
  background: white;
  
  border-radius: 8px;
 
  margin: 10px; /* Adds spacing around the sections */
`;

const FaqTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #007399;
  border-left: 5px solid #007399;
  padding-left: 12px;
  margin-bottom: 20px;
`;

const FaqBox = styled.div<{ isOpen: boolean }>`
  border: 1px solid #00a3cc;
  border-radius: 8px;
  background-color: ${({ isOpen }) => (isOpen ? "#e6f7ff" : "#f9f9f9")};
  margin-bottom: 10px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const FaqQuestion = styled.div`
  font-weight: bold;
  color: #007399;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const FaqAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")}; /* Prevents FAQ size change */
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  margin-top: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  padding-top: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  border-top: ${({ isOpen }) => (isOpen ? "1px solid #ddd" : "none")};
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index); // Close previous FAQ when a new one is opened
  };

  return (
    <FaqContainer>
      <Banner>
        <img
          src="https://don16obqbay2c.cloudfront.net/wp-content/uploads/FAQ-1496222256.png"
          alt="FAQ Banner"
        />
      </Banner>

      <FaqSections>
        {faqData.map((section, sectionIndex) => (
          <FaqSection key={sectionIndex}>
            <FaqTitle>{section.title}</FaqTitle>
            {section.questions.map((item, index) => {
              const currentIndex = `${sectionIndex}-${index}`;
              return (
                <FaqBox key={index} isOpen={openIndex === currentIndex} onClick={() => toggleFAQ(currentIndex)}>
                  <FaqQuestion>
                    {item.question}
                    <span>{openIndex === currentIndex ? "▲" : "▼"}</span>
                  </FaqQuestion>
                  <FaqAnswer isOpen={openIndex === currentIndex}>{item.answer}</FaqAnswer>
                </FaqBox>
              );
            })}
          </FaqSection>
        ))}
      </FaqSections>
    </FaqContainer>
  );
};

export default Faq;
