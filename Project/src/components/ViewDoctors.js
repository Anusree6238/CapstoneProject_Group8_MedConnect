import React from 'react';

import { Link } from 'react-router-dom';

import './ViewDoctors.css';
import doctor1 from './images/doctor1.jpg';
import logo from './images/logo.jpg';



const ViewDoctors = () => {

 return (

  <div className="doctor-page">

   <header className="doctor-header">

    <nav className="doctor-nav">

     <div className="logo">

      <img src={logo} alt="Logo" />

     </div>

     <ul className="nav-links">

      <li><Link to="/">Home</Link></li>

      <li><Link to="/men">Men</Link></li>

      <li><Link to="/women">Women</Link></li>

      {/* Add more navigation links */}

     </ul>

     <div className="nav-icons">

      <Link to="/wishlist" className="nav-icon">

       <i className="fas fa-heart"></i>

      </Link>

      <Link to="/cart" className="nav-icon">

       <i className="fas fa-shopping-cart"></i>

      </Link>

     </div>

    </nav>

   </header>

   <main className="doctor-main">

    {/* Display men's clothing and products */}

    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>
    <div className="doctor-card">

     <img src={doctor1} alt="Doctor 1" />

     <h3>Dr. Anna Joseph</h3>

     <p>Paediatrician</p>

     <button className="book-button">Book Now</button>

    </div>

    {/* Add more product cards */}

   </main>

   <footer className="doctor-footer">

    <p>&copy; 2023 Your Company. All rights reserved.</p>

   </footer>

  </div>

 );

};

export default ViewDoctors;

