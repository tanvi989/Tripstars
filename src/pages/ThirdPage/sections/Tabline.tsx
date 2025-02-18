import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #ddd;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Allow tabs to wrap on smaller screens */
    gap: 10px;
    justify-content: center;
  }
`;

const Tab = styled.button<{ isActive: boolean }>`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-bottom: ${(props) => (props.isActive ? "3px solid #007bff" : "none")};
  background: none;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#007bff" : "#333")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  outline: none;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 13px; /* Adjust font size for mobile */
  }
`;

// Define prop types for the component
interface TablineProps {
  tabs: string[]; // Array of tab labels
  onTabChange?: (index: number) => void; // Callback for tab changes
}

const Tabline: React.FC<TablineProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index); // Trigger the parent callback if provided
  };

  return (
    <TabContainer>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          isActive={activeTab === index}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default Tabline;
