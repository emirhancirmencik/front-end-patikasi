/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer({ filterType, setFilter, clearCompleted, list }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {list.filter((e) => e.completed !== true).length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={() => setFilter("All")}
            className={"All" === filterType ? "selected" : null}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={() => setFilter("Active")}
            className={"Active" === filterType ? "selected" : null}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={() => setFilter("Completed")}
            className={"Completed" === filterType ? "selected" : null}
          >
            Completed
          </a>
        </li>
      </ul>
      {list.filter((e) => e.completed === true).length > 0 ? (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
}

export default Footer;
