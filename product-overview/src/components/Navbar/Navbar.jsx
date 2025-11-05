import React from "react";
import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Product Overview</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
