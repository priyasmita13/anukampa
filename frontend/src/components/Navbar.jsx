import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src='images/favicon1.png' height={70}/>
          {/* <h2>Anukampa</h2> */}
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#domains">Domains</a></li>
          <li><a href="#schemes">Schemes</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-top-right">
        {/* Profile Icon */}
        <div className="navbar-profile">
          <i className="fa fa-user-circle"></i>
        </div>
        {/* Language Selector */}
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
