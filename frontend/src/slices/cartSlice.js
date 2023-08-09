import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id == item._id);
      console.log(item);
      if (existingItem) {
        //update the quantity of that item
        state.cartItems = state.cartItems.map((x) =>
          x._id === existingItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      //items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, x) => acc + x.price * x.quantity, 0)
      );
      //shipping price
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 7);
      //tax price
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));
      //total price
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
