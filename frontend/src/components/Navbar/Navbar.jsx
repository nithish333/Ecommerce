import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // console.log(totalCount);
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
        <li className="navlink" onClick={() => navigate("/cart")}>
          <span className="cartlink">
            <FaShoppingCart />

            <span className="cartlinktext">{totalCount}</span>
          </span>
          Cart
        </li>
        <li className="navlink">
          <FaUser /> SignIn
        </li>
      </div>
    </div>
  );
};

export default Navbar;
