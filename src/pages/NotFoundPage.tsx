import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #9face6);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #ff6f61;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e85d4a;
  }
`;

const NotFoundImage = styled.div`
  margin-top: 3rem;
  img {
    width: 80%;
    max-width: 400px;
  }
`;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Title>403 - Page Not Found</Title>
      <Subtitle>
        Oops! The page you're looking for doesn't exist or has been moved.
      </Subtitle>
      <BackButton onClick={() => navigate("/")}>Go Back Home</BackButton>
      <NotFoundImage>
        <img
          src="https://via.placeholder.com/400x300?text=Lost+in+Europe!"
          alt="404 Illustration"
        />
      </NotFoundImage>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
