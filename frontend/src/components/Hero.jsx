import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const images = [
    '/images/hero1.png',
    '/images/hero2.png',
    '/images/hero3.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-carousel">
      <button className="hero-arrow left" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="hero-image-container">
        <img
          className="hero-image"
          src={images[currentIndex]}
          alt={`Hero ${currentIndex + 1}`}
        />
      </div>
      <button className="hero-arrow right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Hero;
