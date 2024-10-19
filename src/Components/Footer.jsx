// import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import graduation from "../assets/graduation.svg";
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between footer">
        <div>
          <ul className="list d-flex flex-column flex-md-row justify-content-around align-items-center">
            <li className="list-items">
              <a href="/privacy" className="text-decoration-none">Privacy</a>
            </li>
            <li className="list-items">
              <img src={graduation} alt="Graduation icon for Privacy" />
            </li>
            <li className="list-items">
              <a href="/terms" className="text-decoration-none">Terms</a>
            </li>
            <li className="list-items">
              <img src={graduation} alt="Graduation icon for Terms" />
            </li>
            <li className="list-items">
              <a href="/faq" className="text-decoration-none">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-text">
          <a href="/" className="text-decoration-none text-dark">
            Copy <FaRegCopyright /> 2024 Appzia Tec Solution. All rights
            reserved.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
