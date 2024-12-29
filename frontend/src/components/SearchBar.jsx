import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <button className="advanced-search">Advanced Search</button>
        <input
          type="text"
          className="search-input"
          placeholder="Enter Keywords"
        />
        <button className="search-button">
          <i className="fa fa-search"></i> 
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
