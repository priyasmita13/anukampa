import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className="navbar-container">
      <button className="toggle-search-btn" onClick={toggleSearchBar}>
        <i className="fa fa-search"></i>
      </button>
      {isSearchVisible && (
        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter Keywords"
          />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
