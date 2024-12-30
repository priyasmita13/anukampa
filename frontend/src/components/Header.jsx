import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Hero from './Hero';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <SearchBar />
      <Hero /> 
    </header>
  );
};

export default Header;
