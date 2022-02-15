import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import close from "../icons/x.svg";
import { useDispatch } from "react-redux";
import { destroy } from "../redux/notes/notesSlice";
let filtered;

function Todolist() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.activeFilter);

  filtered = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="row">
      <div className="col-3 mt-3 bg">
        <Card className="bg-light">
          <CardHeader>
            <img src={close} alt="" /> Header
          </CardHeader>
          <CardBody>
            <CardTitle> Card Title </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-3 mt-3">
        <Card style={{ backgroundColor: "#7EFFDB" }}>
          <CardHeader>
            <img src={close} alt="" /> Header
          </CardHeader>
          <CardBody>
            <CardTitle> Card Title </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-3 mt-3">
        <Card style={{ backgroundColor: "#FF9DE2" }}>
          <CardHeader>
            <img src={close} alt="" /> Header
          </CardHeader>
          <CardBody>
            <CardTitle> Card Title </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-3 mt-3">
        <Card style={{ backgroundColor: "#ffe477" }}>
          <CardHeader>
            <img src={close} alt="" /> Header
          </CardHeader>
          <CardBody>
            <CardTitle> Card Title </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div>
      {filtered.map((item) => (
        <div
          className={`${item.text.length > 104 ? "col-6" : "col-3"} mt-3`}
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
