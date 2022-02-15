import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: 1,
        title: "Deneme",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        color: "bg-light",
      },
      {
        id: 2,
        title: "Deneme",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        color: "bg-light",
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
