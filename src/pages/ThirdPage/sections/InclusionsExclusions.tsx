import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle, FaCheck, FaTimes } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 20px;
  padding:20px;
  display: flex;
  justify-content: center;
`;

const OverviewWrapper = styled.div`
  padding: 20px;
  margin-top:20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
`;

const Box = styled.div<{ borderColor: string; bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${(props) => props.borderColor};
  width: 100%;
`;

const Title = styled.h3`
  margin: 0 0 15px;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Icon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 250px;
  overflow-y: auto;
  padding-right: 10px;
`;

const ListItem = styled.li<{ iconColor: string }>`
  margin-bottom: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #333;
 
  svg {
    color: ${(props) => props.iconColor};
    margin-right: 10px;
  }
`;

// Data Type
interface SectionData {
  title: string;
  items: string[];
  borderColor: string;
  bgColor: string;
  icon: React.ReactNode;
  iconColor: string;
}

// Data
const sections: SectionData[] = [
  {
    title: "Inclusions",
    items: [
      "02 nights accommodation in Sheraton Skyline / Mercure LHR / Holiday Inn or similar Hotel in London",
      "03 nights accommodation in B&B / Millennium CDG / Hilton CDG or similar hotel in Paris",
      "01 night accommodation in Novotel / NH / Fletcher or similar hotel in Netherlands",
      "01 night accommodation in Mercure / Rilano / NH or similar hotel in Germany",
      "Daily breakfast included in the stay",
      "Airport transfers in a private vehicle",
      "Guided city tours in Paris and London",
      "All hotel taxes included",
    ],
    borderColor: "#28a745",
    bgColor: "#e7f8e8",
    icon: <FaCheckCircle />,
    iconColor: "#28a745",
  },
  {
    title: "Exclusions",
    items: [
      "The cost of the Airfare, Passport, POE charges, Visa charges, Overseas Travel Insurance, etc.",
      "Any expenses of personal nature such as Porterage, Laundry, Alcohol, Food, or Drinks not in the regular menus provided by us, minibar, and telephone calls",
      "Any extra meals not included in the itinerary. Meals are pre-set and a choice of menu is not available",
      "Cost of excursions, city sightseeing, entrance fees, and local guides availed of by passengers, other than those mentioned under tour inclusions",
      "Any medical expenses or emergency evacuation charges",
      "Travel insurance or baggage loss compensation",
      "Tips to guides, drivers, and hotel staff",
    ],
    borderColor: "#dc3545",
    bgColor: "#fdecec",
    icon: <FaTimesCircle />,
    iconColor: "#dc3545",
  },
];

// Main Component
const InclusionsExclusions: React.FC = () => {
  return (
    <OverviewWrapper>
    <Container>
      <Wrapper>
        {sections.map(({ title, items, borderColor, bgColor, icon, iconColor }, index) => (
          <Box key={index} borderColor={borderColor} bgColor={bgColor}>
            <Title>
              <Icon>{icon}</Icon>
              {title}
            </Title>
            <List>
              {items.map((item, i) => (
                <ListItem key={i} iconColor={iconColor}>
                  {title === "Inclusions" ? <FaCheck /> : <FaTimes />}
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Wrapper>
    </Container>
    </OverviewWrapper>
  );
};

export default InclusionsExclusions;