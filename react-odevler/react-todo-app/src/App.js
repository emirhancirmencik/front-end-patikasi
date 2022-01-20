/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  const [list, setList] = useState([
    {
      text: "Learn Javascript",
      completed: true,
    },
    {
      text: "Learn React",
      completed: false,
    },
    { text: "Have a life!", completed: false },
  ]);

  const [filterType, setFilter] = useState("All");
  const [filtered, setFiltered] = useState(list);

  function completeTodo(item) {
    item.completed = !item.completed;
    setFiltered([...filtered]);
    setList([...list]);
  }

  function toggleAll() {
    filtered.forEach((e) => (e.completed = true));
    setList([...list]);
  }

  function destroy(item) {
    item.text = " ";
    setFiltered(filtered.filter((e) => e.text !== " "));
    setList(list.filter((e) => e.text !== " "));
  }

  function clearCompleted() {
    list.filter((e) => e.completed === true).forEach((e) => destroy(e));
  }

  function filter() {
    if (filterType === "All") {
      setFiltered(list);
    } else if (filterType === "Active") {
      setFiltered(list.filter((e) => e.completed === false));
    } else {
      setFiltered(list.filter((e) => e.completed === true));
    }
  }

  useEffect(() => {
    filter();
  }, [filterType, list]);

  return (
    <div>
      <section className="todoapp">
        <Header list={list} setList={setList} />
        <Main
          filtered={filtered}
          completeTodo={completeTodo}
          toggleAll={toggleAll}
          destroy={destroy}
        />
        <Footer
          setFilter={setFilter}
          filterType={filterType}
          list={list}
          clearCompleted={clearCompleted}
        />
      </section>
      <footer className="info">
        <p>
          Created by
          <a href="https://github.com/emirhancirmencik/"> Emirhan ÇİRMENCİK</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
