import { createSlice } from "@reduxjs/toolkit";

const markdownSlice = createSlice({
  name: "markdown",
  initialState: { text: "this is user input", showHelp: false },

  reducers: {
    setInput: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setInput } = markdownSlice.actions;
export default markdownSlice.reducer;
