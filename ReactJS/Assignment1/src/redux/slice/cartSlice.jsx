import { createSlice } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";

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
    // addToCart: (state, action) => {
    //   try {
    //     const item = action.payload;
    //     const existingItem = state.cartItems.find((i) => i.id === item.id);

    //     if (existingItem) {
    //       existingItem.quantity += 1;
    //     } else {
    //       state.cartItems.push({ ...item, quantity: 1 });
    //     }

    //     updateCartTotals(state);
    //     localStorage.setItem("cart", JSON.stringify(state));
    //   } catch (err) {
    //     console.error("Error adding to cart:", err);
    //     setError("Something went wrong while adding the item to the cart.");
    //   }
    // },
    addToCart: (state, action) => {
  try {
    const item = action.payload;
    if (!item.id) {
      throw new Error("Invalid product — missing ID");
    }

    const existingItem = state.cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.cartItems.push({ ...item, quantity: 1 });
    }

    updateCartTotals(state);
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (error) {
    console.error(error);
    action.asyncDispatch(setError(error.message)); // custom async dispatch
  }
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
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
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

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
