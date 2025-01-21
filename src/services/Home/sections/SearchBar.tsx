// SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import TrendingDestinations from './TrandingDestinations'
// ^^^ Adjust the import path if needed (e.g. '../sections/TrendingDestinations')

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
  height: 64px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 50px;
  /* overflow: hidden;  // Comment or remove to allow dropdown to appear outside container */
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  @media (max-width: 600px) {
    max-width: 87%;
    height: 54px;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
`;

const SearchInput = styled.input`
  flex: 1;
  font-size: 1rem;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  padding-left: 60px;
  background: none;

  ::placeholder {
    color: #999;
    text-align: center;
  }
`;

const SearchButton = styled.button`
  background: #EF6614;
  color: #fff;
  width: 169px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  right: 0;
  top: 0;

  border-radius: 100px;
  border: 0;
  outline: none;

  font-size: 18px;
  font-family: "Poppins", sans-serif !important;
  cursor: pointer;

  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #d55812;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const SearchBar = () => {
  const [showTrending, setShowTrending] = useState(false);

  const toggleTrending = () => {
    // Toggle trending destinations visibility on input click
    setShowTrending(prev => !prev);
  };

  return (
    <SearchBarContainer>
      <SearchIcon 
        src="https://images.emtcontent.com/holiday-img/home-img/search.svg"
        alt="Search Icon"
      />
      <SearchInput
        placeholder="Enter Your Dream Destination!"
        onClick={toggleTrending}   // Toggle on click
      />
      <SearchButton>Search</SearchButton>

      {/* Render the trending destinations dropdown if showTrending is true */}
      {showTrending && <TrendingDestinations />}
    </SearchBarContainer>
  );
};

export default SearchBar;