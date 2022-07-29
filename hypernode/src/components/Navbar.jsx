import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="right">
        <div>
          <img src="https://avatars.githubusercontent.com/u/49002615?s=200&v=4" />
          <p>CourseXpert</p>
        </div>
        <h4>Courses</h4>
        <h4>Topics</h4>
        <h4>Blog</h4>
      </div>
      <div className="left">
        <select className="select">
          <option value="">English</option>
          <option value="">Espanol</option>
          <option value="">Portugese</option>
        </select>
        <button className="login">Log in</button>
      </div>
    </div>
  );
};
