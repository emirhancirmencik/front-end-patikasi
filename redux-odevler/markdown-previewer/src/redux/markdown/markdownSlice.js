import { createSlice } from "@reduxjs/toolkit";

const markdownSlice = createSlice({
  name: "markdown",
  initialState: { text: "this is user input", showHelp: false },

  reducers: {
    setInput: (state, action) => {
      state.text = action.payload;
    },
    setShowHelp: (state, action) => {
      state.showHelp = action.payload;
    },
  },
});

export const { setInput, setShowHelp } = markdownSlice.actions;
export default markdownSlice.reducer;
