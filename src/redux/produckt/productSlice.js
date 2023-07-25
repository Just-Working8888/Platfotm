// productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Создаем асинхронный thunk для выполнения GET-запроса
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(
    "https://orozkg.pythonanywhere.com/api/v1/products/"
  );
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.results;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
