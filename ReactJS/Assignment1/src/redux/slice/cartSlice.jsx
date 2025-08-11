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

// ✅ Helper function to recalculate totals
const updateCartTotals = (state) => {
  state.totalItem = state.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  state.totalPrice = state.cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
};

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

      updateCartTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);

      updateCartTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.cartItems = [];
      updateCartTotals(state); // Sets totalItem and totalPrice to 0
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      updateCartTotals(state);
      localStorage.setItem("Cart", JSON.stringify(state));
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity += 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== action.payload
          );
        }
      }
      updateCartTotals(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
