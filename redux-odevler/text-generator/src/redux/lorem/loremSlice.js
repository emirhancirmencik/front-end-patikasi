import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLoremAsync = createAsyncThunk(
  "lorem/getLoremAsync",
  async () => {
    const res = await axios(
      "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
    );
    return res.data;
  }
);

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    paragraphs: [],
    quantity: 1,
    isHTML: false,
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getLoremAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getLoremAsync.fulfilled]: (state, action) => {
      state.paragraphs = action.payload;
      state.isLoading = false;
    },
    [getLoremAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default loremSlice.reducer;
