import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductDescription.css";
import { useLocation, useParams } from "react-router-dom";
import products from "../../data";
import Ratings from "../../components/Ratings/Ratings";
import im from "../../assets/Mens/Jackets/avengers.webp";

const ProductDescription = () => {
  const { id: productId } = useParams();
  console.log(productId);
  const product = products.find((p) => p.id == productId);
  const {
    name,
    image,
    description,
    category,
    subcategory,
    price,
    stock,
    ratings,
    noofreviews,
    sizes,
  } = product;
  return (
    <div>
      <Navbar />
      <div className="pdesContainer">
        <img src={im} alt={name} className="pdesImage" />
        <div className="pdesRight">
          <h3 className="pdesName">{name}</h3>
          <p className="pdesCategory">
            {category} - {subcategory}
          </p>
          <p className="pdesStock">Stock availability : {stock}</p>
          <p style={{ display: "flex" }}>
            {ratings} <Ratings ratings={ratings} /> ({noofreviews} reviews)
          </p>
          <h1 className="pdesPrice">{price}</h1>
          <h4>Product description</h4>
          <p className="pdesDescription">{description}</p>
          <p
            style={{ marginTop: "30px", fontSize: "20px", fontWeight: "bold" }}
          >
            Available Sizes
          </p>

          {stock > 0 ? (
            <button className="pdesBtn">Add to cart</button>
          ) : (
            <button className="pdesBtn" disabled>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
