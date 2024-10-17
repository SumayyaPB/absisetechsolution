// import React from 'react';
import "./LoginComponent.css";
import signupImg from '../assets/signup-img.png'
import { FaRegCopyright } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

const SignComponent = () => {
  return (
    <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center vh-80">
      <div className="row col-lg-6 col-md-10 col-sm-12 mb-4 mb-lg-0">
        <img
          src={signupImg}
          alt="login-img"
          className="img-fluid"
        />
      </div>
      <div className="row col-lg-6 col-md-10 col-sm-12">
        <h2 className="heading">Welcome to Appzia LearnX</h2>
        <div className="d-flex align-items-center justify-content-center">
        
        <p>
         <FaRegUserCircle />
          <strong>Registerd Email Address</strong></p>
        </div>
        <div className="form-group">
          <p> Please enter your registered password</p>
          <label htmlFor="email" className="form-label">
           Password
          </label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="mt-3">
          <Link to='/courses'>
          <button className="w-100 button">Log In</button>
          </Link>
          
        </div>
        <div className="list-div">
          <ul className="list d-flex justify-content-around">
            <li className="list-items">Privacy</li>
            <li className="list-items">Terms</li>
            <li className="list-items">FAQ</li>
          </ul>
          <div className="text-center mt-2">
            <a href="/" className="text-decoration-none text-dark">
              Copy <FaRegCopyright /> 2024 Appzia Tec Solution. All rights
              reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignComponent;
