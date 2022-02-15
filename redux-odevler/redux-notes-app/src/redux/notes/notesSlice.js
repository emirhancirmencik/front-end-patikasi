import { createSlice } from "@reduxjs/toolkit";
const defaultItems = [
  {
    id: 0,
    title: "White Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-light",
  },
  {
    id: 1,
    title: "Aqua Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-clr1",
  },
  {
    id: 2,
    title: "Pink Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-clr2",
  },
  {
    id: 3,
    title: "Yellow Note",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio officiis reprehenderit asperiores.",
    color: "bg-clr3",
  },
];
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items:
      JSON.parse(window.localStorage.getItem("notes")) === null
        ? defaultItems
        : JSON.parse(window.localStorage.getItem("notes")),
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
