import React from "react";
import { useSelector } from "react-redux";
function Todolist() {
  const items = useSelector((state) => state.notes.items);
  return <div>Todolist</div>;
}

export default Todolist;
