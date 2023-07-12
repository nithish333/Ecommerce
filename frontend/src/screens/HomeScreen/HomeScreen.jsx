import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import men from "../../images/men.png";
import women from "../../images/women.png";
import accessories from "../../images/Accessories/Backpacks/punisher.webp";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mens">
          <img src={men} alt="Men's clothing" className="headerImage" />

          <Link to="/mens" className="btn link menslink">
            Shop Men
          </Link>
        </div>
        <div className="womens">
          <img src={women} alt="Women's clothing" className="headerImage" />{" "}
          <Link to="/womens" className="btn link womenslink">
            Shop Women
          </Link>
        </div>
        <div className="accessories">
          <img
            src={accessories}
            alt="Women's clothing"
            className="headerImage"
          />

          <Link to="/accessories" className="btn link accessorieslink">
            Shop Accessories
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
