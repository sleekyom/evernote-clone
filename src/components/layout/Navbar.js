import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="green">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Notes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/favorites">Favourites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
