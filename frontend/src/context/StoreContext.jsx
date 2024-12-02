import { createContext } from "react";
import { food_list } from "../assets/assests";

export const StoreContext = createContext({}); // Default value is an empty object

const StoreContextProvider = ({ children }) => {
  const contextValue = {
    food_list, // This will provide food_list to the context
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children} {/* Render the children components */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
