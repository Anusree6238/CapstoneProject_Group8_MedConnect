import React from 'react';
import './Homepage.css'; // Create a corresponding CSS file
import lavenderbg from './images/lavenderbg.jpg'; // Replace with your fullscreen background image
import nurse from './images/nurse-conference.png'; // Replace with your smaller image
import Footer from './Footer';
import Smallcard from './Smallcard';

function Homepage() {
  return (
    <div className="homepage">
      <div className="fullscreen-bg">
        <img src={lavenderbg} alt="Background" className="bg-image" />
      </div>
      <div className="content">
        <div className="small-image">
          <img src={nurse} alt="Image 1" className="img1" />
        </div>
        <div className="text">
          <h2>Welcome to MedConnect</h2>
          <p className="caption">Your ultimate healthcare companion. <br />We connect you with a vast network of doctors, allowing you to schedule appointments and receive personalized care-all at your fingertips.</p>
          <button className="book-button">Book Now</button>
        </div>
      </div>
      <Smallcard />
      <Footer />
    </div>
  );
}

export default Homepage;
