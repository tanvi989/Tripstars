import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/logo.png";
const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 60vh;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;

  @media (max-width: 768px) {
    padding: 4rem 2rem;  /* Reduce padding for mobile */
    flex-direction: column; /* Stack sections vertically */
    height: auto; /* Allow height to adapt based on content */
  }
`;

const LogoSection = styled.div`
  flex: 1;
  max-width: 25%;
  img {
    width: 50%;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 100%;  /* Make logo section full-width on small screens */
    text-align: center;  /* Center align text on smaller screens */
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-evenly;
  max-width: 50%;
  
  h4 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 0.9rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center; /* Center the links section */
    margin-top: 2rem; /* Add spacing between sections */
  }
`;

const SubscribeSection = styled.div`
  flex: 1;
  max-width: 25%;
  text-align: right;

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    align-items: center;

    input {
      flex: 1;
      padding: 0.8rem;
      border-radius: 0.5rem 0 0 0.5rem;
      border: none;
      outline: none;
    }

    button {
      padding: 0.8rem 1rem;
      border-radius: 0 0.5rem 0.5rem 0;
      border: none;
      background-color: #28a745;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center; /* Center the subscribe section */
    margin-top: 2rem; /* Add spacing between sections */
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  width: 100%;
  font-size: 0.8rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;

  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust padding for mobile */
    font-size: 0.9rem; /* Increase font size slightly */
  }
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        {/* Logo Section */}
        <LogoSection>
          <img src={logoImg} alt="TripStars Logo" />
          <p>
            There are many variations of passages of available but it is the
            majority of suffered that a alteration in that some dummy text.
          </p>
        </LogoSection>
 
        {/* Links Section */}
        <LinksSection>
          <ul>
            <h4>About</h4>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/find-travel">Find Travel</Link>
            </li>
            <li>
              <Link to="/popular-destinations">Popular Destinations</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
          <ul>
            <h4>Support</h4>
            <li>
              <Link to="/support">Customer Support</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy & Policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact Channels</Link>
            </li>
          </ul>
        </LinksSection>
 
        {/* Subscribe Section */}
        <SubscribeSection>
          <h4>LET'S STAY CONNECTED</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">→</button>
          </form>
        </SubscribeSection>
      </FooterContainer>
 
      {/* Copyright Section */}
      <CopyrightSection>
        Copyright © TripStars. All rights reserved.
      </CopyrightSection>
    </>
  );
}
 