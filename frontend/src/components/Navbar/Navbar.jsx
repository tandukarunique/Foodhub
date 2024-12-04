import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/assests/logo.png";
import searchicon from "../../assets/assests/searchicon.jpg";
import basketicon from "../../assets/assests/basketicon.png";
import { Link } from "react-router-dom";
const Navbar = ({setShowLogin}) => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} style={{ height: "200px", width: "230px" }} alt="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setmenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setmenu("MobileApp")}
          className={menu === "MobileApp" ? "active" : ""}
        >
          MobileApp
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("Contactus")}
          className={menu === "Contactus" ? "active" : ""}
        >
          Contactus
        </a>
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
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
