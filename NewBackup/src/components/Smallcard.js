import React from 'react';
import './Smallcard.css'; // Create a corresponding CSS file
import ortho from './images/Orthopedic.jpg';
import dental from './images/Dental.jpg';
import gynaec from './images/Gynaec.jpg';
import  'bootstrap/dist/css/bootstrap.min.css'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons


const Smallcard = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      {/* <div className="card">
      <img src={orthopedic} alt='orthopedic'  className='ortho-img'/>
      <h3>Orthopedic</h3>
      </div>
      <div className="card">
      <img src={orthopedic} alt='orthopedic'  className='ortho-img'/>
      <h3>Orthopedic</h3>
      </div> */}
      <div class="container">
  <div class="row">
    <div class="col-md-2">
      
        <img src={ortho} alt="orthopedic" class="card-img-top"/>
        <div class="card-body">
          <p class="card-title">Orthopedic</p>
        </div>
      
    </div>
    <div class="col-md-2">
      
      <img src={dental} alt="dental" class="card-img-top"/>
        <div class="card-body">
          <p class="card-title">Dental</p>
        </div>
      
    </div>
    <div class="col-md-2">
      
      <img src={gynaec} alt="gynaec" class="card-img-top"/>
        <div class="card-body">
          <p class="card-title">Obstetrics & Gynaecology</p>
        </div>
      
    </div>
    <div class="col-md-2">
      
      <img src={ortho} alt="orthopedic" class="card-img-top"/>
        <div class="card-body">
          <p class="card-title">Orthopedic</p>
        </div>
      
    </div>
    <div class="col-md-2">
      
      <img src={ortho} alt="orthopedic" class="card-img-top"/>
        <div class="card-body">
          <p class="card-title">Orthopedic</p>
        </div>
      
    </div>
    <div class="col-md-2">
      
      <img src={ortho} alt="orthopedic" class="card-img-top"/>
        <div class="card-body">
          <p class="card-title">Orthopedic</p>
        </div>
      
    </div>
  </div>
</div>     
      </div>
    </footer>
  );
};

export default Smallcard;