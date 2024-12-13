import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assests/assests";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img className="logo" src={assets.logo} alt="" />
        <FaRegUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
