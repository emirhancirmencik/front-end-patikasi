import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    frameworkNames: [
      "angular2",
      "vue",
      "react",
      "grunt",
      "phantomjs",
      "ember",
      "babel",
      "ionic",
      "gulp",
      "meteor",
      "yeoman",
      "yarn",
      "nodejs",
      "bower",
      "browserify",
    ],
    list: [],
    opened: [],
    completed: [],
    score: 0,
  },
  reducers: {
    createCard: (state, action) => {
      state.list.push(action.payload);
    },
    changeScore: (state, action) => {
      if (action.payload.score) {
        state.score += 50;
      } else {
        state.score -= 10;
      }
    },
    flipCard: (state, action) => {
      const index = state.list.findIndex(
        (post) => post.id === action.payload.id
      );

      const index1 = state.opened.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index1 === -1) {
        state.opened.push(state.list[index]);
      }

      if (state.list[index].opened === false) {
        state.list[index].opened = true;
      } else {
        state.list[index].opened = false;
        state.opened = [];
      }
    },
    check: (state, action) => {
      if (state.opened.length === 2) {
        const index1 = state.list.findIndex(
          (post) => post.id === state.opened[0].id
        );
        const index2 = state.list.findIndex(
          (post) => post.id === state.opened[1].id
        );
        if (state.opened[0].name === state.opened[1].name) {
          state.list[index1].completed = true;
          state.list[index2].completed = true;
          state.completed.push(state.list[index1]);
          state.completed.push(state.list[index2]);
          state.score += 50;
        } else {
          state.list[index1].opened = false;
          state.list[index2].opened = false;
          state.score -= 10;
        }
        state.opened = [];
      }
    },
    restart: (state, action) => {
      state.list = [];
      state.opened = [];
      state.completed = [];
      state.score = 0;
    },
  },
});

export const { createCard, changeScore, flipCard, check, restart } =
  cardSlice.actions;
export default cardSlice.reducer;
