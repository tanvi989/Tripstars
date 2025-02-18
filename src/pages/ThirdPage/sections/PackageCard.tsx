import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const PlacesToVisit = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const PackageIncludesWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  text-align: center;
`;

const Divider = styled.hr`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border: none;
  border-top: 1px solid #ddd;
  z-index: 0; /* Place behind the button text */
`;

const PackageIncludesButton = styled.div`
  display: inline-block;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  padding: 5px 15px;
  position: relative;
  z-index: 1; /* Place above the divider */

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #555;
  margin: 10px;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  span {
    font-size: 13px;
    color: #333;
  }

  @media (max-width: 768px) {
    font-size: 11px;

    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export default function PackageCard() {
  return (
    <CardWrapper>
      <Duration>
        <img
          src="https://www.easemytrip.com/holidays/Detailcss/newcss/img/clock-holiday-v1.svg"
          alt="Duration"
        />
        <strong>Duration:</strong> 5 Nights & 6 Days
      </Duration>
      <PlacesToVisit>
        <img
          src="https://www.easemytrip.com/holidays/Detailcss/newcss/img/location-holiday.svg"
          alt="Location"
        />
        <strong>Places to Visit:</strong> 1N Athirapally | 2N Munnar | 1N Thekkady | 1N Alleppy
      </PlacesToVisit>
      <PackageIncludesWrapper>
        <Divider />
        <PackageIncludesButton>Package Includes</PackageIncludesButton>
      </PackageIncludesWrapper>
      <IconsWrapper>
        <IconContainer>
          <img
            src="https://www.easemytrip.com/holidays/Content/customize/img/hotel-1.svg"
            alt="Hotel"
          />
          <span>Hotel</span>
        </IconContainer>
        <IconContainer>
          <img
            src="https://www.easemytrip.com/holidays/Content/customize/img/sightseeing-1.svg"
            alt="Sightseeing"
          />
          <span>Sightseeing</span>
        </IconContainer>
        <IconContainer>
          <img
            src="https://www.easemytrip.com/holidays/Content/customize/img/transfer-1.svg"
            alt="Transfer"
          />
          <span>Transfer</span>
        </IconContainer>
        <IconContainer>
          <img
            src="https://www.easemytrip.com/holidays/Content/customize/img/meal-1.svg"
            alt="Meal"
          />
          <span>Meal</span>
        </IconContainer>
      </IconsWrapper>
    </CardWrapper>
  );
}
