import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoremAsync } from "../redux/lorem/loremSlice";

function Form() {
  const dispatch = useDispatch();
  const paragraphs = useSelector((state) => state.lorem.paragraphs);
  const [number, setNumber] = useState(4);
  const [select, setSelect] = useState("text");

  const handleChangeNumber = (number) => {
    if (number < 1) {
      setNumber(1);
      return;
    }
    setNumber(number);
  };

  const handleChangeSelect = (select) => {
    if (select === null) {
      setSelect("html");
      return;
    }
    setSelect(select);
  };

  function onClick(e) {
    navigator.clipboard.writeText(paragraphs);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  useEffect(() => {
    dispatch(getLoremAsync({ number: number, select: select }));
  }, [dispatch, number, select]);

  return (
    <div className="container my-auto">
      <div className="row w-50 mx-auto mt-3">
        <div className="col-md-12 col-lg-4">
          <div className="form-control border-0 bg-transparent font-weight">
            <label htmlFor="number" className="form-label">
              Paragraphs
            </label>
            <input
              type="number"
              className="form-control font-weight"
              id="number"
              onChange={(e) => handleChangeNumber(e.target.value)}
              value={number}
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className="form-control border-0 bg-transparent font-weight">
            <label htmlFor="select" className="form-label">
              Include HTML
            </label>
            <select
              className="form-select font-weight"
              aria-label="Default select example"
              id="select"
              onChange={(e) => handleChangeSelect(e.target.value)}
              value={select}
            >
              <option value="html">Yes</option>
              <option value="text">No</option>
            </select>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className="form-control border-0 bg-transparent font-weight">
            <label htmlFor="copy" className="form-label">
              Copy
            </label>
            <div className="mytooltip">
              <input
                type="button"
                className="form-control font-weight"
                id="copy"
                onClick={(e) => onClick(e)}
                onMouseOut={outFunc}
                value="Copy Text"
              />
              <span className="mytooltiptext" id="myTooltip">
                Copy to clipboard
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
