import React from 'react';
import './Sidebar.css';
import "@fontsource/montserrat";
import plus from '../assets/plus.png';
import menu from '../assets/menu blue.png';
import meow from '../assets/meow.jpg';
import { useState } from 'react';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className= {`sidebar ${isOpen ? 'open': 'closed'}`}>
      <img src= {menu} alt="" className='menu-toggle' onClick={toggleMenu} />
      <div className="sidebar-header">
        {isOpen && <><img src={plus} alt="" /><h4>My Bot</h4></> }
      </div>
      <div className="tasks">
        <ul>
          
        </ul>
      </div>
  
      <div className="sidebar-profile">
        <img src={meow} alt="User" className="profile-img" />
        {isOpen && <span>Xin Chào, <br />User</span>}
      </div>
    </div>
  );
};

export default Sidebar;
