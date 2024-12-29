import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <SearchBar />
      <div className="hero-section">
        <img
          className="hero-background"
          src="/images/hero.png"
          alt="Hero Section"
        />
      </div>
    </header>
  );
};

export default Header;
