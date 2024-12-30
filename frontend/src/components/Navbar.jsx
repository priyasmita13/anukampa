import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="images/favicon1.png" height={70} alt="Logo" />
        </div>

        <ul className="navbar-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#domains">Domains</a></li>
          <li><a href="#schemes">Schemes</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>

        <SearchBar />
      </div>

      <div className="navbar-top-right">
        <div className="navbar-profile">
          <i className="fa fa-user-circle"></i>
        </div>
        <div className="navbar-language">
          <span>EN</span>
          <i className="fa fa-caret-down"></i>
          <i className="fa fa-globe"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
