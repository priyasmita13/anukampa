import React from 'react';
import Navbar from './Navbar';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover government schemes for you...</h1>
          <p>Find personalized schemes based on eligibility.</p>
        </div>
        <img
          className="hero-image"
          src="/images/hero.png" 
          alt="Hero Section"
        />
      </div>
    </header>
  );
};

export default Header;
