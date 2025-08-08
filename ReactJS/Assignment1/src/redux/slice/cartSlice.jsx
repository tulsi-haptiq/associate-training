import { createSlice } from "@reduxjs/toolkit";

// Safe load from localStorage
let savedCart = {
  cartItems: [],
  totalItem: 0,
  totalPrice: 0,
};

try {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    savedCart = JSON.parse(storedCart);
  }
} catch (error) {
  console.error("Failed to parse cart data from localStorage:", error);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalItem = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      state.totalItem = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalItem = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
