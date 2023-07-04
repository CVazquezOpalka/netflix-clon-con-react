import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Singup, Netflix } from "../pages/index";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/index";

const MyRoutes = () => {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/singup";
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      {showNavbar && <Navbar isScrolled={isScrolled} />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/" element={<Netflix />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
