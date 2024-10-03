import React from 'react';
import './SearchBar.css';
import searchLogo from '../assets/search-bar.png'
import warning from '../assets/warning-sign.png'

const SearchBar = () =>{
  return (
    <div className="search-container">
      <img src={warning} alt="" className='warning'/>
      <div className='search'>
      <img src={searchLogo} alt="" />
      <input type="text" placeholder='Search'/>
  </div>
    </div>
  );
};

export default SearchBar;
