import React, { useState } from "react";
import styled from "styled-components";
import DesktopFooter from "./DesktopFooter";
// Styled Components
const FooterContainer = styled.footer`
  background-color: #101820;
  color: white;
  padding: 20px 40px;
  text-align: center;
`;

const DesktopLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinksLeft = styled.div`
  flex: 1;
  max-width: 30%;
`;

const LinksRight = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 65%;
  justify-content: flex-start;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li<{ active?: boolean }>`
  margin: 10px 0;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#007BFF" : "transparent")};
  border-radius: 5px;

  a {
    color: ${({ active }) => (active ? "white" : "white")};
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MobileFooterContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

const FooterSection = styled.div<{ isOpen: boolean }>`
  flex: 1;
  min-width: 200px;
  margin: 10px;
  text-align: left;

  h3 {
    font-size: 18px;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      margin-left: 10px;
      font-size: 14px;
      transition: transform 0.3s ease;
    }

    &.open i {
      transform: rotate(180deg);
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};

    li {
      margin: 5px 0;

      a {
        color: #4caf50;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid #333;
    margin: 10px 0;
  }
`;

const FooterContact = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;

  p {
    margin: 5px 0;
  }

  a {
    color: #4caf50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .contact-horizontal {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 20px; 
      flex-wrap: nowrap; 
      justify-content: center; 
    }

    p {
      margin: 0;
      white-space: nowrap;
    }
  }
`;

const SocialContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinks = styled.div`
  background-color: #1a1a1a;
  padding: 10px 30px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 10px;
    display: inline-block;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;

  img {
    height: 50px;
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FooterImage = styled.img`
  margin-bottom: 10px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Social media icons
const socialMediaLinks = [
  { href: "https://www.facebook.com/tripstarsholidays?rdid=dSUD1oQcaaH2mjCk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19qbFGvRJw%2F#", src: "https://images.wanderon.in/icons/facebook", alt: "Facebook" },
  { href: "https://www.instagram.com/tripstars.in?igsh=MWlpNHVhMHp6aXA2bA==", src: "https://images.wanderon.in/icons/instagram", alt: "Instagram" },
  { href: "https://www.linkedin.com/company/tripstarsholidays/", src: "https://images.wanderon.in/icons/linkedin", alt: "LinkedIn" },
  { href: "https://www.youtube.com/@tripstarsholidays108", src: "https://images.wanderon.in/icons/youtube", alt: "YouTube" },
];

// Dropdown content
const footerSections = [
  {
    title: "India Trips",
    links: [
      { label: "Destination 1", href: "#destination1" },
      { label: "Destination 2", href: "#destination2" },
      { label: "Destination 3", href: "#destination3" },
    ],
  },
  {
    title: "International Trips",
    links: [
      { label: "Destination 1", href: "#destination1" },
      { label: "Destination 2", href: "#destination2" },
      { label: "Destination 3", href: "#destination3" },
    ],
  },
  {
    title: "Tripstars Special",
    links: [
      { label: "Special 1", href: "#special1" },
      { label: "Special 2", href: "#special2" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  },
];

const Footer: React.FC = () => {
  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (key: string) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <FooterContainer>
      <MobileFooterContainer>
        {footerSections.map((section) => (
          <FooterSection
            key={section.title}
            isOpen={dropdowns[section.title] || false}
          >
            <h3
              onClick={() => toggleDropdown(section.title)}
              className={dropdowns[section.title] ? "open" : ""}
            >
              {section.title} <i>▼</i>
            </h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <hr />
          </FooterSection>
        ))}
      </MobileFooterContainer>

      <FooterContact>
        <p><strong>Tripstars Holidays Pvt LTD</strong></p>
        <p> B, Iscon, 1817/18 Navratna Corporate Park, Ambli Rd, Ahmedabad, Gujarat 380058</p>
        <div className="contact-horizontal">
          <p>
            <a href="mailto:hello@wanderon.in">hello@tripstars.in</a>
          </p>
          <p>
            <a href="tel:+919090403075">+91 98750 97169</a>
          </p>
          <p>
            <a href="https://www.wanderon.in">www.tripstars.in</a>
          </p>
        </div>
      </FooterContact>

      <SocialContainer>
        <SocialLinks>
          {socialMediaLinks.map((link) => (
            <a href={link.href} key={link.alt} target="_blank" rel="noopener noreferrer">
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </SocialLinks>
      </SocialContainer>

      <FooterBottom>
        <FooterImage
          src="https://images.wanderon.in/footer-desktop?updatedAt=1734433384777"
          alt="Footer Graphics"
        />
        <p>© 2025 TripStars – Holidays PVT LTD, All rights reserved</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
