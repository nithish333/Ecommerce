import React from "react";

import tshirt from "../../assets/mickeymouse.webp";
import jackets from "../../assets/wavengers.webp";
import dresses from "../../assets/dressesheader.webp";
import "./WomensCategory.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const WomensCategory = () => {
  return (
    <div style={{ overflow: "hidden", height: "100%" }}>
      <Navbar />
      <div className="womenscontainer">
        <div className="wtshirts">
          <img src={tshirt} alt="Women's t-shirt" className="mcat" />

          <Link to={`/womens/tshirts`} className="catbtn link womenslink">
            Tshirts
          </Link>
        </div>
        <div className="wshirts">
          <img src={jackets} alt="Women's t-shirt" className="mcat" />

          <Link to={`/womens/shirts`} className="catbtn link womenslink">
            Shirts
          </Link>
        </div>
        <div className="wdresses">
          <img src={dresses} alt="Women's t-shirt" className="mcat" />

          <Link to={`/womens/dresses`} className="catbtn link womenslink">
            Dresses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WomensCategory;
