// loginSlice.js

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null, // Add an error state to store the login error message
    isAuthenticated: !!JSON.parse(localStorage.getItem("user"))?.token,
    isFetching: false,
  },
  reducers: {
    setFetching(state, action) {
      state.isFetching = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.error = action.payload; // Set the error state with the error message
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    removeIncorrectToken(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const {
  setFetching,
  setUser,
  setError,
  setAuthenticated,
  removeIncorrectToken,
} = loginSlice.actions;

export default loginSlice.reducer;
