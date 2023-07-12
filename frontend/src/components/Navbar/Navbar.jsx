import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Elite threads" className="logo" />
      </Link>
      <div className="searchContainer">
        <input
          type="text"
          className="searchBar"
          placeholder="Search for items.."
        />
        <button className="searchBtn">
          <FaSearch /> Search
        </button>
      </div>
      <div className="navLinks">
        <li className="navlink">
          <FaShoppingCart /> Cart
        </li>
        <li className="navlink">
          <FaUser /> SignIn
        </li>
      </div>
    </div>
  );
};

export default Navbar;
