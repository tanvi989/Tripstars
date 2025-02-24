import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Sample Package Data
const packages = [
  {
    title: "Europe Tour Package",
    price: "₹ 2,75,000/-",
    image: "https://images.emtcontent.com/holiday-img/home-img/europe-banner-home.webp",
    url: "/packages/europe",
  },
  {
    title: "Australia Adventure",
    price: "₹ 2,49,000/-",
    image: "https://images.emtcontent.com/holiday-img/home-img/dubai_newbb.png",
    url: "/packages/australia",
  },
  {
    title: "Japan Cherry Blossom",
    price: "₹ 3,29,000/-",
    image: "https://images.emtcontent.com/holiday-img/home-img/kerala_newbb.png",
    url: "/packages/japan",
  },
];

const Container = styled.div`
  padding: 4rem 15rem;
  text-align: center;
  @media (max-width: 1340px) {
    padding: 3rem 5rem;
  }
  @media (max-width: 1080px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PackageCard = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const PackageInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const PackagesPage = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Title>Explore Our Tour Packages</Title>
      <PackageGrid>
        {packages.map((pkg, index) => (
          <PackageCard key={index} onClick={() => navigate(pkg.url)}>
            <img src={pkg.image} alt={pkg.title} loading="lazy" />
            <PackageInfo>
              {pkg.title}
              <br />
              {pkg.price}
            </PackageInfo>
          </PackageCard>
        ))}
      </PackageGrid>
    </Container>
  );
};

export default PackagesPage;
