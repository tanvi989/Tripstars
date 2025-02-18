import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const FAQContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;


  @media (min-width: 1024px) {
    padding: 0 15rem; /* Adds 15rem padding on large screens */
  }
`;

const FAQTitle = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #007399;
  border-left: 5px solid #007399;
  padding-left: 12px;
  margin-bottom: 20px;
`;

const FAQBox = styled.div<{ isOpen: boolean }>`
  border: 1px solid #00a3cc;
  border-radius: 8px;
  background-color: ${(props) => (props.isOpen ? "#e6f7ff" : "#f9f9f9")};
  margin-bottom: 10px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e6f7ff;
  }
`;

const Question = styled.div`
  font-weight: bold;
  color: #007399;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const Answer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  margin-top: 10px;
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

const faqs = [
  {
    question: "What is the best time to visit Bali?",
    answer:
      "The best time to visit Bali is during the dry season from April to October when the weather is sunny and pleasant.",
  },
  {
    question: "Do I need a visa to visit Vietnam?",
    answer:
      "Visa requirements depend on your nationality. Many countries can get a visa exemption for short stays, while others need to apply for an e-Visa or Visa on Arrival.",
  },
  {
    question: "What currency is used in Bali and Vietnam?",
    answer:
      "Bali uses the Indonesian Rupiah (IDR), while Vietnam uses the Vietnamese Dong (VND).",
  },
  {
    question: "Is Bali and Vietnam safe for tourists?",
    answer:
      "Yes, both destinations are generally safe for tourists. However, it's always good to stay alert and be cautious of scams or pickpockets.",
  },
  {
    question: "What are must-visit places in Bali?",
    answer:
      "Some must-visit places in Bali include Uluwatu Temple, Tegallalang Rice Terraces, Ubud Monkey Forest, and Nusa Penida.",
  },
  {
    question: "What are must-visit places in Vietnam?",
    answer:
      "Popular places in Vietnam include Ha Long Bay, Hoi An, Ho Chi Minh City, Hanoi Old Quarter, and the Mekong Delta.",
  },
  {
    question: "What local food should I try in Bali and Vietnam?",
    answer:
      "In Bali, try Nasi Goreng, Babi Guling, and Satay. In Vietnam, don't miss Pho, Banh Mi, and Bun Cha.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions (FAQS)</FAQTitle>
      {faqs.map((faq, index) => (
        <FAQBox key={index} isOpen={openIndex === index} onClick={() => toggleFAQ(index)}>
          <Question>
            {faq.question}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </Question>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </FAQBox>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
