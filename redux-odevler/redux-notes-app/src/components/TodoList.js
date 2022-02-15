import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";
import close from "../icons/x.svg";
import { useDispatch } from "react-redux";
import { destroy } from "../redux/notes/notesSlice";
let filtered;

function Todolist() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.activeFilter);

  console.log(items);
  filtered = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  window.localStorage.setItem("notes", JSON.stringify(items));

  return (
    <div className="row">
      {filtered.map((item) => (
        <div
          className={`${item.text.length > 114 ? "col-6" : "col-3"} mt-3`}
          key={item.id}
        >
          <Card className={`${item.color}`}>
            <CardHeader>
              <img
                src={close}
                alt="Close"
                onClick={() => dispatch(destroy(item.id))}
              />{" "}
              {item.title}
            </CardHeader>
            <CardBody>
              <CardText>{item.text}</CardText>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Todolist;
