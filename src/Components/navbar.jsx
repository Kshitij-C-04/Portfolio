import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={-80} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-80} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={-80} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="tech" smooth={true} duration={500} offset={-80} onClick={closeMenu}>
            Technologies
          </Link>
        </li>
        <li>
          <Link to="mywork" smooth={true} duration={500} offset={-80} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-80} onClick={closeMenu}>
            Contact
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
