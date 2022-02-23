import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLoremAsync = createAsyncThunk(
  "lorem/getLoremAsync",
  async (par) => {
    const data = await par;
    const res = await axios(
      `https://baconipsum.com/api/?type=meat-and-filler&paras=${data.number}&start-with-lorem=1&format=${data.select}`
    );

    return res.data.split("\n");
  }
);

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    paragraphs: [],
    quantity: 1,
    isHTML: false,
  },
  reducers: {},
  extraReducers: {
    [getLoremAsync.fulfilled]: (state, action) => {
      state.paragraphs = action.payload;
      state.isLoading = false;
    },
  },
});

export default loremSlice.reducer;
