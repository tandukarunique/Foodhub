import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/assests/logo.png";
import searchicon from "../../assets/assests/searchicon.jpg";
import { Link } from "react-router-dom";

import { CiShoppingBasket } from "react-icons/ci";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("menu");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img
          src={logo}
          style={{ height: "200px", width: "230px" }}
          alt="logo"
        />
      </Link>
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
          <Link to="./cart">
            {" "}
            <CiShoppingBasket
              style={{
                height: "35px",
                width: "auto",
                display: "flex",
                marginRight: "4px",
              }}
            />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
