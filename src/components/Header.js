import React from "react";
import { IMG_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" alt="logo" src={IMG_URL} />
      <ul className="list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
