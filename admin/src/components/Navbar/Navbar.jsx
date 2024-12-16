import React from "react";
import "./Navbar.css";

import { FaRegUserCircle } from "react-icons/fa";
import { assests } from "../../assets/assests";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img className="logo" src={assests.logo} alt="Logo" />
        <FaRegUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
