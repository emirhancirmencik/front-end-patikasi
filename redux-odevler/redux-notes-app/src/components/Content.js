import React from "react";
import Filter from "./Filter";
import Todolist from "./Todolist";

function Content() {
  return (
    <div className="container">
      <Filter />
      <Todolist />
    </div>
  );
}

export default Content;
