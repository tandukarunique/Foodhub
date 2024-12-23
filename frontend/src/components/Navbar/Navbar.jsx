import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/assests/logo.png";
import searchicon from "../../assets/assests/searchicon.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

import { CiShoppingBasket } from "react-icons/ci";
import { StoreContext } from "../../context/StoreContext";
// import { assests } from "../../assets/assests";
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("menu");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")

  };
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
          <div className="navbar-profile">
            <FaRegUser />
            <ul className="nav-profile-dropdown">
              <li>
                <IoBagOutline />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <IoIosLogOut />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
