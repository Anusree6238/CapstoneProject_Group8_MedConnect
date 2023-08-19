import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create the corresponding CSS file
import logo from './images/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"><img src={logo} alt='logo' className='logo-img'/></div>
      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Contact Us</a>
      </div>
      <div className="right-section">
        <input type="text" placeholder="Search" className="search-bar" />
        <Link to="/login" className="login-button">Sign in</Link>
      </div>
    </div>
  );
};

export default Navbar;
