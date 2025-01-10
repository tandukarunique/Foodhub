import React, { useContext } from "react";
import "./FoodItem.css";
import { assests } from "../../assets/assests";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          // src={url + "/images/" + image}
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => {
              addToCart(id);
            }}
            src={assests.add_icon_white}
            style={{ height: "23px", width: "23px" }}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              style={{ height: "23px", width: "23px" }}
              src={assests.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              style={{ height: "23px", width: "23px" }}
              src={assests.add_icon_green}
              alt=""
            />
          </div>
        )}
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
