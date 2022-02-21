import { createSlice, nanoid } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    frameworks: [
      { id: nanoid(), name: "angular2" },
      { id: nanoid(), name: "vue" },
      { id: nanoid(), name: "react" },
      { id: nanoid(), name: "grunt" },
      { id: nanoid(), name: "phantomjs" },
      { id: nanoid(), name: "ember" },
      { id: nanoid(), name: "babel" },
      { id: nanoid(), name: "ionic" },
      { id: nanoid(), name: "gulp" },
      { id: nanoid(), name: "meteor" },
      { id: nanoid(), name: "yeoman" },
      { id: nanoid(), name: "yarn" },
      { id: nanoid(), name: "nodejs" },
      { id: nanoid(), name: "bower" },
      { id: nanoid(), name: "browserify" },
    ],
  },
  reducers: {},
});

export default cardSlice.reducer;
