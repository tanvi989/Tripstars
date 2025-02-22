import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaFacebook, FaPinterest, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

// Styled Components
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: white;
  padding: 10px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const MenuIcon = styled(FiMenu)`
  font-size: 24px;
  cursor: pointer;
`;

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

const CloseIcon = styled(FaTimes)`
  font-size: 24px;
  cursor: pointer;
  float: right;
`;

const BackIcon = styled(FaArrowLeft)`
  font-size: 20px;
  cursor: pointer;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 20px 0;
`;

const NavItem = styled.li`
  font-size: 18px;
  padding: 12px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Submenu = styled.ul`
  list-style: none;
  padding-left: 15px;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

// ** Navbar Component **
const MobileNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  return (
    <>
      <NavbarContainer>
        <MenuIcon onClick={() => setMenuOpen(true)} />
      </NavbarContainer>

      {/* Overlay for Background Blur */}
      <SidebarOverlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

      {/* Sidebar */}
      <Sidebar isOpen={menuOpen}>
        {submenuOpen ? (
          <>
            <BackIcon onClick={() => setSubmenuOpen(null)} />
            <CloseIcon onClick={() => setMenuOpen(false)} />
            <h3>{submenuOpen}</h3>
            {submenuOpen === "Destinations" && (
              <Submenu>
                <h4>Domestic</h4>
                <NavItem>Ladakh</NavItem>
                <NavItem>Kerala</NavItem>
                <NavItem>Kashmir</NavItem>
                <NavItem>Andaman</NavItem>
                <NavItem>Rajasthan</NavItem>
                <h4>International</h4>
                <NavItem>Europe</NavItem>
                <NavItem>Dubai</NavItem>
                <NavItem>Bali</NavItem>
                <NavItem>Maldives</NavItem>
                <NavItem>Vietnam</NavItem>
                <NavItem>Singapore</NavItem>
                <NavItem>Malaysia</NavItem>
                <NavItem>Thailand</NavItem>
                <NavItem>Mauritius</NavItem>
              </Submenu>
            )}
            {submenuOpen === "Themes" && (
              <Submenu>
                <NavItem>Adventure</NavItem>
                <NavItem>Honeymoon</NavItem>
                <NavItem>Nature</NavItem>
                <NavItem>Beach</NavItem>
              </Submenu>
            )}
          </>
        ) : (
          <>
            <CloseIcon onClick={() => setMenuOpen(false)} />
            <NavList>
              <NavItem>Home</NavItem>
              <NavItem onClick={() => setSubmenuOpen("Destinations")}>
                Destinations ➝
              </NavItem>
              <NavItem onClick={() => setSubmenuOpen("Themes")}>
                Themes ➝
              </NavItem>
              <NavItem>Blogs</NavItem>
              <NavItem>Trip Planner <span style={{ background: "#FFDFDF", padding: "3px 6px", borderRadius: "5px", fontSize: "12px" }}>New</span></NavItem>
              <NavItem>Contact Us</NavItem>
            </NavList>

            <h4 style={{ textAlign: "center", marginTop: "20px" }}>Follow us on</h4>
            <SocialIcons>
              <FaFacebook size={22} />
              <FaPinterest size={22} />
              <FaInstagram size={22} />
              <FaLinkedin size={22} />
              <FaYoutube size={22} />
              <FaTwitter size={22} />
            </SocialIcons>
          </>
        )}
      </Sidebar>
    </>
  );
};

export default MobileNavbar;
