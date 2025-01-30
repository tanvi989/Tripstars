import React from "react";
import styled from "styled-components";
import { FaHeadset, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HelpCard = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%);
  padding: 24px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  max-width: 360px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #4361ee 0%, #3a0ca3 100%);
    border-radius: 12px 0 0 12px;
  }
`;

const IconWrapper = styled.div`
  font-size: 28px;
  color: #4361ee;
  margin-right: 16px;
  padding: 12px;
  background: rgba(67, 97, 238, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
    padding: 10px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left:20px;
`;

const Title = styled.strong`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #4d4d4d;
  margin-top: 4px;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #4361ee;
    }
  }

  svg {
    flex-shrink: 0;
    color: #4361ee;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default function NeedHelpCard() {
  return (
    <HelpCard>
      <IconWrapper>
        <FaHeadset />
      </IconWrapper>
      <TextWrapper>
        <Title>Need Assistance?</Title>
        <ContactDetail>
          <FaPhoneAlt />
          <a href="tel:011-43030303">011-4303 0303</a> / <a href="tel:011-43131313">4313 1313</a>
        </ContactDetail>
        <ContactDetail>
          <FaEnvelope />
          <a href="mailto:Holidays@easemytrip.com">Holidays@easemytrip.com</a>
        </ContactDetail>
      </TextWrapper>
    </HelpCard>
  );
}