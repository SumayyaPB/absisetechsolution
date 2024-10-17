// import React from 'react'
import { FaDove } from "react-icons/fa6";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="logo">
        <div className="dove-icon">
          <FaDove className="dove"/>
        </div>
        <div className="logo-txt">
          <h1>APPZIA</h1>
          <p>techsolutions</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
