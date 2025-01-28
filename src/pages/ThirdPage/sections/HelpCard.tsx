import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const HelpCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px; /* Adjust as per your layout */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on smaller screens */
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: #555;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px; /* Add space below the icon on smaller screens */
    align-self: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;

  strong {
    font-size: 16px;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 14px; /* Adjust font size for smaller screens */
    }
  }
`;

const ContactDetail = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 13px; /* Slightly smaller font size for mobile */
  }
`;

export default function NeedHelpCard() {
  return (
    <HelpCard>
      <IconWrapper>
        <FaUserAlt />
      </IconWrapper>
      <TextWrapper>
        <strong>Need Help?</strong>
        <ContactDetail>
          Call us: 011-43030303 | 43131313
        </ContactDetail>
        <ContactDetail>Mail us: Holidays@easemytrip.com</ContactDetail>
      </TextWrapper>
    </HelpCard>
  );
}
