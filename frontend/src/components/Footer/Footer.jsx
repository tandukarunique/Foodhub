import React from "react";
import "./Footer.css";
import { assests } from "../../assets/assests";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assests.logo} alt="" />
          <p>
            Discover the world on a plate! At FoodFusion, we bring you a curated
            selection of mouthwatering dishes from across the globe, made with
            the freshest ingredients and served with love.{" "}
          </p>
          <div className="footer-social-icons"></div>
        </div>
        <div className="footer-content-right"></div>
        <div className="footer-content-center"></div>
      </div>
    </div>
  );
};

export default Footer;
