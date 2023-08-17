import React from 'react';


import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage.js';

import Login from './components/Login.js';

import UserRegister from './components/UserRegister.js';
import ViewDoctors from './components/ViewDoctors.js';

import './components/Homepage.css';

function App() {

 return (
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<Homepage />} />

    <Route path="/register" element={<UserRegister />} />

    <Route path="/login" element={<Login />} />
    <Route path="/viewdoctors" element={<ViewDoctors/>}/>

   </Routes>
   
   </BrowserRouter>

 );

}

export default App;