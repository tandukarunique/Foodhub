import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoods = category === "All" ? food_list : food_list.filter(food => food.name === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoods.map(food => (
          <FoodItem
            key={food._id}
            id={food._id}
            name={food.name}
            price={food.price}
            description={food.description}
            image={food.image}
          />
        ))}
      </div>
      <br></br>
      <br/>
    </div>
  );
};

export default FoodDisplay;
