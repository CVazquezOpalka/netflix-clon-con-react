import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Singup, Netflix } from "../pages/index";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Singup/>} />
        <Route path="/" element={<Netflix/>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
