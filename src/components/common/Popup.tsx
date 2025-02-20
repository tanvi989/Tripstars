import styled from "styled-components";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo/logo.png";
import { useEffect, useState } from "react";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height:86px;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 999999;
  opacity: 0.9;
   border-bottom-left-radius: 10px;   /* Adds radius to bottom left */
  border-bottom-right-radius: 10px;  /* Adds radius to bottom right */

  background: #071A29;
  transition: all 0.5s ease-in-out;
  &.active {
    background-color: #000;
    padding: 1rem 2rem;
  }
  @media (max-width: 1080px) {
    &.active {
      padding: 1rem 2rem;
    }
  }
  @media (max-width: 768px) {
  height: 71px;
  }
`;

const Logo = styled.div`
  width: 25%;
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    width: 25%;
    img {
      width: 5rem;
    }
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  li {
    padding: 0 0.6rem;
    a {
      color: #fff;
    }
  }

  @media (max-width: 1080px) {
    /* display: none; */
    position: absolute;
    background-color: #000000;
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
      padding: 1rem 1rem;
      border-bottom: 1px solid #ffffff43;
      a {
        font-size: 0.9rem;
      }
    }
    .close_icon {
      display: flex;
      justify-content: end;
      svg {
        width: 2rem;
        path {
          fill: #fff;
        }
      }
      display: none;
      @media (max-width: 1080px) {
        display: flex;
      }
    }
  }
`;

const MenuBtn = styled.div`
  svg {
    width: 2rem;
    fill: #fff;
  }
  display: none;
  @media (max-width: 1080px) {
    display: block;
  }
`;

// const AuthButtonContainer = styled.div`
//   width: 25%;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   .login_btn {
//     margin-right: 1.3rem;
//     color: #fff;
//   }
//   .signup_btn {
//     background-color: #000;
//     color: #fff;
//     padding: 0.7rem 1.2rem;
//     border-radius: 0.5rem;
//   }
// `;

export default function Navbar() {
  const [navBg, setNavBg] = useState<boolean>(false);
  const [active, setIsActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const changeNavBg = () => {
    window.scrollY >= 300 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  return (
    <NavbarContainer className={navBg ? "active" : ""}>
      <Logo>
        <img src={logoImg} alt="" />
      </Logo>
      <NavLinksContainer className={active ? "active_menu" : ""}>
        <li className="close_icon" onClick={toggleMenu}>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            ></path>
          </svg>
        </li>
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
      </NavLinksContainer>

      <MenuBtn onClick={toggleMenu}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
        </svg>
      </MenuBtn>
      {/* <AuthButtonContainer>
        <div className="login_btn">Log in</div>
        <div className="signup_btn">Sign Up</div>
      </AuthButtonContainer> */}
    </NavbarContainer>
  );
}
