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
      const existingItem = state.cartItems.find((c) => c._id === item._id);
      if (existingItem) {
        state.cartItems = state.cartItems.map((c) =>
          c._id == existingItem._id ? item : c
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      //total price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
      );
      //shipping price
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
      //tax
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice).toFixed(2));
      //total
      state.totalPrice = Number(
        state.itemsPrice + state.shippingPrice + state.taxPrice
      ).toFixed(2);
      //save to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
