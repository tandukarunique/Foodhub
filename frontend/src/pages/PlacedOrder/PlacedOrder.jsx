import React, { useContext } from "react";
import "./PlacedOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlacedOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fileds">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="street" />
        <div className="multi-fileds">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Phone" />
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-total</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery charge</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total :</b>
              <b>
                Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlacedOrder;
