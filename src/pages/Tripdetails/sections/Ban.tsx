import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  width: 100vw;
  position: relative;

  .image-slider {
    width: 100%;
    height: 350px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }

    .text-overlay {
      position: absolute;
      color: black;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 1rem 2rem;
      border-radius: 8px;

      h1 {
        font-size: 2rem;
        margin: 0;
      }

      p {
        font-size: 1rem;
        margin: 0;
      }
    }
  }
`;

// Props Type Definition
type BanProps = {
  image: string; // URL or path to the image
  title: string; // Title text for the overlay
  description: string; // Description text for the overlay
};

// Functional Component
const Ban: React.FC<BanProps> = ({ image, title, description }) => {
  return (
    <Container>
      <div className="image-slider">
        <img src={image} alt={title} />
        <div className="text-overlay">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
};

export default Ban;
