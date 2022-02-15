import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default notesSlice.reducer;
