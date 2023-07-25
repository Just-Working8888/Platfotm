import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./register/RegisterSlice";
import loginReducer from "./auth/loginSlice";
import addproductReducer from './AddProdukt/productSlice'
import productReducer from './produckt/productSlice'
// Импортируйте другие редьюсеры для других срезов, если у вас есть

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  product: addproductReducer,
  products: productReducer,
  // Добавьте другие срезы состояния здесь, если у вас есть
  // например: someSlice: someSliceReducer,
});

const store = configureStore({
  reducer: rootReducer, // Передайте корневой редьюсер в хранилище
});

export default store;
