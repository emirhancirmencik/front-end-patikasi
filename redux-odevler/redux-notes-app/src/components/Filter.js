import React from "react";
import { Button } from "reactstrap";

function Filter() {
  return (
    <div className="row justify-content-center bg-dark text-light opacity-75 p-2 ">
      <div className="col-4 navbar-nav d-flex align-items-center">
        <div className="nav-text text-light">Filter With Colors</div>
        <div className="nav-item">
          <Button className="clr-btn rounded-circle  me-3"></Button>
          <Button className="clr-btn rounded-circle me-3"></Button>
          <Button className="clr-btn rounded-circle  me-3"></Button>
          <Button className="clr-btn rounded-circle  me-3"></Button>
        </div>
      </div>
      <div className="col-4 text-center align-self-center">
        <label
          htmlFor="filter"
          className="nav-text filter-text text-light me-1"
        >
          Filter With Text
        </label>
        <input id="filter" type="text" />
      </div>
    </div>
  );
}

export default Filter;
