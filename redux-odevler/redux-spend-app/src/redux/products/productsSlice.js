import { createSlice } from "@reduxjs/toolkit";
import defaultItems from "./defaultItems";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: JSON.parse(window.localStorage.getItem("products")) && defaultItems,
  },
});

export default productsSlice.reducer;
