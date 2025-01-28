import React from "react";
import styled from "styled-components";

const OverviewWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

 
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p`
  font-size: 13px;
  color: #555;
  line-height: 1.5;
  color:black;

  @media (max-width: 768px) {
    font-size: 11px; /* Adjust for smaller screens */
  }
`;

interface PackageOverviewInterface {
  title:string,
  content:string
}

export default function PackageOverview({ title, content }: PackageOverviewInterface) {
  return (
    <OverviewWrapper>
      <Title>{title}</Title>
      <Paragraph>{content}</Paragraph>
    </OverviewWrapper>
  );
}
