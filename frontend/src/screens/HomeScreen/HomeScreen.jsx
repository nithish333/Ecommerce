import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import men from "../../assets/men.png";
import women from "../../assets/women.png";
import accessories from "../../assets/punisher.webp";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mens">
          <img src={men} alt="Men's clothing" className="headerImage" />

          <Link
            to={{
              pathname: "/mens",
              state: { category: "mens" },
            }}
            className="btn link menslink"
          >
            Shop Men
          </Link>
        </div>
        <div className="womens">
          <img src={women} alt="Women's clothing" className="headerImage" />{" "}
          <Link
            to={{
              pathname: "/womens",
              state: { category: "womens" },
            }}
            className="btn link womenslink"
          >
            Shop Women
          </Link>
        </div>
        <div className="accessories">
          <img
            src={accessories}
            alt="Women's clothing"
            className="headerImage"
          />

          <Link
            to={{
              pathname: "/accessories",
              state: { category: "accessories" },
            }}
            className="btn link accessorieslink"
          >
            Shop Accessories
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
