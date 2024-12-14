import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/Add" element={<Add />} />
          <Route path="/List" element={<List />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
