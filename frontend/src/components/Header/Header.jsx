import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1> Order your favourite food</h1>
        <p >
          Craving your favorite meals but don’t feel like stepping out? Our food
          delivery app brings the flavors you love straight to your doorstep!
          Explore a wide variety of cuisines, from local favorites to
          international delights, all in one app.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
