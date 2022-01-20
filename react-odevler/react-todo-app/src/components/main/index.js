import React from "react";

function Main({ filtered, completeTodo, toggleAll, destroy }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label onClick={toggleAll} htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filtered.map((item, key) => (
          <li key={key} className={item.completed ? "completed" : null}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => completeTodo(item)}
                checked={item.completed}
              />
              <label>{item.text}</label>
              <button
                onClick={() => destroy(item)}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
