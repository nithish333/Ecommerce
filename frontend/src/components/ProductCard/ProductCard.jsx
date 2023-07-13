import React from "react";
import { Link } from "react-router-dom";
import im from "../../assets/Mens/Jackets/avengers.webp";
import "./ProductCard.css";
import Ratings from "../Ratings/Ratings";

const ProductCard = ({ product }) => {
  const { ratings, price, subcategory, image } = product;
  return (
    <div className="productCard">
      <img src={im} alt={product.name} className="cardImage" />
      <br />
      <Link to={`/mens/tshirts/${product.id}`} className="cardName">
        {product.name}
      </Link>
      <p className="cardsubcategory">{subcategory}</p>
      <div
        className="randp"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "#E59819", fontWeight: "bold" }}>{ratings}</p>
          <Ratings ratings={ratings} />
          <p> ({product.noofreviews})</p>
        </div>
        <h2 className="cardPrice">${price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
