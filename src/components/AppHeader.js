import React from "react";
import { NavLink } from "react-router-dom";
import '../styled/AppHeader.css';
const AppHeader = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">HOME</NavLink>
      </div>
      <div>
        <NavLink to="/notice">NOTICE</NavLink>
      </div>
      <div>
        <NavLink to="/product">PRODUCT</NavLink>
      </div>
      <div>
        <NavLink to="/Price">PRICE</NavLink>
      </div>
      <div>
        <NavLink to="/Faq">FAQ</NavLink>
      </div>
    </nav>
  );
};
export default AppHeader;
