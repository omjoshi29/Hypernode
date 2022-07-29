import React from "react";
// import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./components/Home";
import Courses from "./components/hypernode/Courses";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/:course" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
