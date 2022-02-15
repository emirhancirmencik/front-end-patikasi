import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    activeFilter: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});
export const { addNote, destroy, changeFilter } = notesSlice.actions;
export default notesSlice.reducer;
