import React from "react";
import Filter from "./Filter";
import TodoList from "./TodoList";

function Content() {
  return (
    <div className="container">
      <Filter />
      <TodoList />
    </div>
  );
}

export default Content;
