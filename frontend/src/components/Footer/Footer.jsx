import React from "react";
import "./Footer.css";
import { assests } from "../../assets/assests";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assests.logo} alt="" />
          <p className="footerp " style={{ marginTop: "-29px",padding:"10px" }}>
            Discover the world on a plate! At FoodFusion, we bring you a curated
            selection of mouthwatering dishes from across the globe, made with
            the freshest ingredients and served with love.{" "}
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a href="mailto:your-email@example.com">
              <CgMail />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>980-3503348</li>
            <li>contact@foodhub.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
