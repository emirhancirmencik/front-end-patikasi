import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./Card/cardSlice";

export default configureStore({ reducer: { cards: cardSlice } });
