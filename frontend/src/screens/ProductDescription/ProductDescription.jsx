import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductDescription.css";
import { useParams } from "react-router-dom";
import Ratings from "../../components/Ratings/Ratings";
import { useGetProductDescriptionQuery } from "../../slices/productsApiSlice";
import Loader from "../../components/Loader/Loader";

const ProductDescription = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDescriptionQuery(productId);
  console.log(product);
  // const {
  //   name,
  //   image,
  //   description,
  //   category,
  //   subcategory,
  //   price,
  //   stock,
  //   ratings,
  //   noofreviews,
  //   sizes,
  // } = product;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <div>
          <Navbar />
          <div className="pdesContainer">
            <img src={product.image} alt={product.name} className="pdesImage" />
            <div className="pdesRight">
              <h3 className="pdesName">{product.name}</h3>
              <p className="pdesCategory">
                {product.category} - {product.subcategory}
              </p>
              <p className="pdesStock">Stock availability : {product.stock}</p>
              <p style={{ display: "flex" }}>
                {product.ratings} <Ratings ratings={product.ratings} /> (
                {product.noofreviews} reviews)
              </p>
              <h1 className="pdesPrice">$ {product.price}</h1>
              <h4>Product description</h4>
              <p className="pdesDescription">{product.description}</p>
              <p
                style={{
                  marginTop: "30px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Available Sizes
              </p>

              {product.stock > 0 ? (
                <button className="pdesBtn">Add to cart</button>
              ) : (
                <button className="pdesBtn" disabled>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescription;
