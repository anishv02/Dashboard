import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar-menu">
      <li>
        <span to="/">Home</span>
      </li>
      <li>
        <span to="/bill-generation">Bill Generation</span>
      </li>
      <li>
        <span>Data Analysis</span>
      </li>
      <li>
        <span>Add New Product</span>
      </li>
    </ul>
    <div className="logout">
      <span>Logout</span>
    </div>
  </div>
);

export default Sidebar;
