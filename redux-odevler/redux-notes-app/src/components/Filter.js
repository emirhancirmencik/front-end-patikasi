import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/notes/notesSlice";

function Filter() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
    setTitle(e.target.value);
  }

  return (
    <div className="row justify-content-center bg-dark text-light rounded-bottom p-2 ">
      <div className="col-4 text-center align-self-center mb-3">
        <div className="form-group filter-text">
          <label htmlFor="title ">Search</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleChange}
            className="form-control mt-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
