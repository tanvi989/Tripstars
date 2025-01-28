import React from 'react';
import styled from 'styled-components';
import {
  FaPlane,
  FaHotel,
  FaUtensils,
  FaTaxi,
  FaWater,
  FaBan,
  FaTimesCircle,
  FaMoneyBillWave,
  FaEllipsisH,
  FaPassport,
} from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 10px;
  background-color: #fff;
`;

const Box = styled.div<{ borderColor: string }>`
  flex: 1 1 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 3px solid ${({ borderColor }) => borderColor};
`;

const Title = styled.h3`
  font-size: 1.25em;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    border: none;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
    width: calc(100% + 20px);
    position: absolute;
    left: -10px;
    bottom: 0;
  }
`;

const OverviewWrapper = styled.div`
  margin:20px 0px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Icon = styled.span<{ color: string }>`
  margin-right: 10px;
  color: ${({ color }) => color};
`;

const inclusionsData = [
  {
    icon: <FaPlane />,
    text: 'Return flight ticket Ex DEL on VIETJET WITH 20 KG BAGGAGE + 7 Cabin BAGGAGE (NO MEAL)',
  },
  { icon: <FaHotel />, text: '06 nights’ accommodation in above mentioned hotel.' },
  { icon: <FaUtensils />, text: 'Daily breakfast at hotel/resort.' },
  { icon: <FaTaxi />, text: 'Return airport transfers on pvt basis.' },
  { icon: <FaWater />, text: 'Full Day Water Sport (1x banana boat + 1x Jet Ski + Parasailing) followed by Uluwatu Temple Tour' },
];

const exclusionsData = [
  { icon: <FaBan />, text: 'Travel Insurance' },
  { icon: <FaTimesCircle />, text: 'Optional Tour' },
  { icon: <FaMoneyBillWave />, text: 'Tipping' },
  { icon: <FaEllipsisH />, text: 'Any other expenses' },
  { icon: <FaPassport />, text: 'Visa' },
];

const InclusionsExclusions: React.FC = () => {
  return (
    <OverviewWrapper>
    <Container>
      <Box borderColor="#4CAF50">
        <Title>Inclusions</Title>
        <List>
          {inclusionsData.map((item, index) => (
            <ListItem key={index}>
              <Icon color="#4CAF50">{item.icon}</Icon>
              {item.text}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box borderColor="#F44336">
        <Title>Exclusions</Title>
        <List>
          {exclusionsData.map((item, index) => (
            <ListItem key={index}>
              <Icon color="#F44336">{item.icon}</Icon>
              {item.text}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
    </OverviewWrapper>
  );
};

export default InclusionsExclusions;
