import { createSlice } from "@reduxjs/toolkit";
import defaultItems from "./defaultItems";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items:
      JSON.parse(window.localStorage.getItem("products")) === null
        ? defaultItems
        : JSON.parse(window.localStorage.getItem("products")),
    money:
      window.localStorage.getItem("money") === null
        ? 100000000000
        : parseInt(window.localStorage.getItem("money")),
    loading: false,
  },
  reducers: {
    changeAmount: (state, action) => {
      const id = action.payload.id;
      const amount = parseInt(action.payload.amount);
      if (amount > state.items[id - 1].amount) {
        const change = amount - state.items[id - 1].amount;
        state.items[id - 1].amount = amount;
        state.money -= change * parseInt(state.items[id - 1].price);
      } else if (amount === 0) {
        const change = state.items[id - 1].amount;
        state.items[id - 1].amount = amount;
        state.money += change * parseInt(state.items[id - 1].price);
      } else if (amount < state.items[id - 1].amount) {
        const change = state.items[id - 1].amount - amount;
        state.items[id - 1].amount = amount;
        state.money += change * parseInt(state.items[id - 1].price);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      console.log(state.loading);
    },
  },
});

export const { changeAmount, setLoading } = productsSlice.actions;
export default productsSlice.reducer;
