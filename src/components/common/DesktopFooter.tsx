import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  padding: 20px 40px;
  background-color: #101820;
  color: white;
  font-family: Arial, sans-serif;
`;

const LinksLeft = styled.div`
  flex: 1;
  max-width: 25%;
  padding-right: 20px;
  border-right: 1px solid #333;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 10px 0;
    font-size: 14px;
    cursor: pointer;
    position: relative;

    &:hover {
      color: #007bff;
    }

    &.active {
      color: #007bff;
    }

    a {
      text-decoration: none;
      color: inherit;
      display: block;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #333;
    margin: 10px 0;
  }

  .new-badge {
    font-size: 10px;
    color: #ff0000;
    margin-left: 5px;
    font-weight: bold;
  }
`;

const LinksRight = styled.div`
  flex: 3;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;

  h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 15px;
    color: white;
    width: 100%;
    text-align: left; /* Ensure the heading aligns left */
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
    min-width: 150px; /* Ensure columns are consistent */
    text-align: left; /* Align list items to the left */
  }

  li {
    margin: 5px 0;

    a {
      text-decoration: none;
      color: white;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;


const Footer = () => {
  const [activeTab, setActiveTab] = useState<string>("ourOfferings");

  const linkData: Record<string, JSX.Element> = {
    ourOfferings: (
      <>
        <h2>Make your travel easy with a wide range of products and services.</h2>
        <ul>
          <li><a href="#">Flight</a></li>
          <li><a href="#">Bus</a></li>
          <li><a href="#">Airports</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Flight Check-in</a></li>
        </ul>
        <ul>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Cabs</a></li>
          <li><a href="#">Travel Guides</a></li>
          <li><a href="#">Travel Updates</a></li>
        </ul>
        <ul>
          <li><a href="#">Trains</a></li>
          <li><a href="#">Flight Status</a></li>
          <li><a href="#">Check PNR Status</a></li>
          <li><a href="#">Corporate Travel</a></li>
        </ul>
        <ul>
          <li><a href="#">Holidays</a></li>
          <li><a href="#">Airlines</a></li>
          <li><a href="#">EMT PRO</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </>
    ),
    quickLinks: (
      <>
        <h2>Quick Access to Information</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </>
    ),
    popularDestinations: (
      <>
        <h2>Popular Destinations</h2>
        <ul>
          <li><a href="#">Paris</a></li>
          <li><a href="#">New York</a></li>
          <li><a href="#">London</a></li>
          <li><a href="#">Tokyo</a></li>
        </ul>
        <ul>
          <li><a href="#">Sydney</a></li>
          <li><a href="#">Dubai</a></li>
          <li><a href="#">Singapore</a></li>
          <li><a href="#">Rome</a></li>
        </ul>
      </>
    ),
    internationalDestinations: (
      <>
        <h2>International Destinations</h2>
        <ul>
          <li><a href="#">Bali</a></li>
          <li><a href="#">Maldives</a></li>
          <li><a href="#">Thailand</a></li>
          <li><a href="#">Switzerland</a></li>
        </ul>
        <ul>
          <li><a href="#">Canada</a></li>
          <li><a href="#">Australia</a></li>
          <li><a href="#">South Africa</a></li>
          <li><a href="#">Brazil</a></li>
        </ul>
      </>
    ),
  };

  const tabs = [
    { id: "ourOfferings", label: "OUR OFFERINGS" },
    { id: "quickLinks", label: "QUICK LINKS" },
    { id: "popularDestinations", label: "POPULAR DESTINATION" },
    { id: "internationalDestinations", label: "INTERNATIONAL DESTINATION" },
  ];

  return (
    <FooterContainer>
      {/* Left Section */}
      <LinksLeft>
        <ul>
          {tabs.map((tab) => (
            <>
              <li
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
              >
                <a href="#">{tab.label}</a>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </LinksLeft>

      {/* Right Section */}
      <LinksRight>{linkData[activeTab]}</LinksRight>
    </FooterContainer>
  );
};

export default Footer;
