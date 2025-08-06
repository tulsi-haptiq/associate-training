import React from "react";
import { createSlice } from "@reduxjs/toolkit";

// initial state of cart
const initialState = {
  cartItems: [],
  totalItem: 0,
  totalPrice: 0,
};

//create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart action
    addToCart(state, action) {
      const product = action.payload;
      const price = parseFloat(product.price); // ✅ Always convert to number
      
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // if present increase quantity
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 , price});
      }

      state.totalItem += 1;
      state.totalPrice += price;
    },

    // to remove the product
    removeFromCart(state, action) {
      const productId = action.payload;
      const itemToRemove = state.cartItems.find(
        (item) => item.id === productId
      );

      if (itemToRemove) {
        state.totalItem -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
      }
    },

    // clear the cart
    clearCart(state) {
      state.cartItems = [];
      state.totalItem = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
