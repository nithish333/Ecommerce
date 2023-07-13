import React from "react";
import "./MensCategory.css";
import Navbar from "../../components/Navbar/Navbar";
import tshirt from "../../assets/Mens/T-shirts/rts.webp";
import jackets from "../../assets/Mens/Jackets/header.jpg";
import joggers from "../../assets/Mens/Joggers/avengers.webp";
import shirts from "../../assets/Mens/Shirts/fl.webp";
import { Link } from "react-router-dom";
const MensCategory = ({ location }) => {
  // const { category } = location.state;
  console.log(location);
  return (
    <div style={{ overflow: "hidden", height: "100%" }}>
      <Navbar />
      <div className="menscontainer">
        <div className="tshirts">
          <img src={tshirt} alt="Men's t-shirt" className="mcat" />

          <Link to={`/mens/tshirts`} className="catbtn link menslink">
            Tshirts
          </Link>
        </div>
        <div className="shirts">
          <img src={shirts} alt="Men's t-shirt" className="mcat" />

          <Link to={`/mens/shirts`} className="catbtn link menslink">
            Shirts
          </Link>
        </div>
        <div className="joggers">
          <img src={joggers} alt="Men's t-shirt" className="mcat" />

          <Link to={`/mens/joggers`} className="catbtn link menslink">
            Joggers
          </Link>
        </div>
        <div className="jackets">
          <img src={jackets} alt="Men's t-shirt" className="mcat" />

          <Link to={`/mens/jackets`} className="catbtn link menslink">
            Jackets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MensCategory;
