import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>Discover government schemes for you...</h1>
      <p>Find personalized schemes based on eligibility.</p>
      <img
        src="/images/hero.png" 
        alt="Hero Section"
      />
    </div>
  );
};

export default Hero;
