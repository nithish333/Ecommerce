import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductDescription.css";
import { useParams, useNavigate } from "react-router-dom";
import Ratings from "../../components/Ratings/Ratings";
import { useGetProductDescriptionQuery } from "../../slices/productsApiSlice";
import Loader from "../../components/Loader/Loader";
import { addToCart } from "../../slices/cartSlice";

const ProductDescription = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDescriptionQuery(productId);
  console.log(product);
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate("/cart");
  };
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
              <h4>Available Sizes</h4>
              {product.stock > 0 ? (
                <div>
                  <h4>Select quantity </h4>
                  {quantity > 1 ? (
                    <button
                      className="decBtn"
                      onClick={() => handleDecrement()}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="dis decBtn"
                      disabled
                      onClick={() => handleDecrement()}
                    >
                      -
                    </button>
                  )}
                  <span className="qty">{quantity}</span>
                  {quantity < product.stock ? (
                    <button
                      className="addBtn"
                      onClick={() => handleIncrement()}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className="dis addBtn"
                      disabled
                      onClick={() => handleIncrement()}
                    >
                      +
                    </button>
                  )}
                </div>
              ) : (
                ""
              )}
              {product.stock > 0 ? (
                <button className="pdesBtn" onClick={addToCartHandler}>
                  Add to cart
                </button>
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
