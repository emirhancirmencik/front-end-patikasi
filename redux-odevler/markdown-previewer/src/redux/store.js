import markdownSlice from "./markdown/markdownSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { markdown: markdownSlice },
});
