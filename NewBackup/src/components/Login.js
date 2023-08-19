import React from 'react';
import './Login.css';
import lavenderbg from './images/lavenderbg.jpg'; // Replace with your fullscreen background image
import nurse from './images/nurse-conference.png'; 
import Footer from './Footer';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';



const Login = () => {
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
        </div>
      </div>
      <div>

<main className="main">

 <div className="login-container">

  <h2>Login</h2>

  <Formik

   initialValues={{

    username: '',

    password: '',

   }}

   validationSchema={Yup.object({

    username: Yup.string().required('Required'),

    password: Yup.string().required('Required'),

   })}

   onSubmit={(values) => {

    // Handle login logic here

    console.log('Logging in with:', values);

   }}

  >

   <Form className="login-form">

    <div className="form-group">

     <label htmlFor="username">Username</label><br></br>

     <Field type="text" id="username" name="username" />

     <ErrorMessage name="username" component="div" className="error-message" />

    </div>

    <div className="form-group">

     <label htmlFor="password">Password</label><br></br>

     <Field type="password" id="password" name="password" />

     <ErrorMessage name="password" component="div" className="error-message" />

    </div>

    <button type="submit" className="login-button">Login</button>

   </Form>

  </Formik>

  <Link to="/register" className="register-link">

  New user? Register here

 </Link>

 </div>

</main>

</div>
      <Footer />
    </div>
    );
};

export default Login;

