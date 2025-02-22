


import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaPlane, FaFacebook, FaPinterest, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

// Styled Components
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #0a485f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MenuIcon = styled(FiMenu)`
  font-size: 28px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled(FaTimes)`
  font-size: 24px;
  cursor: pointer;
  float: right;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    display: none; /* Hide desktop menu on mobile */
  }
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  font-size: 18px;

  &:hover > ul {
    display: block;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 25px;
  left: 0;
  background: white;
  color: black;
  list-style: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 150px;

  li {
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

const Badge = styled.span`
  background: #ffdfdf;
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 12px;
  color: black;
  margin-left: 5px;
`;

// Sidebar for Mobile
const SidebarOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-80%")};
  width: 80%;
  height: 100%;
  background: white;
  transition: left 0.3s ease-in-out;
  box-shadow: ${(props) => (props.isOpen ? "2px 0px 10px rgba(0, 0, 0, 0.2)" : "none")};
  padding: 20px;
  z-index: 1001;
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 20px 0;
`;

const MobileNavItem = styled.li`
  font-size: 18px;
  padding: 12px 0;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar (Shared for Desktop & Mobile) */}
      <NavbarContainer>
        <Logo>
          TRIPZYGO <FaPlane />
        </Logo>

        {/* Desktop Nav */}
        <NavLinks>
          <NavItem>Home</NavItem>

          <NavItem>
            Destinations ▼
            <DropdownMenu>
              <li>Ladakh</li>
              <li>Kerala</li>
              <li>Kashmir</li>
              <li>Dubai</li>
              <li>Bali</li>
            </DropdownMenu>
          </NavItem>

          <NavItem>
            Themes ▼
            <DropdownMenu>
              <li>Adventure</li>
              <li>Honeymoon</li>
              <li>Nature</li>
              <li>Beach</li>
            </DropdownMenu>
          </NavItem>

          <NavItem>Fgfgfgfg</NavItem>

          <NavItem>
            Trip Planner <Badge>New</Badge>
          </NavItem>

          <NavItem>Contact Us</NavItem>
        </NavLinks>

        {/* Mobile Menu Icon */}
        <MenuIcon onClick={() => setMenuOpen(true)} />
      </NavbarContainer>

      {/* Mobile Sidebar */}
      <SidebarOverlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
      <Sidebar isOpen={menuOpen}>
        <CloseIcon onClick={() => setMenuOpen(false)} />

        <MobileNavList>
          <MobileNavItem>Home</MobileNavItem>
          <MobileNavItem>Destinations</MobileNavItem>
          <MobileNavItem>Themes</MobileNavItem>
          <MobileNavItem>Fgfgfgfg</MobileNavItem>
          <MobileNavItem>
            Trip Planner <Badge>New</Badge>
          </MobileNavItem>
          <MobileNavItem>Contact Us</MobileNavItem>
        </MobileNavList>

        {/* Social Icons */}
        <h4 style={{ textAlign: "center", marginTop: "20px" }}>Follow us on</h4>
        <SocialIcons>
          <FaFacebook size={22} />
          <FaPinterest size={22} />
          <FaInstagram size={22} />
          <FaLinkedin size={22} />
          <FaYoutube size={22} />
          <FaTwitter size={22} />
        </SocialIcons>
      </Sidebar>
    </>
  );
};

export default Navbar;
