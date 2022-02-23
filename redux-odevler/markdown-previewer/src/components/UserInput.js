import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../redux/markdown/markdownSlice";

function UserInput() {
  const [text, setText] = useState("this is user input");
  const dispatch = useDispatch();

  function handleChange(text) {
    setText(text);
    dispatch(setInput(text));
  }

  return (
    <div className="form-group ">
      <textarea
        className="form-control panel"
        rows="3"
        onChange={(e) => handleChange(e.target.value)}
        value={text}
      />
    </div>
  );
}

export default UserInput;
