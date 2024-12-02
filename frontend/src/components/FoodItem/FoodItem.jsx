import React from "react";
import "./FoodItem.css";
import { assests } from "../../assets/assests";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
      <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          
        </div>
        <p className="food-item-desc ">{description}</p>
        <p className="food-item-price">Rs. {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
