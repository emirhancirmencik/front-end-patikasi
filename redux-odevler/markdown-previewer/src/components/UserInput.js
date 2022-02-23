/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../redux/markdown/markdownSlice";

const helper = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Emirhan Cirmencik](https://github.com/emirhancirmencik)*`;

function UserInput() {
  const [text, setText] = useState("this is user input");
  const isActive = useSelector((state) => state.markdown.showHelp);
  const dispatch = useDispatch();

  function handleChange(text) {
    setText(text);
    dispatch(setInput(text));
  }

  useEffect(() => {
    if (isActive) {
      dispatch(setInput(helper));
    } else {
      dispatch(setInput(text));
    }
  }, [isActive]);

  return (
    <div className="form-group">
      <textarea
        className="form-control panel"
        rows="3"
        onChange={(e) => handleChange(e.target.value)}
        value={isActive ? helper : text}
        disabled={isActive}
        id="panel2"
      />
    </div>
  );
}

export default UserInput;
