import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import close from "../icons/x.svg";

function Todolist() {
  const items = useSelector((state) => state.notes.items);
  console.log(items[0].text.length);
  console.log(items);
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
      {items.map((item) => (
        <div
          className={`col-${item.text.length > 104 ? "6" : "3"} mt-3`}
          mt-3
          key={item.id}
        >
          <Card className={`${item.color}`}>
            <CardHeader>
              <img src={close} alt="Close" /> {item.title}
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
