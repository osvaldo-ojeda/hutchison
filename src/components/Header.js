import React from "react";
import Logo from "./Logo";
import DropDownNav from "./DropDownNav";
import DropDownLoged from "./DropDownLoged";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <Logo />
      {location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/singin" ? (
        <DropDownNav />
      ) : (
        <DropDownLoged />
      )}
    </header>
  );
};

export default Header;
