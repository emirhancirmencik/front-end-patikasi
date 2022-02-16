import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
export default configureStore({
  reducer: { products: productsSlice },
});
