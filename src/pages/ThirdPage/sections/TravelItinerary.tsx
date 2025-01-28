import React from "react";
import styled from "styled-components";

// Styled Components


const ItineraryContainer = styled.div`
  width: 90%;
  max-width: 850px;
  margin: 40px auto;
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 35px;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #d4af37;
  z-index: 1;
`;

const DayBlock = styled.div`
  display: flex;
  margin-bottom: 40px;
  position: relative;
`;

const DayCircle = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #d4af37, #b4881d);
  border-radius: 50%;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.4);

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
`;

const DayContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 20px 25px;
  flex-grow: 1;
  position: relative;
  z-index: 2;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const DayHeading = styled.h3`
  color: #d4af37;
  font-size: 20px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const DayList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DayListItem = styled.li`
  margin: 10px 0;
  padding-left: 25px;
  position: relative;
  color: #555;
  font-size: 16px;
  line-height: 1.8;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #d4af37;
    font-weight: bold;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    height: 70px;
  }
`;

// Sample data for itinerary
const itineraryData = [
  {
    day: 1,
    heading: "Srinagar Arrival & Sightseeing",
    activities: [
      "Arrive Srinagar airport, meet representative",
      "Drive to hotel, check-in",
      "1-hr Shikara ride in Dal Lake",
      "Visit Mughal Gardens, Shankaracharya Temple",
      "Explore local Handicrafts Showroom",
      "Overnight in hotel",
    ],
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
    ],
  },
  {
    day: 2,
    heading: "Sonmarg Excursion",
    activities: [
      "Breakfast",
      "Full-day excursion to Sonmarg",
      "Explore Sindh Valley, flower-streamed meadows",
      "Optional: Pony ride to Thajiwas glacier",
      "Drive back to Srinagar",
      "Overnight in hotel",
    ],
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
    ],
  },
  {
    day: 3,
    heading: "Srinagar to Gulmarg",
    activities: [
      "Breakfast",
      "Drive to Gulmarg (56 km, 2 hours)",
      "Explore ski slopes, golf course, and Nanga Parbat views",
      "Optional: Trek to Khilanmarg, Gondola ride to Kongdori",
    ],
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
    ],
  },
  {
    day: 4,
    heading: "Pahalgam Day Trip",
    activities: [
      "Breakfast",
      "Drive to Pahalgam via Pampore, Avantipura, and Bijbehara",
      "Pass through Anantnag, scenic Lidder river views",
      "Arrive Pahalgam, check-in hotel",
      "Spend day at leisure",
      "Overnight in Pahalgam hotel",
    ],
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
    ],
  },
  {
    day: 5,
    heading: "Departure",
    activities: [
      "After breakfast, enjoy the morning in Pahalgam",
      "Drive to Srinagar to airport for onward destination",
    ],
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipNLGXB7H2s1hBJYyAKAa2d5sJUCz0aV-exbIqNQ=s680-w680-h510",
    ],
  },
];

// Component
const TravelItinerary: React.FC = () => {
  return (
    <div>
   
      <ItineraryContainer>
        <TimelineLine />
        {itineraryData.map((day) => (
          <DayBlock key={day.day}>
            <DayCircle>{day.day}</DayCircle>
            <DayContent>
              <DayHeading>{day.heading}</DayHeading>
              <DayList>
                {day.activities.map((activity, index) => (
                  <DayListItem key={index}>{activity}</DayListItem>
                ))}
              </DayList>
              <ImageGrid>
                {day.images.map((image, index) => (
                  <Image src={image} alt={`Day ${day.day} Image ${index + 1}`} key={index} />
                ))}
              </ImageGrid>
            </DayContent>
          </DayBlock>
        ))}
      </ItineraryContainer>
    </div>
  );
};

export default TravelItinerary;
