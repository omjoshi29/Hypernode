import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="right">
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_tx_group.png/1200px-Logo_tx_group.png?20200224103630" />
          <p>TechXpert</p>
        </div>
        <p>Courses</p>
        <p>Topics</p>
        <p>Blogs</p>
      </div>
      <div className="left">
        <select className="select">
          <option value="">English</option>
          <option value="">Espanol</option>
          <option value="">Portugese</option>
        </select>
        {/* <button className="login">Log in</button> */}
      </div>
    </div>
  );
};
