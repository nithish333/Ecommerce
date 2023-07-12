import React from "react";
import "./MensCategory.css";
import Navbar from "../../components/Navbar/Navbar";
import tshirt from "../../images/Mens/T-shirts/rts.webp";
import jackets from "../../images/Mens/Jackets/header.jpg";
import joggers from "../../images/Mens/Joggers/avengers.webp";
import shirts from "../../images/Mens/Shirts/fl.webp";
import { Link } from "react-router-dom";
const MensCategory = () => {
  return (
    <div style={{ overflow: "hidden", height: "100%" }}>
      <Navbar />
      <div className="menscontainer">
        <div className="tshirts">
          <img src={tshirt} alt="Men's t-shirt" className="mcat" />

          <Link to="/mens/t-shirts" className="catbtn link menslink">
            T-shirts
          </Link>
        </div>
        <div className="shirts">
          <img src={shirts} alt="Men's t-shirt" className="mcat" />

          <Link to="/mens/shirts" className="catbtn link menslink">
            Shirts
          </Link>
        </div>
        <div className="joggers">
          <img src={joggers} alt="Men's t-shirt" className="mcat" />

          <Link to="/mens/joggers" className="catbtn link menslink">
            Joggers
          </Link>
        </div>
        <div className="jackets">
          <img src={jackets} alt="Men's t-shirt" className="mcat" />

          <Link to="/mens/jackets" className="catbtn link menslink">
            Jackets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MensCategory;
