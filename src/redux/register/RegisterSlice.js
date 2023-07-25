import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    errors: {}, // Изменяем initialState для хранения ошибок
    isAuthenticated: !!JSON.parse(localStorage.getItem("user"))?.token,
    isFetching: false,
  },
  reducers: {
    setError(state, action) {
      state.errors = action.payload;
    },
    clearErrors(state) {
      state.errors = {}; // Добавляем новый reducer для очистки ошибок
    },
    setFetching(state, action) {
      state.isFetching = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.errors = action.payload;
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

  clearErrors,
} = authSlice.actions;

export default authSlice.reducer;
