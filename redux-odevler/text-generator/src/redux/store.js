import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "./lorem/loremSlice";

export default configureStore({
  reducer: { lorem: loremSlice },
});
