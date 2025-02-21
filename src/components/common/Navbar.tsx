import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logoImg from "../../assets/images/logo/logo.png";
import { Menu, X } from "lucide-react";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 86px;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 999999;
  opacity: 0.9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #071a29;
  transition: all 0.5s ease-in-out;
  &.active {
    background-color: #000;
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    height: 71px;
  }
`;

const Logo = styled.div`
  width: 25%;
  img {
    width: 6rem;
  }
`;

const NavLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  list-style: none;
  li {
    padding: 0 0.6rem;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  @media (max-width: 1080px) {
    position: absolute;
    background-color: #000;
    width: 80vw;
    height: 100svh;
    top: 0;
    right: 0;
    display: block;
    transform: translateX(80vw);
    transition: all 0.4s ease-in-out;
    &.active_menu {
      transform: translateX(0px);
    }
    li {
      padding: 1rem;
      border-bottom: 1px solid #ffffff43;
    }
  }
`;

const MenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  @media (max-width: 1080px) {
    display: block;
  }
`;

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [active, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const changeNavBg = () => {
    setNavBg(window.scrollY >= 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  return (
    <NavbarContainer className={navBg ? "active" : ""}>
      <Logo>
        <img src={logoImg} alt="Logo" />
      </Logo>
      <NavLinksContainer className={active ? "active_menu" : ""}>
        <li>
          <Link to="/">Flights</Link>
        </li>
        <li>
          <Link to="/">Hotels</Link>
        </li>
        <li>
          <Link to="/">Holidays</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Offers</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
        </div>
      </NavLinksContainer>
      <MenuBtn onClick={toggleMenu}>{active ? <X size={24} /> : <Menu size={24} />}</MenuBtn>
    </NavbarContainer>
  );
}
