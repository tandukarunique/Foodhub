import React from "react";
import "./Sidebar.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <IoMdAddCircleOutline />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <FaList />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <FaListAlt />

          <p>Orders Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;