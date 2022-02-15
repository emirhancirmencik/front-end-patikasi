import { useState } from "react";
import {
  Button,
  Form as BootstrapForm,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
} from "reactstrap";
import { nanoid } from "@reduxjs/toolkit";

import { addNote } from "../redux/notes/notesSlice";
import { useDispatch } from "react-redux";
import check from "../icons/check.svg";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [color, setColor] = useState("bg-light");
  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addNote({ id: nanoid, title, text: note, color }));
    setTitle("");
    setNote("");
  }
  return (
    <aside className="h-100">
      <section className=" bg-dark text-light p-4 h-100">
        <BootstrapForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title ">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="noteText">Note</Label>
            <Input
              className="form-control"
              id="noteText"
              value={note}
              rows="3"
              type="textarea"
              onChange={(e) => setNote(e.target.value)}
            ></Input>
          </FormGroup>
          <FormGroup>
            <FormGroup>
              <Label htmlFor="noteColor" className="">
                Color
              </Label>
              <div className="container ">
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <Button
                      type="button"
                      className="my-btn btn btn-light mt-1 shadow-none"
                      onClick={(e) => setColor("bg-light")}
                    >
                      {color === "bg-light" && <img src={check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3">
                    <Button
                      type="button"
                      className="my-btn btn-clr1 mt-1 shadow-none"
                      onClick={(e) => setColor("btn-clr1")}
                    >
                      {color === "btn-clr1" && <img src={check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3">
                    <Button
                      type="button"
                      className="my-btn btn-clr2 mt-1 shadow-none"
                      onClick={(e) => setColor("btn-clr2")}
                    >
                      {color === "btn-clr2" && <img src={check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3">
                    <Button
                      type="button"
                      className="my-btn btn-clr3 mt-1 shadow-none"
                      onClick={(e) => setColor("btn-clr3")}
                    >
                      {color === "btn-clr3" && <img src={check} alt="" />}
                    </Button>
                  </div>
                </div>
              </div>
            </FormGroup>

            <FormGroup className="text-center mt-3">
              <Button type="submit" className="btn rounded-3">
                Add Note
              </Button>
            </FormGroup>
          </FormGroup>
        </BootstrapForm>
      </section>
    </aside>
  );
}

export default Form;
