import { useState } from "react";
function Header({ list, setList }) {
  const initialState = { text: "", completed: false };
  const [form, setForm] = useState(initialState);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, completed: false });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.text === "" || list.filter((e) => e.text === form.text).length) {
      return false;
    }
    setList([...list, form]);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

export default Header;
