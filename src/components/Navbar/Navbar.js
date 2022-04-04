import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className={style.navbar}>
      <h3 className={style.logo}>Logo</h3>
      <ul
        className={
          isMobile ? `${style.nav_links_mobile}` : `${style.nav_links}`
        }
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className={style.navitems}>
          <li>Home</li>
        </Link>
        <Link to="/about" className={style.navitems}>
          <li>About</li>
        </Link>
        <Link to="/skills" className={style.navitems}>
          <li>Skills</li>
        </Link>
        <Link to="/contact" className={style.navitems}>
          <li>Contact</li>
        </Link>
        <Link to="/signup" className={style.navitems}>
          <li>SignUp</li>
        </Link>
      </ul>
      <button
        className={style.mobile_menu_icon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
