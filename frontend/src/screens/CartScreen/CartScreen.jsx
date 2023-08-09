import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./CartScreen.css";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";

const CartScreen = () => {
  const { itemsPrice, shippingPrice, taxPrice, totalPrice, cartItems } =
    useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="cartScreen">
      <Navbar />
      <div className="cartScreenContainer">
        <div className="cartScreenItems">
          {cartItems.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </div>
        <div className="cartScreenRight">
          <div className="priceBox">
            <p>Items price</p>
            <h4>${itemsPrice}</h4>
          </div>
          <div className="priceBox">
            <p>Shipping </p>
            <h4>${shippingPrice}</h4>
          </div>
          <div className="priceBox">
            <p>Estimated tax</p>
            <h4>${taxPrice}</h4>
          </div>
          <div className="priceBox">
            <h4>Total</h4>
            <h2>${totalPrice}</h2>
          </div>
          <button className="checkOutBtn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
