import React from "react";
import { Button, Form as BootstrapForm } from "reactstrap";

function Form() {
  return (
    <aside className="h-100">
      <section className=" bg-dark text-light opacity-75 p-4 h-100">
        <BootstrapForm onSubmit={(e) => e.preventDefault()}>
          <div className="form-group filter-text">
            <label htmlFor="title ">Title</label>
            <input type="text" id="title" className="form-control" />
          </div>

          <div className="form-group mt-3 filter-text">
            <label htmlFor="noteText">Note</label>
            <textarea
              className="form-control"
              id="noteText"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group mt-3 filter-text ">
            <label htmlFor="noteColor" className="">
              Color
            </label>
            <div className="form-group mt-3 text-center">
              <Button className="clr-btn rounded-circle  me-1"></Button>
              <Button className="clr-btn rounded-circle me-1"></Button>
              <Button className="clr-btn rounded-circle  me-1"></Button>
              <Button className="clr-btn rounded-circle "></Button>
            </div>
            <div className="form-group mt-3 text-center">
              <Button className="btn rounded-3">Add Note</Button>
            </div>
          </div>
        </BootstrapForm>
      </section>
    </aside>
  );
}

export default Form;
