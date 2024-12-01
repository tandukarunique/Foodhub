import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/assests/logo.png";
import searchicon from "../../assets/assests/searchicon.jpg";
import basketicon from "../../assets/assests/basketicon.png";
const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} style={{ height: "200px", width: "230px" }} alt="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("MobileApp")}
          className={menu === "MobileApp" ? "active" : ""}
        >
          MobileApp
        </li>
        <li
          onClick={() => setmenu("Contactus")}
          className={menu === "Contactus" ? "active" : ""}
        >
          Contactus
        </li>
      </ul>
      <div className="navbar-right">
        <img
          src={searchicon}
          style={{ height: "80px", width: "auto" }}
          alt="searchicon"
        />
        <div className="navbar-search-icon">
          <img
            src={basketicon}
            style={{ height: "30px", width: "auto" }}
            alt="basketicon"
          />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
