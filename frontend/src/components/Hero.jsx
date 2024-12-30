import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const images = [
    '/images/hero1.png',
    '/images/hero2.png',
    '/images/hero3.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-carousel">
      <div
        className="hero-image-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="hero-image"
            src={image}
            alt={`Hero ${index + 1}`}
          />
        ))}
      </div>
      <button
        className="hero-arrow left"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      >
        &#8249;
      </button>
      <button
        className="hero-arrow right"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          )
        }
      >
        &#8250;
      </button>
    </div>
  );
};

export default Hero;
