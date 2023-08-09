import React, { useEffect, useState } from "react";
import "./CartItem.css";

import { Link } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrement = () => {
    setQuantity(quantity - 1);
    dispatch(addToCart({ ...item, quantity: quantity - 1 }));
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch(addToCart({ ...item, quantity: quantity + 1 }));
  };
  return (
    <div className="cartItemContainer">
      <div className="cartLeft">
        <img src={item.image} className="cartImage" />
        <div>
          <div className="cartText">
            <Link
              to={`/${item.category}/${item.subcategory}/${item._id}`}
              className="cartNameLink"
            >
              {item.name}
            </Link>
            <p className="cartCategory">
              {item.category} - {item.subcategory}
            </p>
            {quantity > 1 ? (
              <button className="decBtn" onClick={() => handleDecrement()}>
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
            {quantity < item.stock ? (
              <button className="addBtn" onClick={() => handleIncrement()}>
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
        </div>
      </div>
      <div className="cartRight">$ {item.price}</div>
    </div>
  );
};

export default CartItem;
