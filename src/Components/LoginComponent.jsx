// import React from 'react';
import "./LoginComponent.css";
import graduation from "../assets/graduation.svg";
import { FaRegCopyright } from "react-icons/fa6";
import signupImg from "../assets/signup-img.png";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center vh-80">
      <div className="row col-lg-6 col-md-10 col-sm-12 mb-4 mb-lg-0">
        <img src={signupImg} alt="login-img" className="img-fluid" />
      </div>
      <div className="row col-lg-6 col-md-10 col-sm-12">
        <h2 className="heading">Welcome to Appzia LearnX</h2>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Enter Email Address
          </label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="mt-3">
          <Link to="/login">
            <button className="button w-100">Continue</button>
          </Link>
        </div>
        <div className="list-div">
          <ul className="list d-flex justify-content-around">
            <li className="list-items">Privacy</li>
            <li className="list-items">
              <img src={graduation} alt="Graduation" />
            </li>
            <li className="list-items">Terms</li>
            <li className="list-items">
              <img src={graduation} alt="Graduation" />
            </li>
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

export default LoginComponent;
