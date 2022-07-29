import React from "react";
// import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./components/Home";
import Compare from "./components/hypernode/Compare";
import Courses from "./components/hypernode/Courses";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/:course" element={<Courses />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
