import { createSlice } from "@reduxjs/toolkit";

let savedUser = null;

try {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    savedUser = JSON.parse(storedUser);
  }
} catch (error) {
  console.error("Failed to parse user data from localStorage:", error);
}

const initialState = {
  user: savedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
