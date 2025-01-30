import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  min-height: 100vh;
`;

const ItineraryWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 14px;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const BoxHead = styled.div<{ isOpen: boolean }>`
  background: linear-gradient(90deg, #c7dffe 0%, #d8f2ff 100%);
  padding: 10px 21px;
  border-bottom: 1px solid #bdbfc2;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  border-radius: 14px 14px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ItineraryContent = styled.div`
  padding-bottom: 20px;
  overflow: hidden;
`;

const List = styled.ul`
  padding-left: 41px;
  list-style: none;
  margin: 0;
  padding: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  color: #333;
 
  &::before {
    content: "•";
    color: #0077cc;
    position: absolute;
    left: 0;
    font-size: 18px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 15px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;

// Data Type
interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  images: string[];
  isOpen: boolean;
}

// Itinerary Data
const itineraryData: ItineraryDay[] = [
  {
    day: 1,
    title: "Day 1: Arrival in Bali",
    activities: [
      "Arrival at Ngurah Rai International Airport.",
      "Private transfer to your hotel in Kuta.",
      "Check-in and leisure time to relax or explore nearby areas.",
      "Overnight stay at the hotel in Kuta."
    ],
    images: [
      "https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg",
      "https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg"
    ],
    isOpen: true
  },
  {
    day: 2,
    title: "Day 2: Ubud Exploration",
    activities: [
      "Visit the Sacred Monkey Forest Sanctuary.",
      "Explore Ubud Art Market & Ubud Palace.",
      "Enjoy traditional Balinese cuisine for lunch.",
      "Visit Tegalalang Rice Terraces.",
      "Return to hotel in the evening."
    ],
    images: [
      "https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg"
    ],
    isOpen: true
  },
  {
    day: 3,
    title: "Day 3: Beach & Water Activities",
    activities: [
      "Breakfast at hotel.",
      "Enjoy water sports in Nusa Dua (jet ski, banana boat).",
      "Lunch at a beachside restaurant.",
      "Relax at Seminyak Beach.",
      "Sunset at Tanah Lot Temple."
    ],
    images: [],
    isOpen: true
  },
  {
    day: 4,
    title: "Day 4: Cultural Tour",
    activities: [
      "Visit Tirta Empul (Holy Spring Temple).",
      "Explore Goa Gajah (Elephant Cave).",
      "Lunch at a traditional Balinese restaurant.",
      "Experience Balinese dance performance in the evening."
    ],
    images: [],
    isOpen: true
  },
  {
    day: 5,
    title: "Day 5: Adventure Day",
    activities: [
      "Early morning trek to Mount Batur for sunrise.",
      "Breakfast with a scenic view.",
      "ATV Ride through Bali’s jungles.",
      "Visit a coffee plantation.",
      "Return to hotel and relax."
    ],
    images: [],
    isOpen: true
  },
  {
    day: 6,
    title: "Day 6: Departure",
    activities: [
      "Breakfast at hotel.",
      "Last-minute shopping in Kuta.",
      "Check-out and transfer to airport.",
      "Flight back home."
    ],
    images: [],
    isOpen: false
  }
];

// Main Itinerary Component
const BaliItinerary: React.FC = () => {
  const [itinerary, setItinerary] = useState(itineraryData);

  const toggleItinerary = (day: number) => {
    setItinerary((prev) =>
      prev.map((item) =>
        item.day === day ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <Container>
      {itinerary.map(({ day, title, activities, images, isOpen }) => (
        <ItineraryWrapper key={day}>
          <BoxHead isOpen={isOpen} onClick={() => toggleItinerary(day)}>
            <h2>{title}</h2>
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </BoxHead>
          {isOpen && (
            <ItineraryContent>
              <List>
                {activities.map((activity, index) => (
                  <ListItem key={index}>{activity}</ListItem>
                ))}
              </List>
              <ImageContainer>
                {images.map((img, index) => (
                  <Image key={index} src={img} alt="Itinerary Image" />
                ))}
              </ImageContainer>
            </ItineraryContent>
          )}
        </ItineraryWrapper>
      ))}
    </Container>
  );
};

export default BaliItinerary;