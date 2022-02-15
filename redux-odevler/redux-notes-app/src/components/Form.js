import { useState } from "react";
import {
  Button,
  Form as BootstrapForm,
  FormGroup,
  Label,
  Input,
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
  const [noteValid, setNoteValid] = useState(true);
  const [titleValid, setTitleValid] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    if (title.length === 0 && note.length === 0) {
      setTitleValid(false);
      setNoteValid(false);
      return;
    }
    if (title.length === 0) {
      setTitleValid(false);
      return;
    }
    if (note.length === 0) {
      setNoteValid(false);
      return;
    }

    dispatch(addNote({ id: nanoid(), title, text: note, color }));
    setTitle("");
    setNote("");
    setTitleValid(true);
    setNoteValid(true);
  }
  return (
    <aside className="h-100">
      <section className="d-flex flex-column bg-dark text-light p-4 h-100">
        <BootstrapForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title ">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              invalid={!titleValid && title.length === 0}
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
              invalid={!noteValid && note.length === 0}
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
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn btn btn-light mt-1 shadow-none"
                      onClick={(e) => setColor("bg-light")}
                    >
                      {color === "bg-light" && <img src={check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn bg-clr1 mt-1 shadow-none"
                      onClick={(e) => setColor("bg-clr1")}
                    >
                      {color === "bg-clr1" && <img src={check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn bg-clr2 mt-1 shadow-none"
                      onClick={(e) => setColor("bg-clr2")}
                    >
                      {color === "bg-clr2" && <img src={check} alt="" />}
                    </Button>
                  </div>
                  <div className="col-6 col-lg-3 text-center">
                    <Button
                      type="button"
                      className="my-btn bg-clr3 mt-1 shadow-none"
                      onClick={(e) => setColor("bg-clr3")}
                    >
                      {color === "bg-clr3" && <img src={check} alt="" />}
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
        <div className="row text-center" style={{ marginTop: "auto" }}>
          <p>
            developed by{" "}
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="https://github.com/emirhancirmencik"
              className="text-muted"
            >
              emirhan cirmencik
            </a>
          </p>
        </div>
      </section>
    </aside>
  );
}

export default Form;
