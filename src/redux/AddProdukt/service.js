// productService.js
import axios from "axios";

const BASE_URL = "https://orozkg.pythonanywhere.com/api/v1/products/";

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(BASE_URL, productData);
    return response.data;
  } catch (error) {
    throw new Error("Error creating product.");
  }
};
