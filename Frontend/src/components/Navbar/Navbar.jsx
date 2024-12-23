import React, { useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <h1 className="logo">QuickBite</h1>
      <ul className="navbar-menu">
        <Link
        to='/'
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
        href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
        href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-basket-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M3 6h18l1 12H2L3 6zm2 2l1.5 8h12L19 8H5zM7 18c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm8 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2z" />
          </svg>
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
