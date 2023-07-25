// addproductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const addproductSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {
    setProductData: (state, action) => {
      state.data = action.payload;
    },
    clearProductData: (state) => {
      state.data = null;
    },
  },
});

export const { setProductData, clearProductData } = addproductSlice.actions;
export default addproductSlice.reducer;
