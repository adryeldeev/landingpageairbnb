import React, { useState } from 'react';
import '../styles/HeaderStyles.css';
import HotelImage from '../image/Airbnb-Logo-PNG-Pic.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const navList = document.querySelector('.nav-list');
    if (navList) {
      navList.classList.toggle('open'); // Toggle the class for the navigation
    }
  };

  return (
    <div className='container'>
      <img src={HotelImage} alt="hotel" />
      <div className="input">
        <input type="text" placeholder='Search' />
      </div>
      <div className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <a>For work <span>New</span></a>
            <a>Help</a>
            <a>Sign Up</a>
            <a>Log In</a>
          </ul>
        </nav>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Header;