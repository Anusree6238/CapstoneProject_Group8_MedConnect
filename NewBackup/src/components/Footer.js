import React from 'react';
import './Footer.css'; // Create a corresponding CSS file
import logo from './images/logo.png';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="logo"><img src={logo} alt='logo' className='logo-img'/></div>
      <strong className="subscribe">Subscribe to our newsletter</strong>
      <div className="subscribe-box">
      <div className="email-box">
      <AiOutlineMail className="mailbox-icon" />
          <input type="text" placeholder="Enter your email" className="email-input" />
        </div>
        <button className="subscribe-button">Subscribe</button>
        </div>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="social-icons">
            <FaTwitter className="social-icon twitter-icon" />
            <FaFacebookF className="social-icon facebook-icon" />
            <FaLinkedinIn className="social-icon linkedin-icon" />
            <FaInstagram className="social-icon instagram-icon" />
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
