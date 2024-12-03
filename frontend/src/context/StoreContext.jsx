import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assests";

// Create the context
export const StoreContext = createContext({});

const StoreContextProvider = ({ children }) => {
  // State to track cart items
  const [cartItems, setCartItems] = useState({}); // Initialize as an empty object

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment or initialize to 1
    }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1; // Decrease quantity if more than 1
      } else {
        delete updatedCart[itemId]; // Remove the item if the quantity is 0 or less
      }
      return updatedCart;
    });
  };

  // Log cart items whenever they change
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Context value
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
